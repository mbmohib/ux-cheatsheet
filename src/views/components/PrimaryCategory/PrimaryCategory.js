import React from 'react';

import { Wrapper, Typography, Button } from 'views/ui';

const PrimaryCategory = ({ category }) => {
  return (
    <Wrapper
      bgImage={category.img}
      px={5}
      pb={10}
      pt={8}
      borderRadius={5}
      shadow={1}
      hover
    >
      <Typography variant="h2" color="textSecondary" fontWeight={600}>
        {category.label}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Read all the {category.label} related UX
      </Typography>
      <Button variant="contained" color="primary" mt={3}>
        Read
      </Button>
    </Wrapper>
  );
};

export default PrimaryCategory;
