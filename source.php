<?php

var_dump(date_timezone_get());

$time_ = time();

echo date("d-m-Y H:i:s",$time_)."\n";

date_default_timezone_set('Etc/GMT-2');
 
echo date("d-m-Y H:i:s",$time_)."\n";

var_dump(date('A')); // AM - PM
var_dump(date('O'));
var_dump(date('Z'));

print_r($_SESSION);

?>