const errorHandler = (err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  const response = {
    status: 'error',
    message: err.message ?? 'Internal Server Error',
    statusCode: err.statusCode,
    errors: err.errors ?? [],
    stack: err.stack
  };
  res.status(response.statusCode).json(response);
};
export default errorHandler;
