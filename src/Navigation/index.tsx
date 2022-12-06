import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppStack, {AppStackParamsList} from './AppStack';
import Splash from '../Screens/Splash';

const {Navigator, Screen} = createStackNavigator();

export type RootStackParamsList = {
  Splash: undefined;
  AppStack: AppStackParamsList;
};

const RootNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={'Splash'}
        component={Splash}
        options={{headerShown: false}}
      />
      <Screen
        name={'AppStack'}
        component={AppStack}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default RootNavigator;
