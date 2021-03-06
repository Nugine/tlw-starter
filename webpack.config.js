const path = require('path');
const defaultConfig = require('@open-wc/building-webpack/default-config');

module.exports = defaultConfig({
    indexHTML: path.resolve(__dirname, './src/html/index.html'),
    indexJS: path.resolve(__dirname, './src/js/index.js'),
});