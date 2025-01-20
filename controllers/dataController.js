const path = require('path');
const fs = require('fs').promises;
const fetchUniversityData = require('../utils/fetchUniversityData');
const transformData = require('../utils/transformData');
const { parse } = require('json2csv');

const DATA_DIR = path.join(__dirname, '../data');
const JSON_FILE = path.join(DATA_DIR, 'universities.json');
const CSV_FILE = path.join(DATA_DIR, 'universities.csv');

// Ensure the data directory exists
const ensureDataDir = async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error.message);
  }
};

// Refresh data: Fetch, transform, and save
const refreshData = async () => {
  try {
    console.log('Refreshing data...');
    await ensureDataDir();

    // Fetch and transform data
    const data = await fetchUniversityData();
    const transformedData = transformData(data);

    // Save JSON
    await fs.writeFile(JSON_FILE, JSON.stringify(transformedData, null, 2));
    console.log('Data saved to universities.json');

    // Save CSV
    const csv = parse(transformedData);
    await fs.writeFile(CSV_FILE, csv);
    console.log('Data saved to universities.csv');
  } catch (error) {
    console.error('Error during refresh:', error.message);
  }
};

// Download CSV
const downloadCSV = async (req, res) => {
  try {
    res.download(CSV_FILE, 'universities.csv');
  } catch (error) {
    console.error('Error sending CSV:', error.message);
    res.status(500).send('Error downloading the file');
  }
};

module.exports = { refreshData, downloadCSV };
