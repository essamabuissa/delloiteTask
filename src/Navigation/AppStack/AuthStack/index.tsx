import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../../../Screens/App/Auth/Register';

const {Navigator, Screen} = createStackNavigator();

export type AuthStackParamsList = {
  Splash: undefined;
};

const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        name={'Register'}
        component={Register}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default AuthStack;
