import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyTabs, {SettingsScreen} from './MyTabs';
import Profile from './Profile';
import MyStack from './MyTabs';
import { Counter } from './Counter';

function HomeScreen({navigation}) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Notification')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Button onPress={() => navigation.navigate('Profile')} title="Go to Stack Navigation" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{drawerLabel: 'Home'}}
        component={MyStack}
      />

      <Drawer.Screen name="Notification" component={NotificationsScreen} />
      <Drawer.Screen name="Counter" component={Counter} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  btmBar: {
    position: 'absolute',
    bottom: 5,
    padding: 7,
    borderRadius: 50,
    backgroundColor: 'black',
  },
});
