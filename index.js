/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



const mainApp = () => (

        <App />

);

AppRegistry.registerComponent(appName, () => mainApp);
