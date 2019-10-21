import React from 'react';
import styled, { css } from 'styled-components';

const ImageWrapper = styled.img`
  display: block;
  max-width: 100%;
  width: ${props => props.width + 'px'};
`;

const Image = ({ src, alt, width }) => {
  return <ImageWrapper src={src} alt={alt} width={width} />;
};

export default Image;
