//conexion a base de datos
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '33065',
    user: 'root',
    password: '',
    database: 'faee'
})

connection.connect(function(errr){
    if(errr){
        console.log(errr.code)
        console.log(errr.fatal)
    }
})

//cerrar la base de datos
connection.end(function(){

})