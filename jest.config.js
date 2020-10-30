module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js[x]?$': 'babel-jest',
    '^.+\\.ts[x]?$': 'ts-jest'
  },
};
