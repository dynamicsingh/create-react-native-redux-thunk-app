import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const appTextComponent = ({instructions}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native + Redux Starter Kit</Text>
            <Text style={{...styles.instructions, marginTop: 0}}>It uses React Native +  Redux + Redux Thunk</Text>
            <Text style={styles.instructions}>{instructions}</Text>
        </View>
    );
};
export default appTextComponent;

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
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 20
    },
});