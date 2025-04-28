const HueLogger = require('./hueLogger');

// Initialize the logger with the server URL
const logger = new HueLogger('http://localhost:5000');
logger.log('This is a test log message');