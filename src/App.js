import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes/routes';
import { PersistGate } from 'redux-persist/integration/react';

import Theme from 'styles';
import store, { persistor } from 'store/store';

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
