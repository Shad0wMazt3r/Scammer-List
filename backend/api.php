<?php
$name = $_GET['name'];
$message = $_GET['message'];
$name = $name.replace("<","");
$name = $name.replace(">","");
$name = $name.replace(" ", "_")
$message = $message.replace("<","");
$message = $message.replace(">","");
$message = $message.replace(" ", "_")
$command = 'python3 main.py "'. $name. '"  "'. $message. '"';
exec($command);
?>
