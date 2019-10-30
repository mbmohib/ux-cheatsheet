import React from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper, Image, Typography, Button, Divider } from 'views/ui';

const TipWithoutImage = ({ tip }) => {
  return (
    <Wrapper
      px={4}
      pb={2}
      pt={6}
      borderRadius={5}
      shadow={1}
      height="100%"
      flex
      direction="column"
    >
      <Typography variant="h4" mt={2} mb={5} textTransform="capitalize">
        {tip.categories}
      </Typography>
      <Wrapper grow={1} flex align="center">
        <Typography variant="body1" mt={2} mb={5}>
          {tip.description}
        </Typography>
      </Wrapper>
      <Wrapper>
        <Button color="primary" variant="text" href={tip.source}>
          Source
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export default TipWithoutImage;
