module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-linear-gradient|react-native-reanimated|react-native-vector-icons|react-native-iphone-x-helper|react-native-extra-dimensions-android|react-native-animatable|@react-native-firebase/perf)/)',
  ],
  setupFiles: ['./jest.mock.js'],
  moduleNameMapper: {
    '.+\\.(style|png|jpg|ttf|)$': 'jest-transform-stub',
  },
};
