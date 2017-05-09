<?php

defined('YII_DEBUG') or define('YII_DEBUG', false);
defined('YII_ENV') or define('YII_ENV', 'dev');

require(__DIR__ . '/../vendor/autoload.php');
require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

$config = require(__DIR__ . '/../config/web.php');

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use Yandex\Metrica\Management\ManagementClient;
use Yandex\Metrica\Analytics\AnalyticsClient;
use Yandex\Metrica\Stat\StatClient;
use app\models\Servers;
use yii\web\AssetBundle;
use yii\helpers\Html;
use yii\web\View;

		$server_data = Servers::find()->where(['id'=>2])->one();
		var_dump($server_data);
		echo "ok";
		/*
		$managementClient = new ManagementClient($server_data['yandex_token']);
		
		            try {
						
						$paramsObj = new \Yandex\Metrica\Analytics\Models\Params();
						$paramsObj
							->setMetrics(\Yandex\Metrica\Analytics\MetricConst::GA_USERS)
							->setStartDate(date("Ymd"))
							->setEndDate(date("Ymd"))
							->setIds('ga:' . $server_data['yandex_counter'])
							->setDimensions(\Yandex\Metrica\Analytics\DimensionsConst::GA_PAGE_PATH );
						$analyticsClient = new AnalyticsClient($server_data['yandex_token']);
						$data = $analyticsClient->ga()->getGaData($paramsObj);
						print_R($data);
						
					} catch (\Exception $ex) {
						$errorMessage = $ex->getMessage();
						if ($errorMessage === 'PlatformNotAllowed') {
							$errorMessage .= '<p>Возможно, у приложения нет прав на доступ к ресурсу. Попробуйте '
								. '<a href="' . rtrim(str_replace($_SERVER['DOCUMENT_ROOT'], '', __DIR__), "/") . '/../OAuth/' . '">авторизироваться</a> и повторить.</p>';
						}
					}
		*/
?>
