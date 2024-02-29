import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.tsx';
import Discover from './screens/Discover.tsx';
import ItemScreen from './screens/ItemScreen.tsx';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
