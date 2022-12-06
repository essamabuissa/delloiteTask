import React, {Fragment} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import MoreStack from './MoreStack';
import {strings} from '../../Utils/Localization';

const {Navigator, Screen} = createBottomTabNavigator();

export type AppStackParamsList = {
  Register: undefined;
  Home: undefined;
  More: undefined;
};

const AppStack = () => {
  return (
    <Navigator>
      <Screen
        name={strings.register}
        component={AuthStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Fragment />,
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        }}
      />
      <Screen
        name={strings.home}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Fragment />,
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        }}
      />
      <Screen
        name={strings.more}
        component={MoreStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Fragment />,
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        }}
      />
    </Navigator>
  );
};

export default AppStack;
