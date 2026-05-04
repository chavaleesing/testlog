/**
 * Parse health data from user text message.
 *
 * Supported formats (case-insensitive):
 *   HR=70         -> heart rate
 *   BP=120/80     -> blood pressure (systolic/diastolic)
 *   SPO2=98       -> oxygen saturation
 *   O2=98         -> alias for SPO2
 *   WT=65         -> weight (kg)
 *   WEIGHT=65     -> alias
 *   WI=1500       -> water intake (ml)
 *   WO=300        -> water output (ml) — additive, multiple times/day
 *   PERIOD=เช้า   -> set recording period (เช้า / ก่อนนอน)
 *   เช้า          -> shorthand for period
 *   ก่อนนอน      -> shorthand for period
 */

const PERIOD_MORNING = 'เช้า';
const PERIOD_NIGHT = 'ก่อนนอน';

function parseMessage(text) {
  const results = [];
  const normalized = text.trim();

  // Standalone period keyword
  if (normalized === PERIOD_MORNING || normalized === 'morning') {
    return [{ type: 'period', value: PERIOD_MORNING }];
  }
  if (normalized === PERIOD_NIGHT || normalized === 'bedtime' || normalized === 'ก่อนนอน') {
    return [{ type: 'period', value: PERIOD_NIGHT }];
  }

  // Split by newline or comma to allow multi-value messages
  const lines = normalized.split(/[\n,]+/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const parsed = parseSingleEntry(trimmed);
    if (parsed) results.push(parsed);
  }

  return results;
}

function parseSingleEntry(text) {
  // Match KEY=VALUE pattern
  const match = text.match(/^([a-zA-Zก-๙0-9_]+)\s*=\s*(.+)$/i);
  if (!match) return null;

  const key = match[1].toUpperCase().trim();
  const raw = match[2].trim();

  switch (key) {
    case 'HR':
    case 'HEARTRATE': {
      const val = parseFloat(raw);
      if (isNaN(val)) return null;
      return { type: 'hr', value: val, unit: 'bpm', label: 'อัตราการเต้นหัวใจ' };
    }

    case 'BP':
    case 'BLOODPRESSURE': {
      const bpMatch = raw.match(/^(\d+)\s*\/\s*(\d+)$/);
      if (!bpMatch) return null;
      return {
        type: 'bp',
        systolic: parseInt(bpMatch[1]),
        diastolic: parseInt(bpMatch[2]),
        label: 'ความดันโลหิต',
      };
    }

    case 'SPO2':
    case 'O2':
    case 'SP02': {
      const val = parseFloat(raw);
      if (isNaN(val)) return null;
      return { type: 'spo2', value: val, unit: '%', label: 'ออกซิเจนในเลือด' };
    }

    case 'WT':
    case 'WEIGHT': {
      const val = parseFloat(raw);
      if (isNaN(val)) return null;
      return { type: 'weight', value: val, unit: 'kg', label: 'น้ำหนัก' };
    }

    case 'WI':
    case 'WATERINTAKE':
    case 'WATER_INTAKE': {
      const val = parseFloat(raw);
      if (isNaN(val)) return null;
      return { type: 'water_intake', value: val, unit: 'ml', label: 'น้ำดื่ม' };
    }

    case 'WO':
    case 'WATEROUTPUT':
    case 'WATER_OUTPUT': {
      const val = parseFloat(raw);
      if (isNaN(val)) return null;
      return { type: 'water_output', value: val, unit: 'ml', label: 'น้ำออก' };
    }

    case 'PERIOD': {
      if (raw === PERIOD_MORNING || raw.toLowerCase() === 'morning') {
        return { type: 'period', value: PERIOD_MORNING };
      }
      if (raw === PERIOD_NIGHT || raw.toLowerCase() === 'bedtime') {
        return { type: 'period', value: PERIOD_NIGHT };
      }
      return null;
    }

    default:
      return null;
  }
}

module.exports = { parseMessage, PERIOD_MORNING, PERIOD_NIGHT };
