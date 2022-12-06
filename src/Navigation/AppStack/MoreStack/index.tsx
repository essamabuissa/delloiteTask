import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import More from '../../../Screens/App/More';

const {Navigator, Screen} = createStackNavigator();

export type MoreStackParamsList = {
  Splash: undefined;
};

const MoreStack = () => {
  return (
    <Navigator>
      <Screen name={'More'} component={More} options={{headerShown: false}} />
    </Navigator>
  );
};

export default MoreStack;
