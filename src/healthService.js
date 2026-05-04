const { getDb } = require('./firebase');
const { PERIOD_MORNING, PERIOD_NIGHT } = require('./parser');

// Firestore structure:
// users/{userId}/health_records/{YYYY-MM-DD}/{period}/  (fields)
// users/{userId}/water_output/{YYYY-MM-DD}/entries/[]  (array)
// users/{userId}/session  -> { period: 'เช้า'|'ก่อนนอน' }

function getTodayStr() {
  const now = new Date();
  // Use Bangkok time (UTC+7)
  const bkk = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  return bkk.toISOString().slice(0, 10); // YYYY-MM-DD
}

async function getSession(userId) {
  const db = getDb();
  const doc = await db.collection('users').doc(userId).collection('session').doc('current').get();
  if (!doc.exists) return { period: PERIOD_MORNING };
  return doc.data();
}

async function setSession(userId, data) {
  const db = getDb();
  await db.collection('users').doc(userId).collection('session').doc('current').set(data, { merge: true });
}

async function saveHealthRecord(userId, period, fields) {
  const db = getDb();
  const date = getTodayStr();
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('health_records')
    .doc(date)
    .collection('periods')
    .doc(period);

  await ref.set(
    {
      ...fields,
      updatedAt: new Date(),
      date,
      period,
      userId,
    },
    { merge: true }
  );
}

async function addWaterOutput(userId, amount) {
  const db = getDb();
  const date = getTodayStr();
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('water_output')
    .doc(date);

  const doc = await ref.get();
  const existing = doc.exists ? doc.data() : {};
  const entries = existing.entries || [];
  entries.push({ amount, recordedAt: new Date() });

  await ref.set({
    entries,
    totalOutput: entries.reduce((sum, e) => sum + e.amount, 0),
    date,
    userId,
    updatedAt: new Date(),
  });

  return entries.reduce((sum, e) => sum + e.amount, 0);
}

async function getTodaySummary(userId) {
  const db = getDb();
  const date = getTodayStr();

  const morningRef = db
    .collection('users')
    .doc(userId)
    .collection('health_records')
    .doc(date)
    .collection('periods')
    .doc(PERIOD_MORNING);

  const nightRef = db
    .collection('users')
    .doc(userId)
    .collection('health_records')
    .doc(date)
    .collection('periods')
    .doc(PERIOD_NIGHT);

  const woRef = db
    .collection('users')
    .doc(userId)
    .collection('water_output')
    .doc(date);

  const [morningSnap, nightSnap, woSnap] = await Promise.all([
    morningRef.get(),
    nightRef.get(),
    woRef.get(),
  ]);

  return {
    date,
    morning: morningSnap.exists ? morningSnap.data() : null,
    night: nightSnap.exists ? nightSnap.data() : null,
    waterOutput: woSnap.exists ? woSnap.data() : null,
  };
}

module.exports = { getSession, setSession, saveHealthRecord, addWaterOutput, getTodaySummary, getTodayStr };
