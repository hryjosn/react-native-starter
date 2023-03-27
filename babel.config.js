module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
   plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '~/store': './src/store',
          },
        },
      ],
    ],
}
