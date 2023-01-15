type ErrorStatus = 400 | 401 | 403 | 404 | 409 | 500;

type ClientErrorHandlerParams = {
  error: unknown;
};

const getMessageFromError = (error: any): string => {
  const errorData = error.response.data;

  console.error(errorData);
  const errorMessage = errorData.message.join(" ");
  return errorMessage;
};

export default getMessageFromError;
