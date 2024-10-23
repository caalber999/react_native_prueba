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
    console.log('Llamando a fetch...');
    fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
      .then((response) => response.json())
      .then((data: Element[]) => {
        setData(data); // Actualiza los datos
        setLoading(false); // Cambia el estado de carga
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" testID="loading-indicator" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text> {/* Renderiza los nombres */}
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
  },
});

export default ListadoScreen;
