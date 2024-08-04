import express from 'express';
import dotenv from 'dotenv';

const app = express();

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});