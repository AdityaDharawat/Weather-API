// src/routes/weather.js
import express from 'express';
import { getWeather } from '../services/weatherService.js';

const router = express.Router();

router.get('/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const weatherData = await getWeather(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data' });
    }
});

export default router;
