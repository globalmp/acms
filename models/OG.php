<?php



namespace app\models;

use Yii;

class OG
{

    public $params = '';

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

?>