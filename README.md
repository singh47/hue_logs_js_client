# Hue Logger JS Client
Javascript Client for HueLogs: Minimilistic Log Dashboard

## installation
npm install hue-logs-client

## usage
```javascript
const HueLogger = require('./hueLogger');
// use your server URL instead of localhost
 const logger = new HueLogger('http://localhost:5000'); logger.log('This is a test log message');
```