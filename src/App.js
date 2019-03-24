import React, {Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import AppRoutes from './AppRoutes';
import {StyleProvider} from 'native-base';

//splash screen
import SplashScreen from 'react-native-splash-screen';

//apply theme
import getTheme from './../native-base-theme/components';
import blackWhite from "../native-base-theme/variables/blackWhite";

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <StyleProvider style={getTheme(blackWhite)}>
                <Fragment>
                    <AppRoutes/>
                </Fragment>
            </StyleProvider>
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
