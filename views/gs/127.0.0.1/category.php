<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use yii\widgets\LinkPager;
use yii\widgets\Blocks;

use app\models\Images;
use app\models\Servers;
use app\models\Products;


$page = @Yii::$app->request->get('page', false);
$this->title = (($page!=false)?"Страница " . $page . ". ":" ").((@$category->meta_title)?$category->meta_title:$category->title);
$this->params['breadcrumbs'][] = $category->title . (($page!=false)?" Страница " . $page:"");
?>



    




								
	<div id="main">
		<div class="wrap clear">
			<div class="site-content full-width" id="primary">
				<div id="content" role="main">
					<div class="breadcrumbs">
						<a href="/">Главная</a> <span class="sep">/</span> <span class="current"><?= $category->title; ?></span>
					</div>
					<article class="post-730 page type-page status-publish hentry" id="post-730">
						<div class="entry-content">
							<div class="vc_row wpb_row vc_row-fluid">
								<div class="vc_col-sm-12 wpb_column vc_column_container">
									<div class="wpb_wrapper">
										<div class="wpb_text_column wpb_content_element">
											<div class="wpb_wrapper">
												<h1><?= $category->title; ?></h1>

												<?= $category->text; ?>
											
											</div>
										</div>

									</div>
								</div>
							</div>

							
							
							
							
							
							
							
							<?php 
							
							/*
							echo Blocks::widget(['type'=>'categorys','param'=>[
								'id'=>0,
								'options' => [ 'class' => 's3-menu-allin s3-menu-allin-popup s3-menu-allin-default' ],
								'submenuTemplate' => "\n<ul class=\"level-2\">\n{items}\n</ul>\n",
								'activeCssClass'=>'hover_menu active',
								'itemLinkTemplate' => '
								<a href="#sites" data-toggle="collapse" aria-expanded="false">
									{label}<span class="sub-nav-icon"> <i class="stroke-arrow"></i></span>
								</a>
								',
								]]); 
							*/	
								?>
							
							<table>
							    <?php
									foreach( $models as $data ){


								    	$server_name = $_SERVER['SERVER_NAME'];
								    	$server = Servers::find()->where(['host'=>$server_name])->one();

								   $images = Images::find()->where(['route_id'=>$data->id,'route'=>'pages/update'])->orderBy(['position'=>SORT_ASC])->all();

								    	foreach( $images as $img )
								    		$images_array[] = $img->original;



										echo " 
										<tr class=\"dd0\" style='border-bottom: 1px solid #d5d5d5;'>
										<td style=''>

										<div class='row' style='padding-top:20px;padding-bottom:20px;'>

										<div class=\"col-sm-12\">

											<h3>
												<a href=\"/page/".((@$data->alt)?$data->alt:$data->id)."\">" . $data->title . "</a>
											</h3>

										</div>


										<div class=\"col-sm-3\">

											<img src='".$images_array[0]."' alt='" . $data->title . "'>

										</div>

										<div class=\"col-sm-5\">

											" . $data->short_story . "

										</div>

										<div class=\"col-sm-4\">
											<div class=\"product-order-box\">
												<h3>тел. <b>(812) 389-23-13</b></h3>
												<span> Пн-Пт, с 10 до 18 </span>
												<a href='#newton' class='callback btn secondary-btn callback-request'><span class='icon-phone'></span> Заказать обратный звонок</a>
											</div>

										</div>


										</div>

										</td>
										</tr>
										";
									}
								?>
														
							</table>
							
							
							<?php
								echo LinkPager::widget([
									'pagination' => $pages,
								]);
							?>
							
							
							
							
							
						</div><!-- .entry-content -->
					</article><!-- #post -->
				</div><!-- #content -->
			</div><!-- #primary -->
		</div><!-- #main .wrap -->
	</div>					
								
								
								
								
								
								
								
								


