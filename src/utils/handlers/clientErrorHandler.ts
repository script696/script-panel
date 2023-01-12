type ErrorStatus = 400 | 401 | 403 | 404 | 409 | 500;

type ClientErrorHandlerParams = {
  error: unknown;
};

const clientErrorHandler = ({ error }: ClientErrorHandlerParams) => {};

export default clientErrorHandler;
