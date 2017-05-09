<?php

@session_start( 0 );

header("Content-type: application/json; charset=utf-8");

if( !@$_SESSION['__id'] ) exit;

$phpCodeDescript = fopen( dirname(__FILE__) . "/" . @$_GET['file'], "r" );
if( @$phpCodeDescript ){
    $code = '';
    while( $tmp = fread($phpCodeDescript,2048) ){
        $code = $code . $tmp;
    }
}
fclose( $phpCodeDescript );

echo json_encode(['code'=>$code,'file'=>@$_GET['file']]);

?>