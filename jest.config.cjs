// jest.config.js ou jest.config.cjs
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    }
};