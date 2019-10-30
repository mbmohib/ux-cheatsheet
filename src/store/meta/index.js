import metaReducers from './reducers';
import * as metaActions from './actions';
import {
  selectPrimaryCategories,
  selectSecondaryCategories,
  selectId,
} from './selector';

export {
  metaActions,
  selectPrimaryCategories,
  selectSecondaryCategories,
  selectId,
};
export default metaReducers;
