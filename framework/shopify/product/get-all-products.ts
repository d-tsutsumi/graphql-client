import axios from "axios";
import { ProductConnection } from "../../../types/gqlTypes";
import { getAllProductsQuery } from "../utils/querys/get-all-product";
import { gqlResponceType } from "../../../types/gqlUtilsType";

type fetchAPIParams = {
  url: string;
  query: string;
};

const fetchAPI = async ({ url, query }: fetchAPIParams): Promise<any> => {
  try {
    const res = await axios.post<gqlResponceType<ProductConnection>>(url, {
      query,
    });
    if (res.data.error) {
      const err = res.data.error.errors[0];
      throw new Error(err.message);
    }
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error("internal server error");
  }
};

export const getAllProducts = async (): Promise<ProductConnection> => {
  const products = await fetchAPI({
    url: "http://localhost:4000/graphql",
    query: getAllProductsQuery,
  });
  return products;
};
