import dispatchApi from './dispatchApi';

export enum GetStatsKeys {
  GET_STATS_REQ = 'GET_STATS_REQ',
  GET_STATS_SUCCESS = 'GET_STATS_SUCCESS',
  GET_STATS_FAILURE = 'GET_STATS_FAILURE',
}

export const getStats = (
  dispatch: any,
  month: number,
  year: number
): Promise<any> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetStatsKeys),
    method: 'get',
    endpoint: '/stats',
    body: {
      params: {
        month,
        year,
      },
    },
  });
