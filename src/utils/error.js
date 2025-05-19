class apiError extends Error {
  constructor(statusCode, msg, errors) {
    super(msg);
    this.name = 'apiError';
    this.statusCode = statusCode;
    this.errors = errors;
    // record stack trace
    // Error.captureStackTrace(this, this.name);
  }
}

module.exports = apiError;
