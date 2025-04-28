const axios = require('axios');

class HueLogger {
    /**
     * Initialize the logger with the server URL, API key, and optional service name.
     * @param {Object} config - Configuration object.
     * @param {string} config.serverUrl - Base URL of the Hue Logs server (e.g., "http://localhost:5000").
     * @param {string} config.apiKey - API key for authentication.
     * @param {string} [config.serviceName] - Optional name of the service or application (e.g., "WebApp").
     */
    constructor({ serverUrl, apiKey, serviceName }) {
        this.serverUrl = serverUrl.replace(/\/$/, ""); // Remove trailing slash if present
        this.apiKey = apiKey;
        this.serviceName = serviceName;
        this.logEndpoint = `${this.serverUrl}/api/add-log`;
        this.headers = { 'X-API-Key': this.apiKey };
    }

    /**
     * Send a log message to the Hue Logs server.
     * @param {string} message - The log message to send.
     * @returns {Promise<void>}
     */
    async log(message) {
        try {
            const payload = { message };
            if (this.serviceName) {
                payload.service_name = this.serviceName;
            }
            const response = await axios.post(this.logEndpoint, payload, {
                headers: this.headers,
                timeout: 3000
            });
            if (response.status !== 200) {
                console.error(`Failed to send log: ${response.status}, ${JSON.stringify(response.data)}`);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    console.error('Authentication failed: Invalid or missing API key');
                } else {
                    console.error(`Failed to send log: ${error.response.status}, ${JSON.stringify(error.response.data)}`);
                }
            } else {
                console.error(`Error sending log: ${error.message}`);
            }
        }
    }
}

module.exports = HueLogger;