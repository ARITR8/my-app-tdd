module.exports = {
    testEnvironment: 'jsdom',
    "globals": {

        "IS_REACT_ACT_ENVIRONMENT": true

    },
    testPathIgnorePatterns: ['/node_modules/', '/build/'], // ignore these paths
    testMatch: [
        '**/test/**/*.(test|spec).js' // Match test files in the test directory and its subdirectories
    ],
};