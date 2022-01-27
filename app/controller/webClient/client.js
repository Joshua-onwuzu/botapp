const { WebClient , LogLevel } = require("@slack/web-api");
const token = process.env.TOKEN
const client = new WebClient(token, {
    logLevel: LogLevel.DEBUG
});

module.exports = client