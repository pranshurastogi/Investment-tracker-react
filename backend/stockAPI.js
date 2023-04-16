const axios = require('axios');

const fetchStockData = async (symbol) => {
  const apiKey = 'your_api_key_here';
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  fetchStockData,
};

