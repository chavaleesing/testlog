require('dotenv').config();

const express = require('express');
const line = require('@line/bot-sdk');
const { handleTextMessage } = require('./messageHandler');
const { initFirebase } = require('./firebase');

const lineConfig = {
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
};

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: lineConfig.channelAccessToken,
});

const app = express();

// Health check endpoint
app.get('/', (_req, res) => res.json({ status: 'ok', service: 'LINE Health Bot' }));

// LINE webhook endpoint
app.post('/webhook', line.middleware(lineConfig), async (req, res) => {
  res.status(200).json({ status: 'ok' });

  const events = req.body.events;
  await Promise.all(events.map(handleEvent));
});

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') return;

  const userId = event.source.userId;
  const text = event.message.text;
  const replyToken = event.replyToken;

  try {
    const replyText = await handleTextMessage(userId, text);
    if (!replyText) return;

    await client.replyMessage({
      replyToken,
      messages: [{ type: 'text', text: replyText }],
    });
  } catch (err) {
    console.error('Error handling event:', err);
    try {
      await client.replyMessage({
        replyToken,
        messages: [{ type: 'text', text: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง 🙏' }],
      });
    } catch (_) {}
  }
}

const PORT = process.env.PORT || 3000;

initFirebase();

app.listen(PORT, () => {
  console.log(`LINE Health Bot running on port ${PORT}`);
  console.log(`Webhook URL: http://localhost:${PORT}/webhook`);
});
