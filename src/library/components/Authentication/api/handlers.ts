export const errorHandler = (error: any, message: string) => {
  return error?.response?.data?.message || error?.message || message;
};
