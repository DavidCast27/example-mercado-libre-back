const express = require('express');

let _express = null;
let _config = null;

class Server {
    constructor({ config, router }) {
        _config = config;
        _express = express().use(router);
    }

    start() {
        return new Promise(resolve => {
            const message = `App is listening on port ${_config.PORT}`;
            _express.listen(_config.PORT, () => console.info(message));

            resolve();
        });
    }
}

module.exports = Server;
