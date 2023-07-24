import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const ButtonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <ButtonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.tabPrimary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'camera-outline';
              break;
            case 'Tab2Screen':
              iconName = 'cellular-outline';
              break;
            case 'StackNavigator':
              iconName = 'eye-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <ButtonTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <ButtonTabAndroid.Screen name="Tab2Screen" component={Tab2Screen} />
      <ButtonTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </ButtonTabAndroid.Navigator>
  );
};

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.tabPrimary,
        tabBarStyle: {
          borderTopColor: colores.tabPrimary,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'camera-outline';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = ' ST';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <BottonTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'BottonTabIOS 1'}}
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'BottonTabIOS 2'}}
        component={Tab2Screen}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Navegación'}}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
};
