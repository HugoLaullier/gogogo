import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './components/Home/Home';
import AddPlayers from './components/Players/AddPlayers';
import AddTeams from './components/Teams/AddTeams';
import Recap from './components/Recap/Recap';
import Bet from './components/Bet/Bet';
import Race from './components/Race/Race';

const Stack = createStackNavigator();
const navigatorOptions = {
  headerShown: false
};


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={navigatorOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddPlayers" component={AddPlayers} />
          <Stack.Screen name="AddTeams" component={AddTeams} />
          <Stack.Screen name="Recap" component={Recap} />
          <Stack.Screen name="Bet" component={Bet} />
          <Stack.Screen name="Race" component={Race} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:"#f3b060"
  }
});


