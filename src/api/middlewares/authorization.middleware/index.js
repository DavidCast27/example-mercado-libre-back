const _get = require('lodash/get');
const getUserEmailLowerCase = require('../../helpers/lowerCasedEmail.helper');

async function authorization(req, res, next) {
    const resource = _get(req, '_parsedUrl.pathname', '');
    const userEmailLowerCase = getUserEmailLowerCase(res);
    const referer = _get(req, 'headers.referer', {});
    const isApiDocs = referer && referer.indexOf('api/docs') >= 0;
    const container = require('../../../startup/container');
    const UserService = container.resolve('UserService');
    const authorizated = await UserService.getAuthorization(isApiDocs, userEmailLowerCase, resource);
    if (authorizated) {
        next();
    }
}

module.exports = authorization;
