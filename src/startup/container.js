const { createContainer } = require('awilix');

const configContainer = require('./containers/config.container');
const itemsContainer = require('./containers/items.container');


const container = createContainer();

container.register(configContainer)
    .register(itemsContainer);


module.exports = container;
