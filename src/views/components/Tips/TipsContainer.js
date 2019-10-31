import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { tipsActions } from 'store/tips';
import AllTips from './AllTips';
import TipsCategory from './TipsCategory';
import { PreLoader } from 'views/ui';
import { selectId } from 'store/meta';

const TipsContainer = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { slug } = param;
  const loading = useSelector(({ ui }) => ui.loading.tips);
  const tips = useSelector(({ tips }) => tips.tips);
  const categoryId = useSelector(state => selectId(state, slug));
  const { getTips } = tipsActions;

  useEffect(() => {
    dispatch(getTips());
  }, [dispatch, getTips]);

  const isLoading = tips.length === 0 && loading;

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          {!slug && <AllTips />}
          {slug && <TipsCategory categoryId={categoryId} />}
        </>
      )}
    </>
  );
};

export default TipsContainer;
