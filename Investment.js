const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
});

const Investment = mongoose.model('Investment', InvestmentSchema);

module.exports = Investment;

