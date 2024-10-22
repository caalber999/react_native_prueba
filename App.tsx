import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import MainScreen from './src/screens/MainScreen';
import TasksScreen from './src/screens/TasksScreen';
import ListadoScreen from './src/screens/ListadoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="TasksScreen" component={TasksScreen} />
          <Stack.Screen name="ListadoScreen" component={ListadoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
