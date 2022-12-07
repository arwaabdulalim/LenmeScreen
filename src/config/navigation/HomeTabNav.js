import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../themes/colors';
import Borrow from '../../screens/borrow/Borrow';
import List from '../../screens/List';
import Menu from '../../screens/Menu';
import Notifications from '../../screens/Notifications';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Borrow'}
        component={Borrow}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-variant"
              size={30}
              color={colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'List'}
        component={List}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="post-add" size={30} color={colors.light} />
          ),
        }}
      />
      <Tab.Screen
        name={'Menu'}
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={30}
              color={colors.light}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Notifications'}
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              color={colors.light}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
