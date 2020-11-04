module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    moduleFileExtensions:['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    transformIgnorePatterns: ['node_modules/(?!(react-native'
        +'|react-navigation-tabs'
        +'|react-native-splash-screen'
        +'|react-native-screens'
        +'|react-native-reanimated'
        +'|react-navigation'
        + `)/)`
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
    testEnvironment: 'jsdom',
  };