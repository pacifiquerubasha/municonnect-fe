const HttpsProxyAgent = require('https-proxy-agent');

const httpsAgent = new HttpsProxyAgent({
  rejectUnauthorized: false
});

module.exports = httpsAgent;