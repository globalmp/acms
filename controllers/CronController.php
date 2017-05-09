<?php

//@set_time_limit(0);

namespace app\controllers;

use Yii;
use yii\db\ActiveRecord;
use yii\base\Model;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use Yandex\Metrica\Management\ManagementClient;
use Yandex\Metrica\Analytics\AnalyticsClient;
use Yandex\Metrica\Stat\StatClient;
use app\models\Servers;
use app\models\Statistic;
use yii\web\AssetBundle;
use yii\helpers\Html;
use yii\web\View;


class CronController extends Controller
{
	public function init()
	{}
	public function actions()
    {}
    public function actionMetrika(){
		$server_data = Servers::find()->where(' yandex_token != \'\' and yandex_counter != \'\' ')->orderBy(['update'=>SORT_ASC])->one();
			//foreach( $servers as $server_data ){
				
						$types = [\Yandex\Metrica\Analytics\MetricConst::GA_USERS,
						\Yandex\Metrica\Analytics\MetricConst::GA_NEW_USERS,
						\Yandex\Metrica\Analytics\MetricConst::GA_TIME_ON_PAGE,
						\Yandex\Metrica\Analytics\MetricConst::GA_PAGE_VIEWS];

						$dimensions = [\Yandex\Metrica\Analytics\DimensionsConst::GA_PAGE_PATH,
						\Yandex\Metrica\Analytics\DimensionsConst::GA_PAGE_TITLE,
						\Yandex\Metrica\Analytics\DimensionsConst::GA_CITY,
						\Yandex\Metrica\Analytics\DimensionsConst::GA_KEYWORD,
						\Yandex\Metrica\Analytics\DimensionsConst::GA_SOURCE,
						\Yandex\Metrica\Analytics\DimensionsConst::GA_SOCIAL_NETWORK];
						
						$data_ = [];
						echo date("Ymd")."\n";
						echo $server_data['host']."\n";
						foreach( $types as $name=>$type )
						foreach( $dimensions as $dimension ){
								try {
										$paramsObj = new \Yandex\Metrica\Analytics\Models\Params();
										$paramsObj
											->setMetrics($type)
											->setStartDate(date("Ymd"))
											->setEndDate(date("Ymd",time()))
											->setIds('ga:' . $server_data->yandex_counter)
											->setDimensions($dimension);
										$analyticsClient = new AnalyticsClient($server_data->yandex_token);
										$data = $analyticsClient->ga()->getGaData($paramsObj);
										print_r($data);
										foreach ($data->getRows() as $row) {
											$data_[$type][$dimension ][] = $row;
										}
										$u = $data->getTotalsForAllResults();
										$data_[$type]['total'] = current($u);
										//echo $u[current($u)];
										//exit; 

								} catch (\Exception $ex) {
									$errorMessage = $ex->getMessage();
									echo $errorMessage."\n";
									if ($errorMessage === 'PlatformNotAllowed') {
										$errorMessage .= '<p>Возможно, у приложения нет прав на доступ к ресурсу. Попробуйте '
											. '<a href="' . rtrim(str_replace($_SERVER['DOCUMENT_ROOT'], '', __DIR__), "/") . '/../OAuth/' . '">авторизироваться</a> и повторить.</p>';
									}
								}
								sleep(1);
						}
						

						$Statistic = Statistic::find()->where(['server_id'=>$server_data->id,'date'=>date("Ymd")])->one();
						if( $Statistic ) $Statistic->delete();
						unset( $Statistic );
						
						$Statistic = new Statistic;
						$Statistic->date = date("Ymd");
						$Statistic->server_id = $server_data->id;
						$Statistic->data = json_encode( $data_ );
						$Statistic->save();  
						unset( $Statistic );

			//}
			
				$server_data->update = time();
				$server_data->save();
			
        exit; 
    }
}
