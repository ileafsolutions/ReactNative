/*
This is very first entry point to the JS code. Here, We are redirecting the control
to EntryPoint.js file described in App folder for a more readable coding pattern.
*/
import { AppRegistry } from 'react-native'
import EntryPoint from './App/EntryPoint'

AppRegistry.registerComponent('poc', () => EntryPoint);
