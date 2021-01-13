const { NOT_FOUND } = require("../../common/constants/responseStatus");
const { return400s } = require('../../common/js/responses');


module.exports = (req, res) => {
    const error = 'Resource not found';
    return400s({ res, error, status: NOT_FOUND });
};
