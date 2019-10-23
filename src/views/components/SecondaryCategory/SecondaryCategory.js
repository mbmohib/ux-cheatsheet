import React from 'react';

import { Wrapper, Typography } from 'views/ui';

const SecondaryCategory = ({ category }) => {
  return (
    <Wrapper
      px={5}
      pb={10}
      pt={8}
      borderRadius={5}
      shadow={1}
      hover
      flex
      align="center"
      justify="center"
      direction="column"
    >
      {category.icon}
      <Typography variant="h4" mt={1}>
        {category.label}
      </Typography>
    </Wrapper>
  );
};

export default SecondaryCategory;
