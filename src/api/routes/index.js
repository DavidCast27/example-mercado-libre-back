const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');
require('express-async-errors');
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../../config');
const yaml = require('js-yaml');
const fs = require('fs');
const swaggerDocument = yaml.safeLoad(fs.readFileSync(SWAGGER_PATH, 'utf8'));

module.exports = ({
    ItemsRoutes
}) => {

    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(bodyParser.urlencoded({ extended: false }))
        .use(bodyParser.json())
        .use(helmet())
        .use(cors())
        .use(cookieParser())
        .use("/items", ItemsRoutes)
        .use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

    router.use("/api", apiRoutes);
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
};
