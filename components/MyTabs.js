import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Profile from './Profile';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 5,
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={{color: '#fff'}}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='HomeTab' screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={MyTabs} />

      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home2') {
            iconName = focused ? 'home' : 'heart';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list' : 'list';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        
      })}>
      {/* <Tab.Screen name="ProfileNew" component={MyStack} /> */}
      <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
export default MyStack;
