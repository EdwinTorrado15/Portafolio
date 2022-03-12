<?php 

    //Llamando a los campos
    $nombre = (isset($_POST['nombre']));
    $emai = (isset($_POST['emai']));
    $proyecto = (isset($_POST['proyecto']));
    $mensaje = (isset($_POST['mensaje']));


    //Datos para el correo
    $destinatario = "edwintorrado@gmail.com";
    $asunto = "Contacto desde nuestra web";

    $carta = "De: $nombre \n";
    $carta .= "Correo: $emai \n";
    $carta .= "Nombre del proyecto: $proyecto \n";
    $carta .= "Descripcion del proyecto: $mensaje";

    //Enviando mensaje
    mail($destinatario,$asunto,$carta);
?>