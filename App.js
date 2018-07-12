import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
      ]
    }

  }

  render() {

    const colorsSeven = this.state.colors.map( color => <View key={color} style={[ styles.container, styles[`${color}Bg`] ]} />)

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
  },
  redBg: {
    backgroundColor: 'rgb(255,  0,  0)'
  },
  orangeBg: {
    backgroundColor: 'rgb(255,127,  0)'
  },
  yellowBg: {
    backgroundColor: 'rgb(255,255,  0)'
  },
  greenBg: {
    backgroundColor: 'rgb(  0,255,  0)'
  },
  blueBg: {
    backgroundColor: 'rgb(  0,  0,255)'
  },
  indigoBg: {
    backgroundColor: 'rgb( 75,  0,130)'
  },
  violetBg: {
    backgroundColor: 'rgb(143,  0,255)'
  }

});
