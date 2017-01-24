<?php

$recepient = "nekit-1989@mail.ru";
$sitename = "sitename.com";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$messagePage = trim($_POST["message"]); 

$message = "

Hello!

Name: $name;
e-mail: $email;
Message: $messagePage;

";

$pagetitle = "Text title \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");