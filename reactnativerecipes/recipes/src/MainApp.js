import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MainApp = () => {
    const name = '01 - Hey, this is my life';

    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>
        <Text style={styles.subtitle}>Playing:</Text> {name}
        </Text>
        </View>
        </View>
    );
};

export default MainApp;