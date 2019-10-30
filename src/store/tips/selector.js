import { createSelector } from 'reselect';

const selectTips = state => state.tips;

export const selectTipsWithImages = createSelector(
  [selectTips],
  ({ tips }) => tips.filter(tip => tip.image)
);

export const selectTipsCount = createSelector(
  [selectTips],
  ({ tips }) => tips.length
);
