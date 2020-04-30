const {
  override,
  addBabelPlugin,
  addWebpackModuleRule,
} = require('customize-cra')

module.exports = override(
  addBabelPlugin(
    ['babel-plugin-relay', {
      artifactDirectory: './src/__generated__',
    }]
  ),
  addWebpackModuleRule({
    test: /\.graphql$/,
    use: 'raw-loader',
  }),
)
