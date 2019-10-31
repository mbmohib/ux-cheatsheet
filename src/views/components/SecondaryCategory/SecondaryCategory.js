import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Typography } from 'views/ui';
import {
  InputIcon,
  FormIcon,
  SearchIcon,
  ButtonIcon,
  StarIcon,
  TextIcon,
  ColorIcon,
  ImageIcon,
  GigIcon,
} from 'assets/icons';

const renderIcon = title => {
  switch (title) {
    case 'input':
      return <InputIcon size={40} fill="#cdcdcd" />;
    case 'form':
      return <FormIcon size={40} fill="#cdcdcd" />;
    case 'search':
      return <SearchIcon size={40} fill="#cdcdcd" />;
    case 'button':
      return <ButtonIcon size={40} fill="#cdcdcd" />;
    case 'icons':
      return <StarIcon size={40} fill="#cdcdcd" />;
    case 'color':
      return <ColorIcon size={40} fill="#cdcdcd" />;
    case 'text':
      return <TextIcon size={40} fill="#cdcdcd" />;
    case 'image':
      return <ImageIcon size={40} fill="#cdcdcd" />;
    case 'general':
      return <GigIcon size={40} fill="#cdcdcd" />;
  }
};

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
          {category.title && renderIcon(category.title)}
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
