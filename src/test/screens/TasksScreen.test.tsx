import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import TasksScreen from '../../screens/TasksScreen';

describe('TasksScreen', () => {
  it('renders the task list and allows adding a new task', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    // Check that initially there are no tasks
    expect(getByText('Agregar nuevo task')).toBeTruthy();

    // Open the modal
    fireEvent.press(getByText('Agregar nuevo task'));

    // Add a task
    fireEvent.changeText(getByPlaceholderText('Descripción'), 'Nueva Tarea');
    fireEvent.press(getByText('Agregar'));

    // Verify that the new task is displayed
    expect(getByText('Nueva Tarea')).toBeTruthy();
  });

  it('does not allow adding an empty task', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    // Open the modal
    fireEvent.press(getByText('Agregar nuevo task'));

    // Try to add an empty task
    fireEvent.changeText(getByPlaceholderText('Descripción'), '');
    fireEvent.press(getByText('Agregar'));

    // Ensure the modal is still open
    expect(getByPlaceholderText('Descripción')).toBeTruthy();
  });
});
