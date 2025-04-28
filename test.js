const HueLogger = require('./hueLogger');

// Initialize the logger with the server URL
const logger = new HueLogger({
    serverUrl: 'http://localhost:5000',
    apiKey: 'your-api-key',
    serviceName: 'WebApp'
});

logger.log('User logged in - test log')
    .then(() => console.log('Log sent successfully'))
    .catch(err => console.error(err));