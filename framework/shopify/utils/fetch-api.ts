import axios, { AxiosResponse } from "axios";
import { gqlError } from "../../../types/gqlUtilsType";
import { ProductConnection } from "../../../types/gqlTypes";

type fetchAPIParams = {
  url: string;
  query: string;
};

export const fetchAPI = async ({
  url,
  query,
}: fetchAPIParams): Promise<ProductConnection | gqlError> => {
  const res = await axios.post<ProductConnection | gqlError>(url, {
    query,
  });
  return res.data;
};
