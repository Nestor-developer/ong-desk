<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "faee";

    $enlace = mysql_connect($servidor,$usuario,$clave,$baseDeDatos);

    if(!$enlace){
        echo "error con la base de datos";
    }
?>