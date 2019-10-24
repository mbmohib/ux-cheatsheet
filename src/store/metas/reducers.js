import * as types from './types';
import produce from 'immer';

const initialState = {
  categories: '',
};

const metaReducers = (state = initialState, action) => {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      case types.GET_CATEGORIES_COMPLETED:
        draft.categories = payload;
        break;
    }
  });
};

export default metaReducers;
