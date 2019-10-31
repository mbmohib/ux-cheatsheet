import tipsReducers from './reducers';
import * as tipsActions from './actions';
import {
  selectTipsWithImages,
  selectTipsWithoutImage,
  selectTipsCount,
  selectTipsCountCategoryWise,
  selectTipsCategoryWiseWithImages,
  selectTipsCategoryWiseWithoutImage,
} from './selector';

export {
  tipsActions,
  selectTipsWithImages,
  selectTipsWithoutImage,
  selectTipsCount,
  selectTipsCountCategoryWise,
  selectTipsCategoryWiseWithImages,
  selectTipsCategoryWiseWithoutImage,
};
export default tipsReducers;
