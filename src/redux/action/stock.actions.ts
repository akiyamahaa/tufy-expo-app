import dispatchApi from './dispatchApi';

export enum GetAllStockInKeys {
  GET_ALL_STOCK_IN_REQ = 'GET_ALL_STOCK_IN_REQ',
  GET_ALL_STOCK_IN_SUCCESS = 'GET_ALL_STOCK_IN_SUCCESS',
  GET_ALL_STOCK_IN_FAILURE = 'GET_ALL_STOCK_IN_FAILURE',
}

export const getAllStockIn = (dispatch: any, queryToday?: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllStockInKeys),
    method: 'get',
    endpoint: '/stock_in',
    body: {
      data: queryToday,
    },
  });

export enum GetAllStockOutKeys {
  GET_ALL_STOCK_Out_REQ = 'GET_ALL_STOCK_Out_REQ',
  GET_ALL_STOCK_Out_SUCCESS = 'GET_ALL_STOCK_Out_SUCCESS',
  GET_ALL_STOCK_Out_FAILURE = 'GET_ALL_STOCK_Out_FAILURE',
}

export const getAllStockOut = (dispatch: any, queryToday?: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllStockOutKeys),
    method: 'get',
    endpoint: '/stock_out',
    body: {
      data: queryToday,
    },
  });

export enum CreateStockInKeys {
  CREATE_STOCK_IN_REQ = 'CREATE_STOCK_IN_REQ',
  CREATE_STOCK_IN_SUCCESS = 'CREATE_STOCK_IN_SUCCESS',
  CREATE_STOCK_IN_FAILURE = 'CREATE_STOCK_IN_FAILURE',
}

export const createStockIn = (dispatch: any, data: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(CreateStockInKeys),
    method: 'post',
    endpoint: '/stock_in',
    body: {
      data,
    },
  });
export enum CreateStockOutKeys {
  CREATE_STOCK_Out_REQ = 'CREATE_STOCK_Out_REQ',
  CREATE_STOCK_Out_SUCCESS = 'CREATE_STOCK_Out_SUCCESS',
  CREATE_STOCK_Out_FAILURE = 'CREATE_STOCK_Out_FAILURE',
}

export const createStockOut = (dispatch: any, data: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(CreateStockInKeys),
    method: 'post',
    endpoint: '/stock_out',
    body: {
      data,
    },
  });
