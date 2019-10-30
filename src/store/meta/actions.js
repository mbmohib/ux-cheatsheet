import * as types from './types';

export const getCategories = () => {
  return {
    type: types.GET_CATEGORIES,
    payload: {
      path: `categories`,
      method: 'GET',
    },
    meta: {
      API: true,
      label: 'categories',
      loadMore: false,
    },
  };
};
