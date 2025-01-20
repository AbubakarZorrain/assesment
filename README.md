# ETL Process: University Data

## Overview
This project implements an ETL process using Node.js to fetch, transform, and store data from an external API. The data is saved as both JSON and CSV files, with a downloadable CSV provided via an API endpoint.

## Features
- Fetches data from: `http://universities.hipolabs.com/search?country=United+States`
- Transforms the data into a structured format.
- Saves data in `data/universities.json` and `data/universities.csv`.
- Refreshes data daily at midnight UTC.
- Provides an API endpoint to download the CSV file.

## Setup

### Prerequisites
- Node.js (v14+)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd etl-process
   mkdir data
