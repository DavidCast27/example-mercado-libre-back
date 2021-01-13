const _get = require('lodash/get');
const { return200 } = require('../../common/js/responses');
let _service = null;

class ItemsController {
    constructor({ ItemsService }) {
        _service = ItemsService;
    }

    async readAll(req, res) {
        const query = _get(req, 'query.q', '');
        const result = await _service.readAll(query);
        return200(res, result);
    }

    async readById(req, res) {
        const id = _get(req, 'params.id', '');
        const result = await _service.readById(id);
        return200(res, result);
    }

}

module.exports = ItemsController;
