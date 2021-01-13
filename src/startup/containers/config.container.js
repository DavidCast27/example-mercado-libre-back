const { asClass, asValue, asFunction } = require('awilix');

// config
const app = require('../.');
const config = require('../../config');
const Routes = require('../../api/routes');

const configContainer = {
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
};

module.exports = configContainer;
