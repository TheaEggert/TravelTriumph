/** @type {import('jest').Config} */
const config = {
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    transformIgnorePatterns: [
        'node_modules/(?!' + 
            [
                'node-fetch',
                'fetch-blob',
                'data-uri-to-buffer',
                'jest-runtime',
                'formdata-polyfill'
            ].join('|') +
        ')',
    ]
};

module.exports = config;