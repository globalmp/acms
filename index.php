<?php

error_reporting(0);

if(@preg_match("/www./i",$_SERVER['HTTP_HOST'])){
header("HTTP/1.1 301 Moved Permanently");
header("Location: http://" . str_replace( "www.", "", $_SERVER['HTTP_HOST'] ));
exit();
}

//header("Cache-Control: max-age=3600, must-revalidate");

// comment out the following two lines when deployed to production
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

require(__DIR__ . '/vendor/autoload.php');
require(__DIR__ . '/vendor/yiisoft/yii2/Yii.php');

$config = require(__DIR__ . '/config/web.php');

//$customer = $db->createCommand('SHOW TABLES')->execute();



require(__DIR__ . '/controllers/RController.php');
RController::start();

(new yii\web\Application($config))->run();
