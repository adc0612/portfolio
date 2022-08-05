const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  publicPath: '/<repository_name>',
  outputDir: 'docs',
});
