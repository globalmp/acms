<?php

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

<div class="bootstrap">



<div style="clear:both;"></div>

<div style="padding:30px;padding-left:0px;">

<?php



foreach ( $comments as $comment ){
	echo "
	
	<blockquote> 
		<p> ".$comment->text." </p>  
		<footer><b>".$comment->name."</b>&nbsp;&nbsp;<i>".date("d-m-Y H:i",$comment->date)."</i>&nbsp;&nbsp;<a href=\"#form____\" onClick=\"$('#textID').val('".$comment->name.", ');$('#parentID').val('".$comment->id."');\">ответить</a></footer> 
	";
	
	$subcomments = Comments::find()->where(['parent_id'=>$comment->id])->orderBy(['date'=>SORT_ASC]);
	if( $subcomments->count() > 0 ){
		$subcomments = $subcomments->all();
		foreach ( $subcomments as $c ){
			echo "<div class=\"bg-warning\" style=\"padding:10px;margin-top:20px;\">
				<i>".$c->text."</i>
				
				<footer><b>".$c->name."</b>&nbsp;&nbsp;<i>".date("d-m-Y H:i",$c->date)."</i>&nbsp;&nbsp;<a href=\"#form____\" onClick=\"$('#textID').val('".$c->name.", ');$('#parentID').val('".$comment->id."');\">ответить</a></footer>

			</div>
			";
		}
	}
	echo "</blockquote>";
}

?>

</div>



<?php


if( @$pages->totalCount > 10 ){
?>
<div style="clear:both;"></div>

<div style="padding:30px;">
<div class="row">
<div class="col-sm-12">
<span><b>Навигация по страницам комментариев:&nbsp;&nbsp;</b></span>
</div>
<div class="col-sm-12">
<?php
	echo LinkPager::widget([
	    'pagination' => $pages,
	]);
?>
</div>
</div>
</div>
<?php
}
?>
<div style="clear:both;"></div>


<div style="padding:30px;" class="bg-warning">
<div class="row">
<div class="form-group col-lg-12">
<h2 id="form____">ОСТАВИТЬ СООБЩЕНИЕ НА СТРАНИЦЕ</h2>
</div>
</div>

    <?php $form = ActiveForm::begin([
        'id' => 'form-comment',
        'options' => [],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => [],
        ],
    ]); ?>

	<input type="hidden" name="Comments[row_id]" value="<?=$row_id;?>">
	<input type="hidden" name="Comments[action]" value="<?=$action;?>">
	<input type="hidden" name="Comments[parent_id]" value="0" id="parentID">
	<input type="hidden" name="Comments[server_id]" value="<?=$server['id'];?>">
	
	<div class="row">
    <div class="form-group col-lg-12">
        <?= $form->field($model, 'name')->textInput()->label('Ваше имя <small style="color:#cecece;">(обязательно)</small>'); ?>
    </div>
	</div>
	<div class="row">
	<div class="form-group col-lg-12">
        <?= $form->field($model, 'email')->textInput()->label('Ваш Email-адрес <small style="color:#cecece;">(обязательно)</small>'); ?>
    </div>
	</div> 
 
	<div class="row">
    <div class="form-group col-lg-12">
        <?php 
        echo $form->
            field($model, 'text')->
            textArea([
                'placeholder'=>'до 1000 знаков',
                'style'=>'width:100%;',
                'maxlength' => 1024, 
                'rows' => 5,
				'id' => 'textID', 				
                'cols' => 50])
            ->label('Ваш комментарий <small style="color:#cecece;">(обязательно)</small>'); 
        ?> 
    </div>
	</div> 
	<div class="row" style="margin-top:10px;">
    <div class="form-group col-lg-5">

	<script src='https://www.google.com/recaptcha/api.js'></script>
	 

	
	<?= \himiklab\yii2\recaptcha\ReCaptcha::widget([
    'name' => 'reCaptcha',
    'siteKey' => $server['recaptcha_site'],
    'widgetOptions' => ['class' => '']
]) ?>
</div> 
<div class="form-group col-lg-7">   
Перед тем как нажать кнопку "Добавить комментарий". Докажите что вы не "Робот", а действительно реальный человек!
Нажмите на кнопку "Я не робот".
</div>
           
	</div>  
		<div class="row">
    <div class="form-group col-lg-12" style="padding-top:30px;">
	
                    <?= Html::submitButton('Добавить комментарий', ['class' => '', 'disabled'=>'disabled', 'name' => 'add-button']) ?>
    </div>               
	</div> 

<?php ActiveForm::end(); ?>

</div>  


<div style="clear:both;"></div>









</div>