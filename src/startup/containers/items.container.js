const { asClass, asFunction } = require('awilix');

// services
const { ItemsService } = require('../../api/services');

// controllers
const { ItemsController } = require('../../api/controllers');

// routes
const { ItemsRoutes } = require('../../api/routes/index.routes');

const itemsContainer = {
    ItemsService: asClass(ItemsService).singleton(),
    ItemsController: asClass(ItemsController.bind(ItemsController)).singleton(),
    ItemsRoutes: asFunction(ItemsRoutes).singleton()
};

module.exports = itemsContainer;
