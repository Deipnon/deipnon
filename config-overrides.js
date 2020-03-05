const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: {
     '@layout-sider-background': '#343a40',
     '@menu-dark-bg': '#343a40',
     '@layout-body-background': '#f5f5f5'
   }
 }),
);