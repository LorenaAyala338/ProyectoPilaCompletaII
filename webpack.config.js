module.exports={
    //1.Especifico el archivo de entrada
    entry_: './client/index.js',
    //2.Especificar el archivo de salida
    output:{
        path:'/public', //3. Ruta asoluta de la salida
        filename: 'bundle.js' //4. Nomre del archivo de salida
    },
    devServer:{
        contentBase:'./public'
    }
}