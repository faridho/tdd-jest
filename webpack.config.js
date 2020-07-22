module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        open: true
    },
    mode: 'development',

}