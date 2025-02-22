// src/app.js
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import weatherRouter from './routes/weather.js';

config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/weather', weatherRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Weather API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
