import apiService from "../../../helpers/apiService";

export const caseCreation = async ({
  URL,
  data,
}: {
  URL: string;
  data: object;
}) => {
  try {
    const { data: apiResponse } = await apiService.post({
      URL,
      data,
    });
    return Boolean(["true", true].find((res) => res === apiResponse.success));
  } catch (error: any) {
    return Promise.reject(false);
  }
};
