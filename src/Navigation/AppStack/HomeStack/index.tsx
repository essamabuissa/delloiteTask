import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../../../Screens/Splash';
import Home from '../../../Screens/App/Home';

const {Navigator, Screen} = createStackNavigator();

export type HomeStackParamsList = {
  Splash: undefined;
};

const HomeStack = () => {
  return (
    <Navigator>
      <Screen name={'Splash'} component={Home} options={{headerShown: false}} />
    </Navigator>
  );
};

export default HomeStack;
