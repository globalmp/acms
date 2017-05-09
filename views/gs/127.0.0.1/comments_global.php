<?php


header('Content-Type: text/html; charset=UTF-8');
 
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Servers;
use app\models\Categorys;
use app\models\Comments;
use app\models\Images;
use app\models\Menu;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
use yii\widgets\LinkPager;

     
?>

<?php $this->beginBody() ?>


<?php

$l=0;

foreach ( $comments as $comment ){
	if( $l > 2 ) goto a1;
	else $l++;
	echo "
	


	<article class='review-item'>
	    <div class='review-date'><i>".date("d-m-Y H:i",$comment->date)."</i></div>
	    <h4><b>".$comment->name."</b></h4>
	    <p>".((mb_strlen($comment->text)>150)?mb_substr($comment->text,0,150)."...":$comment->text)."</p>
	    <hr/>
	</article>

	";

}

a1:

?>

<a href="/otzivy">Вы клиент компании?</a>
















