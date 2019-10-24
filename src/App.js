import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes/routes';
import Theme from 'styles';
import store from 'store/redux';

import Firebase from 'firebase/app';
import config from 'config';

class App extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Theme>
          <Routes />
        </Theme>
      </Provider>
    );
  }
}

export default App;
