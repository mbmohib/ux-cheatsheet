import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'views/ui';
import { logoImage } from 'assets/images';

const Logo = ({ text }) => {
  return (
    <Link to="/">
      <Image src={logoImage} alt={text} width={100} />
    </Link>
  );
};

export default Logo;
