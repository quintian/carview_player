import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return(
    <NavigationContainer>      
      <AppNavigator/>
    </NavigationContainer>
  ) ;
}