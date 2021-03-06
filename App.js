
import React from 'react';
import {  Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import SearchScreen from './Screens/SearchScreen';
import TransactionScreen from './Screens/BookTransactionScreen';

export default class App extends React.Component() {
  render(){
    return <AppContainer/>;
    
  }
}

const TabNavigator= createBottomTabNavigator(
  {
    Transaction:{screen:TransactionScreen},
    Search:{screen:SearchScreen}
  }
);
const AppContainer=createAppContainer(TabNavigator);
