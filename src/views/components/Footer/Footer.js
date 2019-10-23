import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { Wrapper, Typography } from 'views/ui';

const Footer = () => (
  <Container>
    <Wrapper py={3} mt={3}>
      <Grid container>
        <Grid item sm={6}>
          <Typography component="p" variant="caption">
            Designed & Developed by Mohib
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography component="p" variant="caption" align="right">
            © 2019 Mohib.me
          </Typography>
        </Grid>
      </Grid>
    </Wrapper>
  </Container>
);

export default Footer;
