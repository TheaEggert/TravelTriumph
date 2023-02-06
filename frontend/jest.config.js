/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-css'
    },
    transformIgnorePatterns: [
        'node_modules/(?!axios)'
    ]
};

module.exports = config;