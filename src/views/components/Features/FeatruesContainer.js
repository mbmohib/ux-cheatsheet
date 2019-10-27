import React from 'react';
import { Grid } from '@material-ui/core';

import Feature from './Feature';

const FeaturesContainer = () => {
  return (
    <Grid container spacing={3}>
      {[
        {
          image:
            'https://pbs.twimg.com/media/DGPk0gvXsAES3NP?format=jpg&name=small',
          text:
            'A subtle link for negative secondary actions often works better than a big bold button.',
          source:
            'https://stackoverflow.com/questions/50307876/grid-list-angular-material-masonry',
          category: 'form',
        },
        {
          text:
            'A subtle link for negative secondary actions often works better than a big bold button.',
          source:
            'https://stackoverflow.com/questions/50307876/grid-list-angular-material-masonry',
          category: 'form',
        },
        {
          image:
            'https://pbs.twimg.com/media/DGPk0gvXsAES3NP?format=jpg&name=small',
          text:
            'A subtle link for negative secondary actions often works better than a big bold button.',
          source:
            'https://stackoverflow.com/questions/50307876/grid-list-angular-material-masonry',
          category: 'form',
        },
        {
          image:
            'https://pbs.twimg.com/media/DGPk0gvXsAES3NP?format=jpg&name=small',
          text:
            'A subtle link for negative secondary actions often works better than a big bold button.',
          source:
            'https://stackoverflow.com/questions/50307876/grid-list-angular-material-masonry',
          category: 'form',
        },
      ].map((feature, index) => (
        <Grid key={index} item sm={4}>
          <Feature feature={feature} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesContainer;
