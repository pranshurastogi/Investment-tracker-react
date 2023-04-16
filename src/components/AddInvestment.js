import React, { useState } from 'react';
import axios from 'axios';

const AddInvestment = () => {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the backend to add the investment
    try {
      const response = await axios.post('/api/investments', { symbol, shares, purchasePrice });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      <input type="number" placeholder="Shares" value={shares} onChange={(e) => setShares(e.target.value)} />
      <input type="number" placeholder="Purchase Price" value={purchasePrice} onChange={(e) => 
setPurchasePrice(e.target.value)} />
      <button type="submit">Add Investment</button>
    </form>
  );
};

export default AddInvestment;

