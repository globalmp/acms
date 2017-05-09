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

class VarsDisplay extends Widget
{ 
    public $params = '';
	public $value = '';
	public $is_edit = true;

    public function init()
    {
        parent::init();
    }

    public function run()
    {
		return Yii::$app->view->renderFile( "@app/views/vars/" . ((@$params->tpl)?$params->tpl:$this->params->type), 
		[ 'params' => $this->params, 'value' => $this->value, 'is_edit' => $this->is_edit ]
		);
    }
}

?>