import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes/routes';
import { PersistGate } from 'redux-persist/integration/react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import Theme from 'styles';
import store, { persistor } from 'store/redux';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig);
  }

  render() {
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
}

export default App;
