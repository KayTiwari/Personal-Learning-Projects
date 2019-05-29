import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  state = {

  }

  render(){
    return(
      <View style={styles.viewStyles}>
        <Text>fuck you</Text>
      </View>
    )
  }

}

export default App;

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})