const axios = require('axios');

class HueLogger {
    /**
     * Initialize the logger with the server URL.
     * @param {string} serverUrl - Base URL of the Hue Logs server (e.g., "http://localhost:5000").
     */
    constructor(serverUrl) {
        this.serverUrl = serverUrl.replace(/\/$/, ""); // Remove trailing slash if present
        this.logEndpoint = `${this.serverUrl}/api/add-log`;
    }

    /**
     * Send a log message to the Hue Logs server.
     * @param {string} message - The log message to send.
     */
    async log(message) {
        try {
            const response = await axios.post(this.logEndpoint, { message }, { timeout: 5000 });
            if (response.status !== 200) {
                console.error(`Failed to send log: ${response.status}, ${response.data}`);
            }
        } catch (error) {
            console.error(`Error sending log: ${error.message}`);
        }
    }
}

module.exports = HueLogger;
