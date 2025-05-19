const responseHandler = (req, res, next) => {
  res.responseHandler = (action, data = {}, statusCode = 200, msg) => {
    const defaultMsg = {
      create: 'Created successfully',
      edit: 'Updated item successfully',
      delete: 'Deleted item successfully',
      gets: 'Get list items successfully',
      get: 'Get one item successfully'
    };
    const responseMessage = msg || defaultMsg[action];
    const response = {
      success: true,
      data: data,
      message: responseMessage,
      statusCode
    };

    if (action === 'gets' && data.results) {
      response.data = data.results;
      response.pagination = data.pagination;
    }

    res.status(statusCode).json(response);
  };
  next();
};

export default responseHandler;
