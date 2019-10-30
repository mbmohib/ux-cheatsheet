import React from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper, Image, Typography, Button, Divider } from 'views/ui';

const Tip = ({ tip }) => {
  return (
    <Wrapper
      p={2}
      py={2}
      borderRadius={5}
      shadow={1}
      height="100%"
      flex
      direction="column"
    >
      <Image src={tip.image} />
      <Wrapper grow={1} flex align="center">
        <Typography variant="body1" mt={2} mb={5}>
          {tip.description}
        </Typography>
      </Wrapper>
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
              <Typography
                component="p"
                variant="subtitle1"
                textTransform="capitalize"
              >
                {tip.categories}
              </Typography>
            </Wrapper>
          </Grid>
        </Grid>
      </Wrapper>
    </Wrapper>
  );
};

export default Tip;
