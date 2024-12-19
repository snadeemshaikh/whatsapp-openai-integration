// services/externalAPI.js
const axios = require("axios");
const { EXTERNAL_API_URL } = require("../config");

/**
 * Fetches user data from the external API.
 * @returns {Promise<Array>} Array of user objects or empty array on error.
 */
async function fetchUserData() {
  try {
    const response = await axios.get(EXTERNAL_API_URL);

    if (response.data && Array.isArray(response.data)) {
      console.log("User data fetched successfully.");
      return response.data;
    } else {
      console.warn("Invalid data structure from API.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return [];
  }
}

module.exports = { fetchUserData };