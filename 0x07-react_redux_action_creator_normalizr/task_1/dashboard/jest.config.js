module.exports = {
  moduleFileExtensions: [ '.*', '.js', '.jsx', 'js' ],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Test file patterns
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // ... Existing rules...
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '/home/evalase/alx-react//task_1/dashboard/__mocks__/fileMock.js',  // New line
    '\\.(css|less)$': '/home/evalase/alx-react/0x07-react_redux_action_creator_normalizr/task_1/dashboard/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['/home/evalase/alx-react/0x07-react_redux_action_creator_normalizr/task_1/dashboard/config/setupTests.js'],
  '^enzyme$': '/home/evalase/alx-react/0x07-react_redux_action_creator_normalizr/task_1/dashboard/node_modules/enzyme', // Map 'enzyme' to its actual path
  };