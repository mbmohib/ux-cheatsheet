import React from 'react';

import withSVG from './withSVG';

const TextIcon = () => (
  <path
    strokeLinejoin="round"
    strokeMiterlimit="10"
    strokeWidth="2"
    d="M39,7H11 c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-3h9v28h-3c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h10 c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1h-3V11h9v3c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V8C40,7.448,39.552,7,39,7z"
  />
);

export default withSVG(TextIcon, {
  viewBox: '0 0 50 50',
});
