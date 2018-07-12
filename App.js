// Library code structure React
import React, { Component } from 'react';

// Native views to Android and iOS
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {

  // @constructor App
  // @param Property
  constructor(props) {
    super(props);

    // State initialization
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

      /**
       * Functional programming
       * immutability & statelessness
       */
      this.setState(previousState => {

        /**
         * The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
         *
         * beginIndex (first arg): The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex
         * where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex
         * is greater than or equal to the length of the string, slice() returns an empty string.
         *
         * endIndex (second arg): Optional. The zero-based index before which to end extraction. The character at this index will not be
         * included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex
         * where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).
         */
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

  // Seven colors (rainbow)
  redBg: {
    backgroundColor: 'rgba(255,  0,  0, .5)'
  },
  orangeBg: {
    backgroundColor: 'rgba(255,127,  0, .5)'
  },
  yellowBg: {
    backgroundColor: 'rgba(255,255,  0, .5)'
  },
  greenBg: {
    backgroundColor: 'rgba(  0,255,  0, .5)'
  },
  blueBg: {
    backgroundColor: 'rgba(  0,  0,255, .5)'
  },
  indigoBg: {
    backgroundColor: 'rgba( 75,  0,130, .5)'
  },
  violetBg: {
    backgroundColor: 'rgba(143,  0,255, .5)'
  }

});
