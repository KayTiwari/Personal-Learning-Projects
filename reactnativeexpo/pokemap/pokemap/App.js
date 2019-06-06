import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket'
//defines meteor server


export default class App extends React.Component {
  state = {
    currentScreen: ''
  }
  componentWillMount(){
    Meteor.connect(SERVER_URL);
    //connects to meteor server
  }
  signIn = (email, password) => {
    Meteor.loginWithPassword(email, password, (err, data)=> {
      //built in meteor function
      if (err){
        if(err.reason === 'User was not found'){
          Accounts.createUser({email, password}, (err)=>{
            console.log(err);
          })
        }
      } else {
        console.log('email');
      }
    });
    console.log(Meteor.userId());
  }

  render() {
    return (
      <View style={styles.container}>
        <SignIn signIn={this.signIn}/>
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
