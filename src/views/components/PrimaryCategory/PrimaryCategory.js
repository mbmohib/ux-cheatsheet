import React from 'react';
import { Link } from 'react-router-dom';

import { signInImage, checkoutImage } from 'assets/images';
import { Wrapper, Typography, Button } from 'views/ui';

const PrimaryCategory = ({ category }) => {
  return (
    <Wrapper
      bgImage={
        category.title === 'authentication' ? signInImage : checkoutImage
      }
      px={5}
      pb={10}
      pt={8}
      borderRadius={5}
      shadow={1}
      hover
    >
      <Typography
        variant="h2"
        color="textSecondary"
        fontWeight={600}
        textTransform="capitalize"
      >
        {category.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Read all the {category.title} related UX
      </Typography>
      <Button
        variant="contained"
        color="primary"
        mt={3}
        component={Link}
        to={`/category/${category.title}`}
      >
        Read
      </Button>
    </Wrapper>
  );
};

export default PrimaryCategory;
