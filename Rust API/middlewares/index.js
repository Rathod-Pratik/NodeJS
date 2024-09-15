const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        const logEntry = `\n${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.path}\n`;

        // Append the log to the file
        fs.appendFile(filename, logEntry, (error) => {
            if (error) {
                console.error("Error writing to log file", error);
            }
            // Proceed to the next middleware
            next();
        });
    }
}

module.exports = { logReqRes };