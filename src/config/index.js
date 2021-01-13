/* eslint-disable no-process-env */
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    DATABASE_CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING,
    SWAGGER_PATH: 'src/config/swagger.yml',
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
};
