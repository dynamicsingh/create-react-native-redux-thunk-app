import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import AppRoutes from './AppRoutes';

//splash screen
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <AppRoutes/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
