const httpStatus = require('http-status');

exports.sendSuccessResponse = (res, data, status=httpStatus.OK) => {
  const responseMessage = {
    data,
    success: "true",
  };

  return res.status(status).json(responseMessage);
};

exports.sendErrorResponse = (res, error, status=httpStatus.INTERNAL_SERVER_ERROR) => {
  const responseMessage = {
    error: {
      code: status,
      ...error,
    },
    success: "false",
  };

  return res.status(status).json(responseMessage);
};

exports.sendNoStdResponse = (res, error, status=httpStatus.INTERNAL_SERVER_ERROR) => {
  const responseMessage = {
    error: {
      code: status,
      ...error,
    },
    success: "no",
  };

  return res.status(status).json(responseMessage);
};