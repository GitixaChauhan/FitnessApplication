/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase } from '@react-native-firebase/app';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDExEQ5MLiIJPNAQJj7nAIJ5c092VTJv0c',
    projectId: 'divyaroganivarana',
    appId: "1:265492818145:ios:91a4e57c1b19271140afa0",
  }
    firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
