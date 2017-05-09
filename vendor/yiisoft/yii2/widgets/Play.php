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

//use yii\base\View;

use yii\web\AssetBundle;

class Play extends Widget
{
    public $type;
    public $param;
    public $tpl;
    public $server;
    public $server_data;
    public $id;
    public $good_info;
    public $action;
    public $play;
    public $action_inner;
    public $id_inner;
    public $view__;
    public $data;
    public $message;

    public function init()
    {
        parent::init();
        $this->server = $_SERVER['SERVER_NAME'];
        Yii::$app->params['server'] = $this->server;
        $dir = dirname(__FILE__) . '/';
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();
        if( $this->server_data['layout'] == 'default' || $this->server_data['layout'] == '' ){
            $this->view__ = $this->server;
            Yii::$app->params['skin'] = "/views/gs/".$this->server;
        }else{
            $this->view__ = $this->server_data['layout'];
            Yii::$app->params['skin'] = "/views/gs/".$this->server_data['layout'];
        }
    }

    public function run()
    {
        if( @$this->play != '' )
            return Yii::$app->view->renderFile( 
                "@app/views/gs/" . $this->view__ . "/" . @$this->play . ".php", 
                ((is_array(@$this->data)==true)?@$this->data:array()) 
                );
        else return "";
    }
}

?>