let baseUrl = 'http://localhost:5000/api';

if (window.location.host === 'realestate-dev.falconweb.app') {
  baseUrl = 'https://realestate-api-dev.falconweb.app/api';
} else if (window.location.host === 'realestate-qa.falconweb.app') {
  baseUrl = 'https://realestate-api-qa.falconweb.app/api';
}

module.exports = { baseUrl };
