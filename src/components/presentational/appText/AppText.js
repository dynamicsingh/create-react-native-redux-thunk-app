import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {Item, Input} from 'native-base';
import BaseHeader from './../../../baseComponents/Header/Header'

const appTextComponent = ({instructions}) => {
    return (
        <Fragment>
            <BaseHeader/>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native + Redux Starter Kit</Text>
                <Text style={{...styles.instructions, marginTop: 0}}>It uses React Native +  Redux + Redux Thunk</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Switch value={false} />
                <Item style={{marginTop:10}} rounded>
                    <Input placeholder='Rounded Textbox'/>
                </Item>
            </View>
        </Fragment>
    );
};
export default appTextComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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