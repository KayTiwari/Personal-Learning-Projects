import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { CreateStore } from 'redux'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        <View></View>
        </Provider>
    );
};

export default App;