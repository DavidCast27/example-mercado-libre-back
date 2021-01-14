/* eslint-disable no-process-env */
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    BASE_URL: process.env.BASE_URL,
    SWAGGER_PATH: 'src/config/swagger.yml',
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
};
