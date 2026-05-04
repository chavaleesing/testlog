const admin = require('firebase-admin');
const path = require('path');

let db;

function initFirebase() {
  if (admin.apps.length) return admin.app();

  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  const absolutePath = path.resolve(serviceAccountPath);

  let credential;
  try {
    const serviceAccount = require(absolutePath);
    credential = admin.credential.cert(serviceAccount);
  } catch {
    // Fall back to application default credentials (e.g. Cloud Run)
    credential = admin.credential.applicationDefault();
  }

  admin.initializeApp({
    credential,
    projectId: process.env.FIREBASE_PROJECT_ID || 'heath-logs',
  });

  return admin.app();
}

function getDb() {
  if (!db) {
    initFirebase();
    db = admin.firestore();
  }
  return db;
}

module.exports = { getDb, initFirebase };
