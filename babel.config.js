module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          App: './src/App',
          components: './src/components',
          features: './src/features',
          hooks: './src/hooks',
          navigations: './src/navigations',
          screens: './src/screens',
          server: './server',
          
        },
      },
    ],
  ],
};
