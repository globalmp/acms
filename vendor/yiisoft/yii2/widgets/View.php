<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

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

class View extends Widget
{
    public $type;
    public $param;
    public $tpl;
    public $server;
    public $server_data;
    public $id;
    public $good_info;
    public $action;

    public $action_inner;
    public $id_inner;

    public $message;

    public function init()
    {
        parent::init();

        $this->server = $_SERVER['SERVER_NAME'];
        Yii::$app->params['server'] = $this->server;
        $dir = dirname(__FILE__) . '/';
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();
        $this->action_inner = @Yii::$app->controller->module->requestedAction->id;
        $this->id_inner = @Yii::$app->request->get('slug', false);

        ob_start();
    }

    public function run()
    {
        $content = ob_get_clean();
        if( @$this->action != '' && $this->action_inner == @$this->action && @$this->id_inner != "" && @$this->id_inner == @$this->id ){
            return $content;
        }elseif( @$this->action != '' && $this->action_inner == @$this->action ){
            return $content;
        }else return "";
    }
}

?>