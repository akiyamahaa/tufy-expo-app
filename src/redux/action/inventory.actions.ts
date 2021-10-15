import dispatchApi from './dispatchApi';

export enum GetAllInventoryKeys {
  GET_ALL_INVENTORY_REQ = 'GET_ALL_INVENTORY_REQ',
  GET_ALL_INVENTORY_SUCCESS = 'GET_ALL_INVENTORY_SUCCESS',
  GET_ALL_INVENTORY_FAILURE = 'GET_ALL_INVENTORY_FAILURE',
}

export const getAllInventory = (dispatch: any): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllInventoryKeys),
    method: 'get',
    endpoint: '/inventories',
    body: {},
  });

export const searchInventory = (
  dispatch: any,
  searchField: any,
): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetAllInventoryKeys),
    method: 'get',
    endpoint: '/inventories/search',
    body: {
      params: {
        searchField,
      },
    },
  });
