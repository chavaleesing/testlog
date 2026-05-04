const { parseMessage, PERIOD_MORNING, PERIOD_NIGHT } = require('./parser');
const { getSession, setSession, saveHealthRecord, addWaterOutput, getTodaySummary } = require('./healthService');

const HELP_TEXT = `📋 วิธีบันทึกข้อมูลสุขภาพ

🔹 ตั้งช่วงเวลา:
  เช้า  หรือ  ก่อนนอน
  (ค่าเริ่มต้น: เช้า)

🔹 รูปแบบคำสั่ง:
  HR=70         อัตราการเต้นหัวใจ (bpm)
  BP=120/80     ความดันโลหิต (ซิสโตลิก/ไดแอสโตลิก)
  SPO2=98       ออกซิเจนในเลือด (%)
  WT=65         น้ำหนัก (kg)
  WI=1500       น้ำดื่มรวมวันนี้ (ml)
  WO=300        น้ำออก (ml) — บันทึกได้หลายครั้ง

🔹 ส่งหลายค่าพร้อมกัน:
  HR=70, BP=120/80, SPO2=98

🔹 ดูสรุปวันนี้:
  สรุป  หรือ  summary

ข้อมูลสุขภาพ (HR, BP, SPO2, WT) บันทึก 2 ครั้ง/วัน
น้ำออก (WO) บันทึกได้ไม่จำกัดครั้ง
น้ำดื่ม (WI) บันทึก 1 ครั้ง/วัน (ก่อนนอน)`;

async function handleTextMessage(userId, text) {
  const trimmed = text.trim();

  // Help command
  if (['help', 'ช่วยเหลือ', '?', 'วิธีใช้'].includes(trimmed.toLowerCase())) {
    return HELP_TEXT;
  }

  // Summary command
  if (['สรุป', 'summary', 'today', 'วันนี้'].includes(trimmed.toLowerCase())) {
    return await buildSummaryMessage(userId);
  }

  const entries = parseMessage(trimmed);

  if (!entries || entries.length === 0) {
    return `ไม่เข้าใจคำสั่ง 🤔\nพิมพ์ "help" เพื่อดูวิธีใช้งาน`;
  }

  // Check if any entry is a period setter
  const periodEntry = entries.find((e) => e.type === 'period');
  if (periodEntry) {
    await setSession(userId, { period: periodEntry.value });
    const remaining = entries.filter((e) => e.type !== 'period');
    if (remaining.length === 0) {
      return `✅ ตั้งช่วงเวลาเป็น "${periodEntry.value}" แล้ว`;
    }
    // Process remaining entries with new period
    return await processHealthEntries(userId, periodEntry.value, remaining);
  }

  const session = await getSession(userId);
  return await processHealthEntries(userId, session.period, entries);
}

async function processHealthEntries(userId, period, entries) {
  const messages = [];
  const healthFields = {};
  let waterOutputTotal = null;

  for (const entry of entries) {
    if (entry.type === 'water_output') {
      waterOutputTotal = await addWaterOutput(userId, entry.value);
      messages.push(`💧 บันทึกน้ำออก ${entry.value} ml (รวมวันนี้: ${waterOutputTotal} ml)`);
      continue;
    }

    if (entry.type === 'water_intake') {
      healthFields['water_intake'] = entry.value;
      messages.push(`🥤 น้ำดื่ม ${entry.value} ml`);
      continue;
    }

    if (entry.type === 'hr') {
      healthFields['hr'] = entry.value;
      const status = getHrStatus(entry.value);
      messages.push(`❤️ อัตราการเต้นหัวใจ ${entry.value} bpm${status}`);
      continue;
    }

    if (entry.type === 'bp') {
      healthFields['bp_systolic'] = entry.systolic;
      healthFields['bp_diastolic'] = entry.diastolic;
      const status = getBpStatus(entry.systolic, entry.diastolic);
      messages.push(`🩺 ความดัน ${entry.systolic}/${entry.diastolic} mmHg${status}`);
      continue;
    }

    if (entry.type === 'spo2') {
      healthFields['spo2'] = entry.value;
      const status = getSpo2Status(entry.value);
      messages.push(`🫁 SpO2 ${entry.value}%${status}`);
      continue;
    }

    if (entry.type === 'weight') {
      healthFields['weight'] = entry.value;
      messages.push(`⚖️ น้ำหนัก ${entry.value} kg`);
      continue;
    }
  }

  if (Object.keys(healthFields).length > 0) {
    await saveHealthRecord(userId, period, healthFields);
  }

  if (messages.length === 0) return null;

  const header = `✅ บันทึกข้อมูล [${period}] เรียบร้อย\n`;
  return header + messages.join('\n');
}

async function buildSummaryMessage(userId) {
  const summary = await getTodaySummary(userId);
  const lines = [`📊 สรุปสุขภาพวันที่ ${summary.date}\n`];

  if (summary.morning) {
    lines.push('🌅 เช้า:');
    lines.push(formatPeriodData(summary.morning));
  } else {
    lines.push('🌅 เช้า: ยังไม่มีข้อมูล');
  }

  lines.push('');

  if (summary.night) {
    lines.push('🌙 ก่อนนอน:');
    lines.push(formatPeriodData(summary.night));
  } else {
    lines.push('🌙 ก่อนนอน: ยังไม่มีข้อมูล');
  }

  if (summary.waterOutput) {
    lines.push('');
    lines.push(`💧 น้ำออกรวม: ${summary.waterOutput.totalOutput} ml (${summary.waterOutput.entries.length} ครั้ง)`);
  }

  return lines.join('\n');
}

function formatPeriodData(data) {
  const parts = [];
  if (data.hr !== undefined) parts.push(`  ❤️ HR: ${data.hr} bpm`);
  if (data.bp_systolic !== undefined) parts.push(`  🩺 BP: ${data.bp_systolic}/${data.bp_diastolic} mmHg`);
  if (data.spo2 !== undefined) parts.push(`  🫁 SpO2: ${data.spo2}%`);
  if (data.weight !== undefined) parts.push(`  ⚖️ น้ำหนัก: ${data.weight} kg`);
  if (data.water_intake !== undefined) parts.push(`  🥤 น้ำดื่ม: ${data.water_intake} ml`);
  return parts.length ? parts.join('\n') : '  (ไม่มีข้อมูล)';
}

function getHrStatus(hr) {
  if (hr < 60) return ' ⚠️ ช้าเกิน';
  if (hr > 100) return ' ⚠️ เร็วเกิน';
  return ' ✓';
}

function getBpStatus(sys, dia) {
  if (sys >= 140 || dia >= 90) return ' ⚠️ สูง';
  if (sys < 90 || dia < 60) return ' ⚠️ ต่ำ';
  return ' ✓';
}

function getSpo2Status(spo2) {
  if (spo2 < 95) return ' ⚠️ ต่ำ';
  return ' ✓';
}

module.exports = { handleTextMessage };
