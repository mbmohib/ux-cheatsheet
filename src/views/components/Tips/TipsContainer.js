import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { tipsActions, selectTipsWithImages } from 'store/tips';
import Tips from './Tips';
import { Fetcher } from 'utils';

const TipsContainer = () => {
  const tips = useSelector(selectTipsWithImages);
  const { getTips } = tipsActions;

  return (
    <Fetcher fetchData={getTips} label="tips">
      {() => (
        <Grid container spacing={3}>
          {tips.map(tip => (
            <Grid key={tip.id} item sm={4}>
              <Tips tip={tip} />
            </Grid>
          ))}
        </Grid>
      )}
    </Fetcher>
  );
};

export default TipsContainer;
