/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Routes from './src/Routes';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Routes);
