<?php
$name = $_GET['name'];
$message = $_GET['message'];
$name = str_replace("<","", $name);
$name = str_replace(">","", $name);
$name = str_replace(" ", "_", $name);
$name = str_replace(";", "",$name);
$message = str_replace("<","",$message);
$message = str_replace(">","",$message);
$message = str_replace(" ", "_",$message);
$message = str_replace(";", "", $message);
$message = str_replace("&&", "", $message);
$command = 'python3 main.py "'. $name. '"  "'. $message. '"';
echo shell_exec($command);
?>
