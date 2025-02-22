// WeatherApp.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3-second mist animation
    return () => clearTimeout(timer);
  }, []);

  const fetchWeather = async () => {
    if (!location) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ee78bba522ddf9560321044cf066bda0&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert('Location not found!');
        setWeatherData(null);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white relative overflow-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <p className="text-3xl font-bold text-gray-200">🌫️ MIST...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="text-5xl font-bold mb-8 flex items-center">
        Weather App <span className="ml-3 text-4xl">🌧️</span>
      </h1>
      <div className="flex gap-4 mb-8">
        <Input
          type="text"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded-md bg-white text-gray-800"
        />
        <Button onClick={fetchWeather} className="p-2 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-md">
          Get Weather
        </Button>
      </div>
      {weatherData && (
        <Card className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-3xl font-semibold mb-2 text-gray-800">
              📍 {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="text-xl text-gray-700">{weatherData.weather[0].description}</p>
            <p className="text-2xl font-bold text-gray-800">
              🌡️ {weatherData.main.temp}°C
            </p>
            <p className="text-gray-700">💧 Humidity: {weatherData.main.humidity}%</p>
            <p className="text-gray-700">🌬️ Wind Speed: {weatherData.wind.speed} m/s</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default WeatherApp;
