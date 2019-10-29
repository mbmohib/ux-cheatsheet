import metaReducers from './reducers';
import * as metaActions from './actions';
import { selectPrimaryCategories, selectSecondaryCategories } from './selector';

export { metaActions, selectPrimaryCategories, selectSecondaryCategories };
export default metaReducers;
