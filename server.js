const express = require('express');
const schedule = require('node-schedule');
const { refreshData, downloadCSV } = require('./controllers/dataController');

const app = express();
const PORT = process.env.PORT || 3000;

// Schedule daily refresh at midnight UTC
schedule.scheduleJob('0 0 * * *', () => {
  console.log('Scheduled refresh triggered at:', new Date());
  refreshData();
});

// Optional: Manual refresh endpoint for testing (disable if unnecessary)
app.get('/refresh', async (req, res) => {
  try {
    console.log('Manual refresh triggered at:', new Date());
    await refreshData();
    res.send('Data refreshed successfully!');
  } catch (error) {
    console.error('Error refreshing data:', error);
    res.status(500).send('Error refreshing data');
  }
});

// API endpoint to download CSV
app.get('/download', downloadCSV);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
