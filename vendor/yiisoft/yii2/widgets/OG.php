<?php

namespace yii\widgets;

use Yii;
use yii\base\Component;
use yii\base\ErrorHandler;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\base\Model;
use yii\web\JsExpression;
use yii\base\Widget;
use app\models\Servers;
use app\models\Categorys;
use app\models\Pages;
use app\models\MenuWidget;
use app\models\R;
use yii\data\Pagination;

class OG extends Widget
{

    public $params = '';
    public $server = '';
    public $server_data = '';

    public function init()
    {
        parent::init();
        $this->server = $_SERVER['SERVER_NAME'];
        Yii::$app->params['server'] = $this->server;
        $dir = dirname(__FILE__) . '/';
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();
    }

    public function run()
    {
      $this->params['type'] = 'website';
      foreach($this->params as $name=>$value)
        echo '<meta property="og:'.@$name.'" content="'.@$value.'"/>' . "\r\n";
    }

    public function set($name=false,$param=false)
    {
        if( $name == false ) return $this;
        $this->params[$name] = $param;
        return $this;
    }


}

?>