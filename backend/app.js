const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { fetchStockData } = require('./stockAPI');
const connectDB = require('./database');
const Investment = require('./models/Investment');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Example route to fetch stock data
app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const stockData = await fetchStockData(symbol);
  res.json(stockData);
});

// Example route to create a new investment
app.post('/api/investments', async (req, res) => {
  const { symbol, shares, purchasePrice } = req.body;

  try {
    const newInvestment = new Investment({ symbol, shares, purchasePrice });
    await newInvestment.save();
    res.json(newInvestment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create investment' });
  }
});

// Add your additional API routes here

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

