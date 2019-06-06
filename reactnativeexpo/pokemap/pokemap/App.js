import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';

export default class App extends React.Component {
  state = {
    currentScreen: ''
  }
  signIn = (email, password) => {
    Meteor.loginWithPassword(email, password, (err, data)=> {
      if (err){
        if(err.reason === 'User was not found'){
          Accounts.createUser({email, password}, (err)=>{
            console.log(err);
          })
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SignIn signIn={this.signIn()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
