import * as types from './types';

export const getTips = () => {
  return {
    type: types.GET_TIPS,
    payload: {
      path: `tips`,
      method: 'GET',
    },
    meta: {
      API: true,
      label: 'tips',
      loadMore: false,
    },
  };
};
