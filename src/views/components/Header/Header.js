import React from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Search from 'views/components/Search';
import { HeaderStyle, Logo } from 'views/ui';

const Header = () => (
  <HeaderStyle>
    <Container>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Logo text="Ux Cheatsheet" />
        </Grid>
        <Grid item xs={8}>
          <Search />
        </Grid>
      </Grid>
    </Container>
  </HeaderStyle>
);

export default Header;
