import React from 'react'
import { LogBox } from 'react-native';
import { RootStackScreen } from './src/configs';

LogBox.ignoreAllLogs();

const App = () => {
    return (
        <RootStackScreen />
    );
}

export default App;