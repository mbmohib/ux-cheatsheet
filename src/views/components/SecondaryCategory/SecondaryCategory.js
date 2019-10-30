import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Typography } from 'views/ui';

const SecondaryCategory = ({ category }) => {
  return (
    <Wrapper
      p={3}
      hover={1}
      borderRadius={5}
      flex
      align="center"
      bgcolor="secondary.light"
    >
      <Link to={'/category/' + category.title}>
        <Wrapper width="30%" borderRight={1} borderColor="grey.500">
          {category.icon}
        </Wrapper>
        <Wrapper>
          <Typography variant="h4" ml={2} textTransform="capitalize">
            {category.title}
          </Typography>
        </Wrapper>
      </Link>
    </Wrapper>
  );
};

export default SecondaryCategory;
