module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.ios.js',
          '.android.js',
          '.ios.ts',
          '.android.ts',
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        [
          'module-resolver',
          {
            root: ['./app'],
            extensions: [
              '.js',
              '.ts',
              '.tsx',
              '.ios.js',
              '.android.js',
              '.ios.ts',
              '.android.ts',
            ],
          },
        ],
        'transform-remove-console',
      ],
    },
  },
};
