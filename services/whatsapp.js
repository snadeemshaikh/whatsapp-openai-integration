// services/whatsapp.js
const twilio = require("twilio");
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_NUMBER } = require("../config");

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Sends a WhatsApp message using Twilio.
 * @param {string} to - Recipient's WhatsApp number.
 * @param {string} message - Message content.
 */
async function sendWhatsAppMessage(to, message) {
  try {
    await client.messages.create({
      from: TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${to}`,
      body: message,
    });
    console.log(`Message sent to ${to}`);
  } catch (error) {
    console.error("Error sending WhatsApp message:", error.message);
  }
}

module.exports = { sendWhatsAppMessage };