const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const weatherData = {
  "new-york": {
    city: 'New York',
    temperature: '18°C',
    condition: 'Cloudy',
    icon: '🌥️'
  },
  "london": {
    city: 'London',
    temperature: '12°C',
    condition: 'Rainy',
    icon: '🌧️'
  },
  "paris": {
    city: 'Paris',
    temperature: '15°C',
    condition: 'Sunny',
    icon: '☀️'
  },
  "tokyo": {
    city: 'Tokyo',
    temperature: '22°C',
    condition: 'Clear',
    icon: '🌞'
  }
};

// API route: /api/weather/:city
app.get('/api/weather/:city', (req, res) => {
  const cityKey = req.params.city.toLowerCase();
  const data = weatherData[cityKey];
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'City not found' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
