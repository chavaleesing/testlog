const fs = require('fs');
const path = require('path');

// If FIREBASE_SERVICE_ACCOUNT env var exists, write it to file
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    const filePath = path.resolve('./firebase-service-account.json');
    fs.writeFileSync(filePath, JSON.stringify(serviceAccount, null, 2));
    console.log('✅ Firebase service account file created');
  } catch (err) {
    console.error('❌ Failed to create Firebase service account:', err.message);
    process.exit(1);
  }
}
