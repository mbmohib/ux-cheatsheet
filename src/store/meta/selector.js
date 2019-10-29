import { createSelector } from 'reselect';

const selectMeta = state => state.meta;

export const selectPrimaryCategories = createSelector(
  [selectMeta],
  ({ categories }) => categories.filter(category => category.type === 'primary')
);

export const selectSecondaryCategories = createSelector(
  [selectMeta],
  ({ categories }) =>
    categories.filter(category => category.type === 'secondary')
);
