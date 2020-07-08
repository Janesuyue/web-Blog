module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Blog',
            // chunks: ['chunk-vendorw', 'chunk-common', 'index']
        }
    },
    lintOnSave: true,
    productionSourceMap: true,
    css: {
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    devServer: { // 环境配置
        host: 'localhost',
        port: 80,
        https: false,
        hotOnly: false,
        open: true,
        // proxy: {}
    },
    chainWebpack: config => { // 热更新
        config.resolve.symlinks(true)
        config.module.rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
        })
    },
    pluginOptions: { // 第三方插件配置

    }
}
