# Investment Tracker

An investment tracking application that allows users to add their investments and monitor their portfolio. The app fetches 
stock data from the Alpha Vantage API and displays the user's total investments over time.

## Project Structure

investment-tracker/
├─ frontend/ (React.js application)
│ ├─ public/
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ AddInvestment.js
│ │ │ ├─ Portfolio.js
│ │ │ ├─ TotalInvestmentChart.js
│ │ │ ├─ Header.js (assuming it's implemented)
│ │ │ └─ Footer.js (assuming it's implemented)
│ │ ├─ App.js
│ │ └─ index.js
│ ├─ package.json
│ └─ README.md (frontend-specific README, if needed)
└─ backend/ (Node.js/Express.js application)
├─ stockAPI.js
├─ app.js
├─ package.json
└─ README.md 


## Setup and Installation

### Frontend

1. Navigate to the `frontend` folder in your terminal:

```bash
cd investment-tracker/frontend

2. Install the necessary dependencies:

npm install

3. Start the development server:

npm start

The frontend app will run on http://localhost:3000 by default.

## Backend

1. Navigate to the backend folder in your terminal:

`cd investment-tracker/backend`

2. Install the necessary dependencies:

`npm install`

3. Add your Alpha Vantage API key to the stockAPI.js file:

`const apiKey = 'your_api_key_here';`

Replace 'your_api_key_here' with your actual Alpha Vantage API key.

4. Start the development server:

npm run start

The backend server will run on http://localhost:3001 by default.

## Customization

To customize the application according to your requirements, you may need to modify the following:

1.Frontend components, located in frontend/src/components/.
2.Backend API routes and stock data fetching, located in backend/app.js and backend/stockAPI.js.
3.Database setup and connection, which should be implemented in the backend folder according to your choice of database and 
ORM.

Replace 'mongodb://localhost:27017/investment-tracker' with the connection string for your MongoDB instance.
