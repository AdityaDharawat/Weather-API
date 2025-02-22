// Importing required modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importing the weather routes
import weatherRoutes from './routes/weather.js';

// Configuring environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Weather API!');
});

// Weather API route
app.use('/api/weather', weatherRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
