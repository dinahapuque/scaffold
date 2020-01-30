import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Root } from 'native-base';
import { Router } from 'react-native-router-flux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/config/StoreConfig';

import codePush from "react-native-code-push";

import { Scenes } from './src/Scenes';

const ConnectedRouter = connect()(Router);

/**
 * Don't forget to change/set your:
 * Name project (if you're going to use this project)
 * CodePush Key on strings.xml and assets/appcenter-config.json
 * Reactotron Host
 * ClientsConfig Host
 * ...whatever you want to.
 **/

class App extends Component {

  componentDidCatch(error, info) {
      console.log(error);
      console.log(info);
  }

  render() {

    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter scenes={Scenes} />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}


const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);