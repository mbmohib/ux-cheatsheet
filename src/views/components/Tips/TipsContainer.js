import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import {
  tipsActions,
  selectTipsWithImages,
  selectTipsWithoutImage,
} from 'store/tips';
import Tip from './Tip';
import TipWithoutImage from './TipWithoutImage';
import { Fetcher } from 'utils';

const TipsContainer = ({ categoryId }) => {
  const tips = useSelector(state => selectTipsWithImages(state, categoryId));
  const tipsWithoutImage = useSelector(state =>
    selectTipsWithoutImage(state, categoryId)
  );
  const { getTips } = tipsActions;

  return (
    <Fetcher fetchData={getTips} label="tips">
      {() => (
        <>
          <Grid container spacing={3}>
            {tips.map(tip => (
              <Grid key={tip.id} item sm={4}>
                <Tip tip={tip} />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            {tipsWithoutImage.map(tip => (
              <Grid key={tip.id} item sm={4}>
                <TipWithoutImage tip={tip} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Fetcher>
  );
};

export default TipsContainer;
