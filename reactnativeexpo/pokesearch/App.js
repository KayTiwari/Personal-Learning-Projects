import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Button } from 'native-base';

var myBackground = require('./assets/landing.jpg');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={myBackground}  />
        <View style={styles.viewStyles}>
          <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
          <Button
          block={true}
          style={styles.buttonStyle}
          onPress={() => {}}
          >
          <Text style={styles.buttonText}>Start Searching</Text> 
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 20
  },
  viewStyles: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
};
