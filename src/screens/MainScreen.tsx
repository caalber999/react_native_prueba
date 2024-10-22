import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  MainScreen: undefined;
  TasksScreen: undefined;
  ListadoScreen: undefined;
};

const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Tasks" onPress={() => navigation.navigate('TasksScreen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Listado" onPress={() => navigation.navigate('ListadoScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
  },
  buttonContainer: {
    marginBottom: 20, // Espacio entre los botones
    width: '80%', // Ancho del botón para hacerlo más grande
  },
});

export default MainScreen;
