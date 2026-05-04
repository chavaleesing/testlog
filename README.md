# 🏥 LINE Health Bot

A LINE chatbot for Thai users to log and track daily health data including blood pressure, heart rate, oxygen saturation, weight, and water intake/output. Data is securely stored in Firebase Firestore.

## 📋 Features

- **Health Data Logging**: Record vital signs (HR, BP, SpO2, Weight)
- **Water Tracking**: Log daily water intake and unlimited water output entries
- **Time-based Recording**: Support for two recording periods per day (เช้า/Morning and ก่อนนอน/Before Sleep)
- **Daily Summary**: View a complete health summary for the current day
- **Thai Language Support**: Full UI in Thai language
- **Firebase Integration**: Secure cloud storage with Firestore
- **Real-time Feedback**: Instant confirmation and status alerts for recorded data

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- LINE Official Account with Messaging API enabled
- Firebase project with Firestore database
- ngrok or similar service for local webhook testing (development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd testlog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Fill in your credentials:
   ```env
   LINE_CHANNEL_SECRET=your_channel_secret
   LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token
   FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
   FIREBASE_PROJECT_ID=heath-logs
   ```

4. **Add Firebase Service Account**
   - Download your Firebase service account JSON from Firebase Console
   - Save as `firebase-service-account.json` in the project root

5. **Start the bot**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

## 📱 LINE Bot Configuration

### Channel Information (Already Set Up)

```
Channel ID: 2009964032
Channel Secret: 36973b5b8dc80f819dfa121225b44f73
Webhook URL: (Set your deployment URL)/webhook
Channel Access Token: (Use from your environment)
```

### Setting Webhook URL

1. Go to [LINE Developers Console](https://developers.line.biz/console/)
2. Select your Messaging API channel
3. Under **Messaging API** tab, find **Webhook URL**
4. Enter: `https://your-domain.com/webhook`
5. Click **Verify** to test the connection
6. Enable **Use webhook**

### Adding Bot as Friend

Scan the QR code in LINE Developers Console's **Messaging API** tab or search for your official account.

## 📖 Usage Guide

### Command Format

Send messages to the bot using these formats (case-insensitive):

#### Set Recording Period
```
เช้า          -> Set to morning period
ก่อนนอน      -> Set to bedtime period
```

#### Log Health Data
```
HR=70         -> Heart rate (bpm)
BP=120/80     -> Blood pressure (systolic/diastolic)
SPO2=98       -> Oxygen saturation (%)
O2=98         -> Alias for SPO2
WT=65         -> Weight (kg)
WI=1500       -> Water intake (ml)
WO=300        -> Water output (ml) — multiple entries allowed
```

#### Multiple Values
```
HR=70, BP=120/80, SPO2=98
```

#### View Help
```
help, ช่วยเหลือ, ?, วิธีใช้
```

#### Daily Summary
```
สรุป, summary, today, วันนี้
```

### Recording Schedule

| Data Type | Frequency | Default |
|-----------|-----------|---------|
| HR, BP, SpO2, Weight | 2 times/day (morning + bedtime) | N/A |
| Water Intake (WI) | 1 time/day | 1500 ml (bedtime) |
| Water Output (WO) | Unlimited | N/A |

### Example Conversation

```
User: เช้า
Bot: ✅ ตั้งช่วงเวลาเป็น "เช้า" แล้ว

User: HR=72, BP=120/80, SPO2=98
Bot: ✅ บันทึกข้อมูล [เช้า] เรียบร้อย
     ❤️ อัตราการเต้นหัวใจ 72 bpm ✓
     🩺 ความดัน 120/80 mmHg ✓
     🫁 SpO2 98% ✓

User: สรุป
Bot: 📊 สรุปสุขภาพวันที่ 2024-12-19
     🌅 เช้า:
       ❤️ HR: 72 bpm
       🩺 BP: 120/80 mmHg
       🫁 SpO2: 98%
     🌙 ก่อนนอน: ยังไม่มีข้อมูล
```
