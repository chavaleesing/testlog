const admin = require('firebase-admin');

let db;

function initFirebase() {
  if (admin.apps.length) return admin.app();

  let credential;
  
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Parse JSON from environment variable
    credential = admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    );
  } else {
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
