const getMessageFromError = (error: any): string => {
	const errorData = error.response.data;

	return errorData?.message?.join(" ");
};

export default getMessageFromError;
