// test.js
// Mock dependencies
const mockAxios = {
  get: async () => ({
    data: [
      { id: 1, name: "John Doe", phone: "+1234567890" },
      { id: 2, name: "Jane Smith", phone: "+0987654321" }
    ]
  })
};

const mockOpenAI = {
  createCompletion: async () => ({
    data: {
      choices: [{ text: "Hello! This is a test message." }]
    }
  })
};

const mockTwilio = () => ({
  messages: {
    create: async (params) => {
      console.log("Sending message:", params);
      return { sid: "test_sid" };
    }
  }
});

// Mock the actual service implementations
const externalAPI = {
  fetchUserData: async () => {
    try {
      const response = await mockAxios.get();
      return response.data;
    } catch (error) {
      console.error("Error in fetchUserData:", error);
      return [];
    }
  }
};

const openAI = {
  getOpenAIResponse: async (prompt) => {
    try {
      const response = await mockOpenAI.createCompletion();
      return response.data.choices[0].text;
    } catch (error) {
      console.error("Error in getOpenAIResponse:", error);
      return null;
    }
  }
};

const whatsapp = {
  sendWhatsAppMessage: async (to, message) => {
    try {
      const client = mockTwilio();
      await client.messages.create({
        from: "whatsapp:+14155238886",
        to: `whatsapp:${to}`,
        body: message
      });
      return true;
    } catch (error) {
      console.error("Error in sendWhatsAppMessage:", error);
      return false;
    }
  }
};

// Test main workflow
async function testWorkflow() {
  console.log("Starting test workflow...\n");

  // Test 1: Fetch Users
  console.log("Test 1: Fetching users...");
  const users = await externalAPI.fetchUserData();
  console.log("Users fetched:", users, "\n");

  // Test 2: Generate Messages
  console.log("Test 2: Generating messages for users...");
  for (const user of users) {
    const prompt = `Create a personalized message for ${user.name}.`;
    const response = await openAI.getOpenAIResponse(prompt);
    console.log(`Message for ${user.name}:`, response, "\n");
  }

  // Test 3: Send Messages
  console.log("Test 3: Sending WhatsApp messages...");
  for (const user of users) {
    const message = "Test message for " + user.name;
    await whatsapp.sendWhatsAppMessage(user.phone, message);
  }

  console.log("\nTest workflow completed.");
}

// Run the test
console.log("=== WhatsApp OpenAI Integration Test ===\n");
testWorkflow();