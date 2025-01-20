const axios = require('axios');
require('dotenv').config();

const fetchUniversityData = async () => {
  try {
    const response = await axios.get(process.env.API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

module.exports = fetchUniversityData;
