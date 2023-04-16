## Setup and Installation

### Prerequisites

1. Make sure you have Node.js and npm installed on your machine. You can download Node.js from 
[https://nodejs.org/en/download/](https://nodejs.org/en/download/).

2. Install MongoDB on your machine, or set up a MongoDB instance using a cloud provider like MongoDB Atlas. Follow the 
instructions at [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/) for your 
specific operating system or cloud provider.

### Frontend

1. Navigate to the `frontend` folder in your terminal:

```bash
cd investment-tracker/frontend


2. Install the necessary dependencies:

3. Start the development server:

`npm start`

The frontend app will run on http://localhost:3000 by default.

### Backend

1. Navigate to the `backend` folder in your terminal:

    ```bash
    cd investment-tracker/backend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Replace the MongoDB connection string in `backend/database.js` with your MongoDB instance's connection string:

    ```javascript
    await mongoose.connect('mongodb://localhost:27017/investment-tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    ```

4. Sign up for a free Alpha Vantage API key at 
[https://www.alphavantage.co/support/#api-key](https://www.alphavantage.co/support/#api-key)

5. Add your Alpha Vantage API key to the `backend/stockAPI.js` file:

    ```javascript
    const apiKey = 'your_api_key_here';
    ```

Replace `'your_api_key_here'` with your actual Alpha Vantage API key.

6. Start the development server:

    ```bash
    npm run start
    ```

The backend server will run on `http://localhost:3001` by default.
You can add this updated section to your existing README.md file. Make sure to adjust any paths, URL
