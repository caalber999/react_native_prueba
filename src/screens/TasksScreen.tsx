import React, { useState } from 'react';
import { View, Button, FlatList, TextInput, Modal, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addTask } from '../store/tasksSlice';

const TasksScreen = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar nuevo task" onPress={() => setModalVisible(true)} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <TextInput
                  placeholder="Descripción"
                  value={newTask}
                  onChangeText={setNewTask}
                  style={styles.input}
                />
                <Button title="Agregar" onPress={handleAddTask} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    width: '80%', // Ancho del modal
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    borderWidth: 1,
    borderColor: 'black', // Color del borde
    borderRadius: 5,
    padding: 10,
    marginVertical: 5, // Espacio entre los elementos
  },
});

export default TasksScreen;
