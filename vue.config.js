module.exports = {
    publicPath: "//localhost:8081/",
    css: {
        extract: false
    },
    configureWebpack: {
        devtool: 'none', 
        output: {
            library: "singleVue", 
            libraryTarget: "window", 
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
    }
};
