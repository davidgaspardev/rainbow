import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: [
        'rgb(255,  0,  0)',
        'rgb(255,127,  0)',
        'rgb(255,255,  0)',
        'rgb(  0,255,  0)',
        'rgb(  0,  0,255)',
        'rgb( 75,  0,130)',
        'rgb(143,  0,255)'
      ]
    }

  }

  render() {

    const colorsSeven = this.state.colors.map( color => <View key={color} style={{ flex: 1, backgroundColor: color }} />)

    return (
      <View style={styles.container}>
        { colorsSeven }
      </View>
    );
  }


  componentDidMount() {

    setInterval(() => {

      this.setState(previousState => {

        let lastColor        = previousState.colors.slice(-1);
        let withoutLastColor = previousState.colors.slice(0, -1);

        return { colors: lastColor.concat(withoutLastColor) };

      });

    }, 1000 );

  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
});
