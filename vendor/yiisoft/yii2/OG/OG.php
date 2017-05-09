<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */
//exit;
namespace yii\OG;

use Yii;
use yii\base\InvalidConfigException;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\widgets\InputWidget;


class OG
{

    public $params = '';

    public function init()
    {
        parent::init();

    }

    public function run()
    {
        
    }

    public function set($name=false,$param=false)
    {
        if( $name == false ) return $this;
        $this->params[$name] = $param;
        return $this;
    }

    public function display()
    {
      foreach($this->params as $name=>$value)
        echo '<meta property="og:'.@$name.'" content="'.@$value.'"/>';
    }


}
