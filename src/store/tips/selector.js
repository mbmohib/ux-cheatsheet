import { createSelector } from 'reselect';

const selectTips = state => state.tips;
const selectMeta = state => state.meta;

function addCategory(tip, categories) {
  for (const category of categories) {
    if (tip.categories === category.id) {
      return {
        ...tip,
        categories: category.title,
      };
    }
  }
}

export const selectTipsWithImages = createSelector(
  [selectTips, selectMeta],
  ({ tips }, { categories }) =>
    tips.filter(tip => tip.image).map(tip => addCategory(tip, categories))
);

export const selectTipsWithoutImage = createSelector(
  [selectTips, selectMeta],
  ({ tips }, { categories }) =>
    tips.filter(tip => !tip.image).map(tip => addCategory(tip, categories))
);

export const selectTipsCategoryWiseWithImages = createSelector(
  [selectTips, selectMeta, (_, categoryId) => categoryId],
  ({ tips }, { categories }, categoryId) =>
    tips
      .filter(tip => tip.image && tip.categories === categoryId)
      .map(tip => addCategory(tip, categories))
);

export const selectTipsCategoryWiseWithoutImage = createSelector(
  [selectTips, selectMeta, (_, categoryId) => categoryId],
  ({ tips }, { categories }, categoryId) =>
    tips
      .filter(tip => !tip.image && tip.categories === categoryId)
      .map(tip => addCategory(tip, categories))
);

export const selectTipsCount = createSelector(
  [selectTips],
  ({ tips }) => tips.length
);

export const selectTipsCountCategoryWise = createSelector(
  [selectTips, (_, categoryId) => categoryId],
  ({ tips }, categoryId) =>
    tips.filter(tip => tip.categories === categoryId).length
);
