# Hue Logger JS Client
Javascript Client for HueLogs: Minimilistic Log Dashboard

## installation
npm install hue-logs-client

## usage
```javascript
const HueLogger = require('hue-logs-client');

const logger = new HueLogger({
    serverUrl: 'http://localhost:5000',
    apiKey: 'your-api-key',
    serviceName: 'WebApp'
});

logger.log('User logged in - test log')
    .then(() => console.log('Log sent successfully'))
    .catch(err => console.error(err));
```