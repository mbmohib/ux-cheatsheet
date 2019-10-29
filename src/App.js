import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes/routes';
import { PersistGate } from 'redux-persist/integration/react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import Theme from 'styles';
import store, { persistor } from 'store/redux';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Routes />
        </Theme>
      </PersistGate>
    </Provider>
  );
}
