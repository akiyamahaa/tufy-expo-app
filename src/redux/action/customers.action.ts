import dispatchApi from "./dispatchApi";
import { Action } from "redux";
import { ICustomer } from "utils/interfaces/customers.interface";

export enum GetAllCustomersKeys {
  GET_ALL_CUSTOMERS_REQ = "GET_ALL_CUSTOMERS_REQ",
  GET_ALL_CUSTOMERS_SUCCESS = "GET_ALL_CUSTOMERS_SUCCESS",
  GET_ALL_CUSTOMERS_FAILURE = "GET_ALL_CUSTOMERS_FAILURE",
}
export interface GetCustomersActionSuccess extends Action {
  readonly type: GetAllCustomersKeys.GET_ALL_CUSTOMERS_SUCCESS;
  response: Partial<{ customers: ICustomer[] }>;
}

export const getAllCustomers = (
  dispatch: any
): Promise<{ customers: ICustomer[] }> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllCustomersKeys),
    method: "get",
    endpoint: "/customers",
    body: {},
  });
export enum SearchCustomersKeys {
  SEARCH_CUSTOMERS_REQ = "SEARCH_CUSTOMERS_REQ",
  SEARCH_CUSTOMERS_SUCCESS = "SEARCH_CUSTOMERS_SUCCESS",
  SEARCH_CUSTOMERS_FAILURE = "SEARCH_CUSTOMERS_FAILURE",
}
export const searchCustomers = (
  dispatch: any,
  phone: string
): Promise<{ customer: ICustomer }> =>
  dispatchApi(dispatch, {
    types: Object.keys(SearchCustomersKeys),
    method: "get",
    endpoint: "/customers/search?phone=%2B" + phone,
    body: {},
  });

export enum CreateCustomerKeys {
  CREATE_CUSTOMER_REQ = "CREATE_CUSTOMER_REQ",
  CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS",
  CREATE_CUSTOMER_FAILURE = "CREATE_CUSTOMER_FAILURE",
}
export const createCustomer = (
  dispatch: any,
  customer: ICustomer
): Promise<ICustomer> =>
  dispatchApi(dispatch, {
    types: Object.keys(CreateCustomerKeys),
    method: "POST",
    endpoint: "/customers",
    body: {
      data: customer
    },
  });
