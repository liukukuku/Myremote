// const { styles } = require('./src/styles/theme')
const { 
  addWebpackAlias, 
  addLessLoader, 
  fixBabelImports, 
  override,
  addDecoratorsLegacy 
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // @ 修饰器
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // 支持 less sass stylus
    style: true,
  }),
  // 支持 antd 主题定制
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: styles,
  }),
  // 别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@@': path.resolve(__dirname, 'src/components'),
  })
)
