// index.js
const { fetchUserData } = require("./services/externalAPI");
const { getOpenAIResponse } = require("./services/openAI");
const { sendWhatsAppMessage } = require("./services/whatsapp");
const cron = require("node-cron");
const { CRON_TIMES } = require("./config");

/**
 * Main workflow: Fetch user data, generate messages, and send WhatsApp messages.
 */
async function main() {
  console.log("Starting workflow...");

  // Step 1: Fetch user data
  const users = await fetchUserData();
  if (users.length === 0) {
    console.log("No users to process.");
    return;
  }

  // Step 2: Process each user
  for (const user of users) {
    const prompt = `Create a personalized message for ${user.name}.`;
    const response = await getOpenAIResponse(prompt);

    if (response) {
      await sendWhatsAppMessage(user.phone, response);
    } else {
      console.warn(`Failed to generate message for user ${user.id}.`);
    }
  }
  console.log("Workflow completed.");
}

// Schedule the workflow using cron
CRON_TIMES.forEach((time) => {
  cron.schedule(time, main);
});

console.log("Cron jobs scheduled.");