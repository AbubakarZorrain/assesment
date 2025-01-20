const transformData = (data) => {
  return data.map((item) => ({
    name: item.name || 'N/A',
    country: item.country || 'N/A',
    state: item['state-province'] || 'N/A',
    website: item.web_pages[0] || 'N/A',
  }));
};

module.exports = transformData;
