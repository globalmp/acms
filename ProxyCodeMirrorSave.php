<?php

@session_start( 0 );

header("Content-type: application/json; charset=utf-8");

if( !@$_SESSION['__id'] ) exit;

$phpCodeDescript = fopen( dirname(__FILE__) . "/" . @$_POST['file'], "w" );
fwrite( $phpCodeDescript, @$_POST['code'] );
fclose( $phpCodeDescript );
 
echo json_encode(['code'=>@$_POST['code'],'file'=>@$_POST['file']]);

?>