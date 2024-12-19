const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function listModels() {
  try {
    const models = await openai.models.list();
    console.log('\nAvailable OpenAI Models:\n');
    models.data
      .sort((a, b) => a.id.localeCompare(b.id))
      .forEach((model, index) => {
        console.log(`${index + 1}. ${model.id}`);
      });
  } catch (error) {
    console.error('Error fetching models:', error.message);
  }
}

listModels();