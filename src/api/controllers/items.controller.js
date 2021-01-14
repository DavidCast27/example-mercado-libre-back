const _get = require('lodash/get');
const { NOT_FOUND } = require('../../common/constants/responseStatus');
const { return200, return400s } = require('../../common/js/responses');
let _service = null;

class ItemsController {
    constructor({ ItemsService }) {
        _service = ItemsService;
    }

    async readAll(req, res) {
        const query = _get(req, 'query.q', '');
        try {
            const result = await _service.readAll(query);
            return200(res, result);
        } catch (err) {
            const error = err && err.message || '';
            const status = err && err.status || NOT_FOUND;
            return400s({ res, error, status });
        }
    }

    async readById(req, res) {
        const id = _get(req, 'params.id', '');
        try {
            const result = await _service.readById(id);
            return200(res, result);
        } catch (err) {
            const error = err && err.message || '';
            const status = err && err.status || NOT_FOUND;
            return400s({ res, error, status });
        }
    }

}

module.exports = ItemsController;
