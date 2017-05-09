<?php

$params = require(__DIR__ . '/params.php');

$baseUrl = str_replace('/web', '', (new \yii\web\Request)->getBaseUrl());

//$w = new \yii\web\Slava;

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'components' => [
        'reCaptcha' => [
            'name' => 'reCaptcha',
            'class' => 'himiklab\yii2\recaptcha\ReCaptcha',
            'siteKey' => '6LeGRBMUAAAAACe1qW5w7Pcc2ClMo09ZfEuvF3Lb',
            'secret' => '6LeGRBMUAAAAAMuVu6PVbiLtc4yW3LR5wHC2ZDbt',
        ],  
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'slavanadejdin',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'useFileTransport' => true,
        ],
        'authManager' => [
            'class' => 'yii\rbac\PhpManager',
            'defaultRoles' => ['admin', 'user', 'editor'], // Здесь нет роли "guest", т.к. эта роль виртуальная и не присутствует в модели UserExt
        ],
        'urlManager' => [
            'baseUrl' => $baseUrl,
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            //'dashboard' => 'site/home',
            'rules' => [
                '<controller:\w+>/view/<slug:[\w-]+>' => '<controller>/view',

                'admincp' => 'site/login',

                'search' => 'gs/search',
                'page' => 'gs/page',
                'manifest.json' => 'gs/manifest',
                'sitemap.xml' => 'gs/sitemap',
                'favicon.ico' => 'gs/favicon',
                'robots.txt' => 'gs/robots',
                'service-worker.js' => 'gs/serviceworker',
                'page/<slug:>' => 'gs/page',
                '.well-known/acme-challenge/<slug:>' => 'gs/sslvalidation',
                'tags/<slug:[\w-]+>' => 'gs/tags',
                'tags' => 'gs/tags',
                'error' => 'gs/error',
                'category' => 'gs/category',
                'category/<slug:[\w-]+>' => 'gs/category',

                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>/<id:\d+>/<param>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                '<controller:\w+>/cat/<slug:[\w-]+>' => '<controller>/cat',
                '/' => 'gs/home',
                '/<slug:[\w-/\\d]+>' => 'gs/selector',
            ],
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => require(__DIR__ . '/db.php'),
        /*
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        */
    ],
    'params' => $params,
];

//Yii::$app->params['vars'] = (new app\models\LoadVars);

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
		'allowedIPs' => ['127.0.0.1'],

    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
		'allowedIPs' => ['127.0.0.1'],
    ];
}

return $config;
