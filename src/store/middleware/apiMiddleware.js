import { uiActions } from 'store/ui';
import * as errorTypes from 'store/ui/types';
import { firestore } from 'firebase-config/fireInstance';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);
  const { API, label } = action.meta || {};
  const { path } = action.payload || {};

  if (!API) {
    return;
  }

  if (API && !path) {
    throw new Error(`'path' not specified for api action ${action.type}`);
  }

  // Notify request start with passing "label"
  // for handling multiple loading spinner
  dispatch(uiActions.fetchingStart(label));

  // const ref = firebase.collection(`/${path}`).doc();
  return firestore
    .collection(path)
    .get()
    .then(querySnapshot => {
      next({
        type: `${action.type}_completed`,
        payload: querySnapshot,
        meta: action.meta,
      });

      // Notify request finished
      dispatch(uiActions.fetchingEnd(label));
    })
    .catch(err => {
      next({
        type: errorTypes.SET_ERROR_MESSAGE,
        payload: err,
        meta: action.meta,
      });

      // Notify request finished
      dispatch(uiActions.fetchingEnd(label));
    });
};

export default apiMiddleware;
