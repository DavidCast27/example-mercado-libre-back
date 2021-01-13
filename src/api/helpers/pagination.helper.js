const filters = require('../../common/constants/filters');
const PAGE_LIMIT = filters && filters.PAGE_LIMIT;
const DEFAULT_PAGE = filters && filters.DEFAULT_PAGE;

function pagination(page = DEFAULT_PAGE, limit = PAGE_LIMIT) {
    const superiorLimit = limit * page;
    const skip = superiorLimit - limit;
    return { skip, limitTo: limit };
}

module.exports = pagination;
