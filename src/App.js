import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes/routes';
import { PersistGate } from 'redux-persist/integration/react';
import Firebase from 'firebase/app';

import Theme from 'styles';
import store, { persistor } from 'store/redux';
import config from 'config';

class App extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);
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
