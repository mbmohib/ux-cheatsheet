import produce from 'immer';
import * as types from './types';

const initialState = {
  categories: [],
};

const metaReducers = function(state = initialState, action) {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      case types.GET_CATEGORIES_COMPLETED:
        const categories = [];
        payload.forEach(function(doc) {
          categories.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        draft.categories = categories;
        break;
      default:
        return;
    }
  });
};

export default metaReducers;
