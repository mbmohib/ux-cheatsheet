import React from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper, Image, Typography, Button, Divider } from 'views/ui';
import { FormIcon } from 'assets/icons';

const Tip = ({ tip }) => {
  return (
    <Wrapper p={2} borderRadius={5} shadow={1}>
      <Image src={tip.image} />
      <Typography variant="body1" mt={2} mb={5}>
        {tip.description}
      </Typography>
      <Divider />
      <Wrapper>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Button color="primary" variant="text" href={tip.source}>
              Source
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Wrapper flex align="center" justify="flex-end">
              <FormIcon size={16} />
              <Typography
                component="p"
                variant="subtitle1"
                ml={1}
                textTransform="capitalize"
              >
                {tip.category}
              </Typography>
            </Wrapper>
          </Grid>
        </Grid>
      </Wrapper>
    </Wrapper>
  );
};

export default Tip;
