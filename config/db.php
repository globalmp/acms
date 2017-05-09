<?php

return [
    'class' => 'yii\db\Connection', //yii\db\Connection
    'dsn' => 'mysql:host=127.0.0.1;dbname=acrm',
    'username' => 'root',
    'password' => 'vertrigo',
    'charset' => 'utf8',
    'emulatePrepare'=>true,  // необходимо для некоторых версий инсталляций MySQL
];
