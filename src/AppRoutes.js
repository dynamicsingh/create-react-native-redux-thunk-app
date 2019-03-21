import {createStackNavigator, createAppContainer} from "react-navigation";
import React, {Component} from 'react';
import Home from './components/presentational/home/Home';
import AppText from './components/presentational/appText/AppText';
import Sample from './components/containers/sampleContainer/SampleContainer';

//navigator routes can be exported as objects
export const allRoutes = {
    Home: { screen:  Sample},
    SecondScreen: { screen:  AppText}
};
export const initialRoute = {
    initialRouteName: 'Home',
};
const stack = createStackNavigator(allRoutes, initialRoute);

export default createAppContainer(stack);


