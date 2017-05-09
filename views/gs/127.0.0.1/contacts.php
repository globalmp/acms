<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Images;
use app\models\Servers;
use app\models\Products;

$this->title = ((!@$model->meta_title)?$model->title:$model->meta_title);

$this->registerMetaTag(['name' => 'keywords', 'content' => $model->meta_keywords]);
$this->registerMetaTag(['name' => 'description', 'content' => $model->meta_description]);

$this->params['breadcrumbs'][] = $this->title;

$server_name = $_SERVER['SERVER_NAME'];

$current_url = (($model->alt)?$model->alt:$model->id);

?>


<div id="main">
<div class="wrap clear">
<div id="primary" class="site-content full-width">
<div id="content" role="main">
<article id="post-634" class="post-634 page type-page status-publish hentry">
<div class="entry-content">

<div class="site-contact" itemscope itemtype="http://schema.org/Contacts">

   
        
        
<div class="breadcrumbs page-path" xmlns:v="http://rdf.data-vocabulary.org/#">
<span typeof="v:Breadcrumb">
<a href="http://<?= $server_name;?>" rel="v:url" property="v:title">Главная</a>
</span> / 
<span typeof="v:Breadcrumb">
<a href="http://<?= $server_name;?>/category/<?= $current_url;?>" rel="v:url" property="v:title"><?= $model->title;?></a>
</span>
</div>








    <h1><?= $model->title; ?></h1>
	
	
								<div class="vc_row wpb_row vc_row-fluid">
									<div class="vc_col-sm-5 wpb_column vc_column_container">
										<div class="wpb_wrapper">
											<?= $model->full_story; ?>
										</div>
									</div>
									<div class="vc_col-sm-7 wpb_column vc_column_container">
										<div class="wpb_wrapper">
											<?= $model->short_story; ?>
										</div>
									</div>
								</div>
	
	
	
	
	</div>
	



</div>
</article>
</div>
</div>
</div>
</div>

<div style="clear:both;"></div>



