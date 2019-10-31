import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Typography } from 'views/ui';
import { InputIcon, FormIcon, SearchIcon, ButtonIcon } from 'assets/icons';

const SecondaryCategory = ({ category }) => {
  return (
    <Link to={'/category/' + category.title}>
      <Wrapper
        p={3}
        hover={1}
        borderRadius={5}
        flex
        align="center"
        bgcolor="secondary.light"
      >
        <Wrapper width="30%" borderRight={1} borderColor="grey.500">
          <InputIcon size={40} />
        </Wrapper>
        <Wrapper>
          <Typography variant="h4" ml={2} textTransform="capitalize">
            {category.title}
          </Typography>
        </Wrapper>
      </Wrapper>
    </Link>
  );
};

export default SecondaryCategory;
