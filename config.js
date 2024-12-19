// config.js
module.exports = {
  EXTERNAL_API_URL: "https://jsonplaceholder.typicode.com/users", // Example API

  // OpenAI API Key
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,

  // Twilio Credentials
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP_NUMBER: "whatsapp:+14155238886", // Twilio sandbox number

  // Cron Job Schedules
  CRON_TIMES: [
    "0 9 * * *",  // 9:00 AM
    "0 14 * * *", // 2:00 PM
    "0 20 * * *", // 8:00 PM
  ],
};