import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, Category } from 'views/pages';
import Layout from 'views/layouts/Layout';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/category/:slug" component={Category} exact />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
