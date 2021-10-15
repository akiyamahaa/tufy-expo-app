import dispatchApi from './dispatchApi';

export enum GetAllStockInKeys {
  GET_ALL_STOCK_IN_REQ = 'GET_ALL_STOCK_IN_REQ',
  GET_ALL_STOCK_IN_SUCCESS = 'GET_ALL_STOCK_IN_SUCCESS',
  GET_ALL_STOCK_IN_FAILURE = 'GET_ALL_STOCK_IN_FAILURE',
}

export const getAllStockIn = (dispatch: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllStockInKeys),
    method: 'get',
    endpoint: '/stock_in',
    body: {},
  });

export enum GetAllStockOutKeys {
  GET_ALL_STOCK_Out_REQ = 'GET_ALL_STOCK_Out_REQ',
  GET_ALL_STOCK_Out_SUCCESS = 'GET_ALL_STOCK_Out_SUCCESS',
  GET_ALL_STOCK_Out_FAILURE = 'GET_ALL_STOCK_Out_FAILURE',
}

export const getAllStockOut = (dispatch: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllStockOutKeys),
    method: 'get',
    endpoint: '/stock_out',
    body: {},
  });

export enum GetStockInByFilter {
  GET_STOCK_IN_FILTER_REQ = 'GET_STOCK_IN_FILTER_REQ',
  GET_STOCK_IN_FILTER_SUCCESS = 'GET_STOCK_IN_FILTER_SUCCESS',
  GET_STOCK_IN_FILTER_FAILURE = 'GET_STOCK_IN_FILTER_FAILURE',
}

export const getStockInFilter = (
  dispatch: any,
  fromDate: any,
  toDate: any,
  distributorPhone?: any
): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetStockInByFilter),
    method: 'get',
    endpoint: '/stock_in/filter',
    body: {
      params: {
        fromDate,
        toDate,
        distributorPhone,
      },
    },
  });
export enum GetStockOutByFilter {
  GET_STOCK_OUT_FILTER_REQ = 'GET_STOCK_OUT_FILTER_REQ',
  GET_STOCK_OUT_FILTER_SUCCESS = 'GET_STOCK_OUT_FILTER_SUCCESS',
  GET_STOCK_OUT_FILTER_FAILURE = 'GET_STOCK_OUT_FILTER_FAILURE',
}

export const getStockOutFilter = (
  dispatch: any,
  fromDate: any,
  toDate: any,
  customerPhone?: any
): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetStockOutByFilter),
    method: 'get',
    endpoint: '/stock_out/filter',
    body: {
      params: {
        fromDate,
        toDate,
        customerPhone,
      },
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
