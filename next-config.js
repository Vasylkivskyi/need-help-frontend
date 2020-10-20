// const path = require('path');
// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');

// module.exports = withCSS(withSass({
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   webpack: (config) => {
//     config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
//     config.resolve.alias.Utils = path.resolve(__dirname, 'src/utils/');
//     config.resolve.alias.Constants = path.resolve(__dirname, 'src/constants/');
//     config.resolve.alias.ReduxModules = path.resolve(__dirname, 'src/redux_modules');
//     config.resolve.alias.styles = path.resolve(__dirname, 'styles/');
//     return config;
//   },
// }));
const path = require('path');
const withSass = require('@zeit/next-sass');
module.exports = {}
