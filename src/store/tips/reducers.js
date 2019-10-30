import produce from 'immer';
import * as types from './types';

const initialState = {
  tips: [],
};

const tipsReducers = function(state = initialState, action) {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      case types.GET_TIPS_COMPLETED:
        const tips = [];
        payload.forEach(doc => {
          tips.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        draft.tips = tips;
        break;
      default:
        return;
    }
  });
};

export default tipsReducers;
