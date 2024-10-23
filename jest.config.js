module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!((jest-)?react-native|@react-native|react-native|react-navigation|@react-navigation|react-redux)/)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    collectCoverage: true, // Habilitar la recolección de cobertura
    coverageReporters: ['text', 'lcov'], // Formatos de informe
    collectCoverageFrom: [
      'src/**/*.js', // Archivos a incluir en el informe de cobertura
      '!src/**/*.test.js', // Excluir los archivos de prueba
      '!src/**/index.js', // Excluir los archivos index
    ],
  };
  