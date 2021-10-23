import dispatchApi from "./dispatchApi";
import { Action } from "redux";
import {
  ICategories,
  ICategoryWithCount,
} from "utils/interfaces/categories.interface";

export enum GetAllCategoriesKeys {
  GET_ALL_CATEGORIES_REQ = "GET_ALL_CATEGORIES_REQ",
  GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS",
  GET_ALL_CATEGORIES_FAILURE = "GET_ALL_CATEGORIES_FAILURE",
}
export interface GetCategoriesActionSuccess extends Action {
  readonly type: GetAllCategoriesKeys.GET_ALL_CATEGORIES_SUCCESS;
  response: Partial<{ categories: ICategoryWithCount[] }>;
}

export const getAllCategories = (
  dispatch: any
): Promise<{ categories: ICategoryWithCount[] }> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllCategoriesKeys),
    method: "get",
    endpoint: "/categories",
    body: {},
  });

export enum CreateCategoryKeys {
  CREATE_CUSTOMER_REQ = "CREATE_CUSTOMER_REQ",
  CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS",
  CREATE_CUSTOMER_FAILURE = "CREATE_CUSTOMER_FAILURE",
}
export const createCategory = (
  dispatch: any,
  category: ICategories
): Promise<ICategories> =>
  dispatchApi(dispatch, {
    types: Object.keys(CreateCategoryKeys),
    method: "POST",
    endpoint: "/categories",
    body: {
      data: category,
    },
  });

export enum SearchCategoriessKeys {
  SEARCH_CATEGORIES_REQ = "SEARCH_CATEGORIES_REQ",
  SEARCH_CATEGORIES_SUCCESS = "SEARCH_CATEGORIES_SUCCESS",
  SEARCH_CATEGORIES_FAILURE = "SEARCH_CATEGORIES_FAILURE",
}
export const searchCategories = (
  dispatch: any,
  name: string
): Promise<{ categories: ICategoryWithCount[] }> =>
  dispatchApi(dispatch, {
    types: Object.keys(SearchCategoriessKeys),
    method: "get",
    endpoint: "/categories/search?name=" + name,
    body: {},
  });
