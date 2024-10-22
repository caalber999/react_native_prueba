import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';

interface Element {
  id: number;
  name: string;
  avatar: string;
}

const ListadoScreen = () => {
  const [data, setData] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
      .then((response) => response.json())
      .then((data: Element[]) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row', // Alinea los elementos en fila
    alignItems: 'center', // Centra verticalmente
    marginBottom: 15, // Espacio entre elementos
    padding: 10,
    backgroundColor: 'white', // Color de fondo para cada elemento
    borderRadius: 8, // Bordes redondeados
    shadowColor: '#000', // Sombra para cada elemento
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
  },
  avatar: {
    width: 50, // Ancho del avatar
    height: 50, // Alto del avatar
    borderRadius: 25, // Hacer el avatar circular
    marginRight: 15, // Espacio a la derecha del avatar
  },
  name: {
    fontSize: 18, // Tamaño de fuente del nombre
  },
});

export default ListadoScreen;
