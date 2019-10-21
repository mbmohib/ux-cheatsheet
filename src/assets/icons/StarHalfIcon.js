import React from 'react';

import withSVG from './withSVG';

const StarHalfIcon = () => (
  <path d="M39.8,48.6c-0.2,0-0.4-0.1-0.5-0.2L25,39.3l-14.3,9.2c-0.3,0.2-0.8,0.2-1.1,0c-0.3-0.2-0.5-0.7-0.4-1.1L13.6,31L0.4,20.2 C0,19.9-0.1,19.5,0,19.1c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.2-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.2,15.9l17,0.9 c0.4,0,0.8,0.3,0.9,0.7c0.1,0.4,0,0.8-0.3,1.1L36.4,31l4.3,16.4c0.1,0.4,0,0.8-0.4,1.1C40.2,48.5,40,48.6,39.8,48.6z M25,37.1 c0,0,0.4,0.1,0.5,0.2l12.6,8.1l-3.8-14.5c-0.1-0.4,0-0.8,0.3-1l11.7-9.6l-15-0.8c-0.4,0-0.7-0.3-0.9-0.6L25,4.8V37.1z" />
);

export default withSVG(StarHalfIcon, {
  viewBox: '0 0 50 50',
  fill: '#feca28',
  size: 16,
});
