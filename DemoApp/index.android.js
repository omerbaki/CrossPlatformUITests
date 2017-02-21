/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import TicTacToeApp from 'TicTacToeApp'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DemoApp extends Component {
  render() {
    return (
        <TicTacToeApp />
    );
  }
}

AppRegistry.registerComponent('DemoApp', () => DemoApp);
