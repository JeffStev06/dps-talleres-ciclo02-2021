import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExerciseOne from './components/exercise1/ExerciseOne'
import ExerciseTwo from './components/exercise2/ExerciseTwo'
import ExerciseThree from './components/exercise3/ExerciseThree'
import ExerciseFour from './components/exercise4/ExerciseFour'
import ExerciseFive from './components/exercise5/ExerciseFive'
const Tab = createBottomTabNavigator();

function Info() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight:'bold'}}>Desarrollado Por:</Text>
      <Text>José Daniel Martínez Ayala MA161916</Text>
      <Text>Jeffrey Steven Morán Martínez MM161923</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Ejercicio 1" 
          component={ExerciseOne} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="book-outline" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Ejercicio 2" 
          component={ExerciseTwo} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="book-outline" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Ejercicio 3" 
          component={ExerciseThree} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="book-outline" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Ejercicio 4" 
          component={ExerciseFour} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="book-outline" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Ejercicio 5" 
          component={ExerciseFive} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="book-outline" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Información" 
          component={Info} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="information-circle-outline" size={30} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
