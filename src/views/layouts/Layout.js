import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  margin-top: 120px;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default Layout;
