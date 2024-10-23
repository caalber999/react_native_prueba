import React from 'react';
import { render, waitFor, screen, cleanup } from '@testing-library/react-native';
import ListadoScreen from '../../screens/ListadoScreen';

// Usamos temporizadores falsos
jest.useFakeTimers();

const mockFetchWithDelay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve([{ id: '1', name: 'Elemento 1', avatar: 'url1' }, { id: '2', name: 'Elemento 2', avatar: 'url2' }]),
      });
    }, 1000);
  });

global.fetch = jest.fn(mockFetchWithDelay) as jest.Mock;

// Limpieza después de cada prueba
afterEach(() => {
  cleanup();  // Limpia los componentes montados
  jest.runOnlyPendingTimers();  // Ejecuta solo los temporizadores pendientes
  jest.useRealTimers();  // Vuelve a usar temporizadores reales después de la prueba
});

describe('ListadoScreen', () => {
  it('renders loading and then the list of elements', async () => {
    render(<ListadoScreen />);

    // Verifica que el indicador de carga aparece
    await waitFor(() => {
      const loadingIndicator = screen.getByTestId('loading-indicator');
      expect(loadingIndicator).toBeTruthy();
    });

    // Avanza los temporizadores para simular el retraso
    jest.runAllTimers();

    // Verifica que los datos se carguen
    await waitFor(() => {
      expect(screen.getByText('Elemento 1')).toBeTruthy();
      expect(screen.getByText('Elemento 2')).toBeTruthy();
    });
  });
});
