import React, {Component} from 'react';
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const background = require('../assets/landing.jpg')

class SignIn extends Component{
    state = {

    }


    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={background} style={styles.landingimage}>
                </ImageBackground>
            </View>
        )
    }
}
export default SignIn;

const styles = {
    landingimage: {
        height: height,
        width: width,
        flex: 1,
        resizeMode: 'cover'
    }
}
