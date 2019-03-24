import {createStackNavigator, createDrawerNavigator, createAppContainer} from "react-navigation";
import React, {Component} from 'react';
import AppText from './components/presentational/appText/AppText';
import Sample from './components/containers/sampleContainer/SampleContainer';
import SideBar from "./baseComponents/Sidebar/SideBar";

/********************* Drawer Navigator ***************/
const allRoutesDrawerNavigator = {
    Home: { screen:  Sample},
    SecondScreen: { screen:  AppText}
};

const initialRoutesDrawerNavigator = {
    initialRouteName: "Home",
    contentOptions: {
        activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
};

const Drawer = createDrawerNavigator(allRoutesDrawerNavigator, initialRoutesDrawerNavigator);


/********************* Stack Navigator ***************/
const allRoutesStackNavigator = {
    Drawer: { screen: Drawer }
};

const initialRouteStackNavigator = {
    initialRouteName: 'Drawer',
    headerMode: 'none', //removing default header
};

const AppNavigator = createStackNavigator(allRoutesStackNavigator, initialRouteStackNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


