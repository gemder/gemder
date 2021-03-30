<?php
$name = $_Post['fname'];
$name2 = $_Post['fname2'];
$email = $_Post['femail'];
$Objetivo = $_Post['fObjetivo'];
$Mensaje = $_Post['msg'];


$email_from = 'henrymrdesa@gmail.com';
$email_subject = " New email submition";

$email_body = "User Name: $name.\n".
              "User Name2: $name2.\n".
              "E-Mail: $email.\n".
              "Objetivo: $Objetivo.\n".
              "Mensaje: $Mensaje.\n";

$to = "gemderservice@gmail.com";
$headers = "Form: $email_from\r\n";
$headers .= "Reply-To: $email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("location: index.html");
            ?>

