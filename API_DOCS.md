# API Documentation

## Endpoints

### 1. Refresh University Data
**Endpoint**: `GET /api/refresh-data`

**Description**:
This endpoint triggers the ETL process to fetch university data from the provided API (`http://universities.hipolabs.com/search?country=United+States`), transform the data, and save it to a local file.

**Request**:
- Method: `GET`
- URL: `/api/refresh-data`

**Response**:
- **Status**: `200 OK` (if successful)
- **Body**:
  ```json
  {
    "message": "University data refreshed and saved successfully."
  }
  ```

**Error Handling**:
- `500 Internal Server Error`: If there is an issue with the data fetching or saving process.
  ```json
  {
    "message": "An error occurred while refreshing the data."
  }
  ```

---

### 2. Download University Data as CSV
**Endpoint**: `GET /api/download-csv`

**Description**:
This endpoint provides the stored university data as a downloadable CSV file.

**Request**:
- Method: `GET`
- URL: `/api/download-csv`

**Response**:
- **Headers**:
  - `Content-Disposition: attachment; filename=university_data.csv`
- **File**:
  - A CSV file containing university data, including fields like `name`, `country`, `state-province`, and `web_pages`.

**Example File Content**:
```csv
name,country,state-province,web_pages
University of Example,United States,,http://example.edu
Example College,United States,California,http://examplecollege.edu
```

**Error Handling**:
- `500 Internal Server Error`: If the CSV file is not found or cannot be generated.
  ```json
  {
    "message": "An error occurred while generating the CSV file."
  }
  ```

---

### 3. Default Error Response
For any invalid endpoints or unhandled errors, the server will return:

**Response**:
- **Status**: `404 Not Found`
- **Body**:
  ```json
  {
    "message": "The requested endpoint does not exist."
  }
  ```

