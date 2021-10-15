import dispatchApi from './dispatchApi';

export enum GetAllProductKeys {
  GET_ALLPRODUCT_REQ = 'GET_ALLPRODUCT_REQ',
  GET_ALLPRODUCT_SUCCESS = 'GET_ALLPRODUCT_SUCCESS',
  GET_ALLPRODUCT_FAILURE = 'GET_ALLPRODUCT_FAILURE',
}

export const getAllProduct = (dispatch: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllProductKeys),
    method: 'get',
    endpoint: '/products',
    body: {},
  });
