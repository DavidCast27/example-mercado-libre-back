const axios = require('axios');
const config = require('./httpConfig');

axios.default.baseURL = 'https://api.mercadolibre.com';

function getHttp(path, params = '') {
    return axios.get(`${path}${params}`, config);
}

module.exports = {
    getHttp
};
