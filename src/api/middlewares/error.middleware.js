const { INTERNAL_ERROR } = require("../../common/constants/responseStatus");
const { return500s } = require('../../common/js/responses');

/* eslint-disable */
module.exports = (err, req, res, next) => {
  const error = err.message || "Internal Server Error"
  const httpStatus = err.status || INTERNAL_ERROR;
  return500s({ res, error, status: httpStatus })
}
/* eslint-enable */
