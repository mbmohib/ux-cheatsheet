import tipsReducers from './reducers';
import * as tipsActions from './actions';
import { selectTipsWithImages, selectTipsCount } from './selector';

export { tipsActions, selectTipsWithImages, selectTipsCount };
export default tipsReducers;
