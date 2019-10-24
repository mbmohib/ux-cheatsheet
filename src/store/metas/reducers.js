import * as types from './types';

const initialState = {
  categories: '',
};

const metaReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORIES_COMPLETED:
      return {
        ...state,
        categories: {
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default metaReducers;
