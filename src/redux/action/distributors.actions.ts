import dispatchApi from "./dispatchApi";
import { Action } from "redux";
import { IDistributor } from "utils/interfaces/distributors.interface";

export enum GetAllDistributorsKeys {
  GET_ALL_DISTRIBUTORS_REQ = "GET_ALL_DISTRIBUTORS_REQ",
  GET_ALL_DISTRIBUTORS_SUCCESS = "GET_ALL_DISTRIBUTORS_SUCCESS",
  GET_ALL_DISTRIBUTORS_FAILURE = "GET_ALL_DISTRIBUTORS_FAILURE",
}
export interface GetDistributorsActionSuccess extends Action {
  readonly type: GetAllDistributorsKeys.GET_ALL_DISTRIBUTORS_SUCCESS;
  response: Partial<{ distributors: IDistributor[] }>;
}

export const getAllDistributors = (
  dispatch: any
): Promise<{ distributors: IDistributor[] }> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllDistributorsKeys),
    method: "get",
    endpoint: "/distributors",
    body: {},
  });
export enum SearchDistributorsKeys {
  SEARCH_DISTRIBUTORS_REQ = "SEARCH_DISTRIBUTORS_REQ",
  SEARCH_DISTRIBUTORS_SUCCESS = "SEARCH_DISTRIBUTORS_SUCCESS",
  SEARCH_DISTRIBUTORS_FAILURE = "SEARCH_DISTRIBUTORS_FAILURE",
}
export const searchDistributors = (
  dispatch: any,
  phone: string
): Promise<{ distributor: IDistributor }> =>
  dispatchApi(dispatch, {
    types: Object.keys(SearchDistributorsKeys),
    method: "get",
    endpoint: "/distributors/search?phone=%2B" + phone,
    body: {},
  });
export enum CreateDistributorKeys {
  CREATE_DISTRIBUTOR_REQ = "CREATE_DISTRIBUTOR_REQ",
  CREATE_DISTRIBUTOR_SUCCESS = "CREATE_DISTRIBUTOR_SUCCESS",
  CREATE_DISTRIBUTOR_FAILURE = "CREATE_DISTRIBUTOR_FAILURE",
}
export const createDistributor = (
  dispatch: any,
  distributor: IDistributor
): Promise<IDistributor> =>
  dispatchApi(dispatch, {
    types: Object.keys(CreateDistributorKeys),
    method: "POST",
    endpoint: "/distributors",
    body: {
      data: distributor,
    },
  });
