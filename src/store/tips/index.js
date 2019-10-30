import tipsReducers from './reducers';
import * as tipsActions from './actions';
import {
  selectTipsWithImages,
  selectTipsWithoutImage,
  selectTipsCount,
} from './selector';

export {
  tipsActions,
  selectTipsWithImages,
  selectTipsWithoutImage,
  selectTipsCount,
};
export default tipsReducers;
