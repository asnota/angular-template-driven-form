import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDoApp from './src/ToDoApp';
import store from './src/store';

export default class App extends Component {

  render() {

      return (
        <Provider store={store}>
          <ToDoApp />
        </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  blue: {
    color: 'skyblue',
    fontWeight: 'bold',
  },

});
