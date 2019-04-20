import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'



class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC0Xfz3qA33dg80pgnu5JR7Lc-Z1i2-uI0',
            authDomain: 'authenticationprac.firebaseapp.com',
            databaseURL: 'https://authenticationprac.firebaseio.com',
            projectId: 'authenticationprac',
            storageBucket: 'authenticationprac.appspot.com',
            messagingSenderId: '409600324634'
          })
    }


    render() {
        return (
        <View>
            <Header text={'Wild5'}/>
            <LoginForm />
        </View>
        )
  }
}
export default App