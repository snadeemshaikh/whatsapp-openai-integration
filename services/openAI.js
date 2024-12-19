// services/openAI.js
const OpenAI = require("openai");
const { OPENAI_API_KEY } = require("../config");

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

/**
 * Generates a response using OpenAI.
 * @param {string} prompt - Input prompt for OpenAI.
 * @returns {Promise<string>} Generated response text.
 */
async function getOpenAIResponse(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Fast, affordable model for focused tasks
      messages: [
        {
          role: "system",
          content: "You are an expert at creating personalized, engaging WhatsApp messages. Keep messages concise, friendly, and tailored to the recipient's context. Each message should be under 160 characters for optimal delivery."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 100,       // Keeping it concise for WhatsApp
      temperature: 0.7,     // Balanced between creativity and focus
      top_p: 1,            // Default sampling
      frequency_penalty: 0  // No repetition penalty needed for short messages
    });
    console.log("OpenAI response generated.");
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error.message);
    return "Error generating response.";
  }
}

module.exports = { getOpenAIResponse };