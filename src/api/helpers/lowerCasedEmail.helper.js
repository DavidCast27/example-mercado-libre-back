const _get = require('lodash/get');
const _toLower = require('lodash/toLower');

function getUserEmailLowerCase(res) {
    const userEmail = _get(res, 'locals.user.email');
    const userEmailLowerCase = _toLower(userEmail);
    return userEmailLowerCase;
}

module.exports = getUserEmailLowerCase;
