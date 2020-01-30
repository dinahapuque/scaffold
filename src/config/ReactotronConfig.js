import Reactotron, { trackGlobalErrors, networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistor, store } from './StoreConfig';


console.disableYellowBox = true;

// First, set some configuration settings on how to connect to the app
const reactotron = Reactotron.configure({
  name: 'Scaffold',
  host: 'http://192.168.0.1',
  port: 9090
});

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin
// if you'd like.
reactotron.useReactNative({
  asyncStorage: { ignore: ['secret'] }
});

// plugin do redux
reactotron.use(reactotronRedux());

// Obter todos os erros globais
reactotron.use(trackGlobalErrors());

// Obter todas as conexões
reactotron.use(networking());

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  reactotron.connect();
  reactotron.clear();
}

console.tron = Reactotron.logImportant;

// Cria comandos
// Exibe o reducer
Reactotron.onCustomCommand({
  command: "Show Reducers",
  handler: () => console.tron(store.getState()),
  description: "Exibe todos os dados dos reducers",
});

// Limpa o reducer
Reactotron.onCustomCommand({
  command: "Clear Reducer",
  handler: () => persistor.purge(),
  description: "Limpa os dados do Reducer",
});

// Exibe o storage
Reactotron.onCustomCommand({
  command: "Show AsyncStorage",
  handler: () => _getStorageValue(),
  description: "Exibe todos os dados do AsyncStorage",
});

// Limpa o storage
Reactotron.onCustomCommand({
  command: "Clear AsyncStorage",
  handler: () => AsyncStorage.removeItem('persist:root'),//AsyncStorage.clear(),
  description: "Limpa o AsyncStorage",
});

async function _getStorageValue() {

  var value = await AsyncStorage.getItem('persist:root');
  var keys = await AsyncStorage.getAllKeys();

  console.tron(keys);
  console.tron(value);
  console.tron('Done');
}

// reactotron.onCustomCommand('Clear Storage', );
// reactotron.onCustomCommand('Clear Reducer', () => persistor.purge());

export default reactotron;