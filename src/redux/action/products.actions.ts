import dispatchApi from "./dispatchApi";
import { Action } from "redux";
import {
  IProduct,
  IProductWithQuantity,
} from "utils/interfaces/products.interface";

export enum GetAllProductKeys {
  GET_ALL_PRODUCT_REQ = "GET_ALL_PRODUCT_REQ",
  GET_ALL_PRODUCT_SUCCESS = "GET_ALL_PRODUCT_SUCCESS",
  GET_ALL_PRODUCT_FAILURE = "GET_ALL_PRODUCT_FAILURE",
}
export interface GetProductsActionSuccess extends Action {
  readonly type: GetAllProductKeys.GET_ALL_PRODUCT_SUCCESS;
  response: Partial<{ products: IProductWithQuantity[] }>;
}

export const getListProduct = (dispatch: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllProductKeys),
    method: "get",
    endpoint: "/products",
    body: {},
  });
export const getAllProduct = (
  dispatch: any,
  categories?: string
): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllProductKeys),
    method: "get",
    endpoint: "/products?categories=" + categories,
    body: {},
  });

export enum CreateProductKeys {
  CREATE_PRODUCT_REQ = "CREATE_PRODUCT_REQ",
  CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE",
}
export const createProduct = (
  dispatch: any,
  product: IProduct
): Promise<IProduct> =>
  dispatchApi(dispatch, {
    types: Object.keys(CreateProductKeys),
    method: "POST",
    endpoint: "/products",
    body: {
      data: product,
    },
  });

export enum SearchProductKeys {
  SEARCH_PRODUCTS_REQ = "SEARCH_PRODUCTS_REQ",
  SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS",
  SEARCH_PRODUCTS_FAILURE = "SEARCH_PRODUCTS_FAILURE",
}
export const searchProducts = (
  dispatch: any,
  name: string,
  categories: string
): Promise<{ products: IProductWithQuantity[] }> =>
  dispatchApi(dispatch, {
    types: Object.keys(SearchProductKeys),
    method: "get",
    endpoint: "/products?name=" + name + "&categories=" + categories,
    body: {},
  });
