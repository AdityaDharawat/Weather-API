// Importing required modules
import express from 'express';
import axios from 'axios';

const router = express.Router();

// GET /api/weather/:city
router.get('/:city', async (req, res) => {
    const { city } = req.params;
    const API_KEY = process.env.API_KEY;

    // Debugging logs
    console.log('Fetching weather for:', city);
    console.log('Using API Key:', API_KEY);

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ message: 'Error fetching weather data' });
    }
});

export default router;
