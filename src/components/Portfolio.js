import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const response = await axios.get('/api/investments');
      setInvestments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Shares</th>
          <th>Purchase Price</th>
        </tr>
      </thead>
      <tbody>
        {investments.map((investment) => (
          <tr key={investment.id}>
            <td>{investment.symbol}</td>
            <td>{investment.shares}</td>
            <td>{investment.purchasePrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Portfolio;

