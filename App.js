import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>

        <Text>Hello, World! - ArcoIris</Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,

    alignItems: 'center',
    justinfyContent: 'center'
  }
});
