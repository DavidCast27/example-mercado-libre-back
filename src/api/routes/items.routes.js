const { Router } = require('express');
module.exports = ({ ItemsController }) => {
    const router = Router();

    router.get('/', ItemsController.readAll);
    router.get('/:id', ItemsController.readById);
    return router;
};
