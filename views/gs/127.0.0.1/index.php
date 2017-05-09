<?php


header('Content-Type: text/html; charset=UTF-8'); 

/* @var $this yii\web\View */

use app\models\Images;
use app\models\Servers;
use app\models\Pages;
use yii\widgets\Blocks;

$this->title = ((!@$model->meta_title)?$model->title:$model->meta_title);

$this->registerMetaTag(['name' => 'keywords', 'content' => $model->meta_keywords]);
$this->registerMetaTag(['name' => 'description', 'content' => $model->meta_description]);



$pages = Pages::find()->where(['category_id'=>'5'])->all();

 
 

?>


		
<div class="specials-slider">
    <div> <img src="<?= Yii::$app->params['skin']; ?>/images/slide-03.jpg?<?=rand(1111,9999);?>" alt=""></div>
    <div> <img src="<?= Yii::$app->params['skin']; ?>/images/slide-01.jpg?<?=rand(1111,9999);?>" alt=""></div>
    <div> <img src="<?= Yii::$app->params['skin']; ?>/images/slide-02.jpg?<?=rand(1111,9999);?>" alt=""></div>
    <div> <img src="<?= Yii::$app->params['skin']; ?>/images/slide-04.jpg?<?=rand(1111,9999);?>" alt=""></div>
</div>

   
			


			


	
<article class="intro-text">
<h1>Оптовый склад листогибов listogib-tut.ru: максимум информации-минимум цен!</h1>
<p>
	 Специализация оптового склада listogib-tut.ru - поставка листогибочных станков. У нас всегда в наличии продукция лидеров мирового рынка, представленная в России: листогибы, произведённые в РФ, Китае, Тайване, Польше, Франции, Италии, Германии и США. Эти марки хорошо известны профессионалам:
</p>
</article>

	
		
<section class="articles content-list">
  <h2>Последняя информация:</h2>

		  <article class="item">
	  		    	<a href="articles/segmentnyy_ruchnoy_listogib_decker_s_2150/"><img
	    		src="<?= Yii::$app->params['skin']; ?>/upload/iblock/5d5/5d5fef1d22f8d3e911b5e036276ed76f.jpg" alt="" class="small" /></a>
	    
	    <div class="description">
	      <h3><a href="articles/segmentnyy_ruchnoy_listogib_decker_s_2150/">Сегментный ручной листогиб Decker S-2150</a> </h3>
	      <p>DeckerS-2150 оснащен одной сегментной балкой - прижимной. Несмотря на простоту конструкции, это вполне функциональное устройство. С помощью DeckerS-2150 можно изготавливать коробчатые конструкции с загибом стенок только в одну сторону и  высотой бортов до 60 мм: лотки, поддоны, колпаки, части вентиляционной системы, световые рекламные короба и простые фасадные кассеты с открытым креплением.</p>	    </div>
	  </article>
		  <article class="item">
	  		    	<a href="articles/modelnyy_ryad_ruchnykh_listogibov_decker/"><img
	    		src="<?= Yii::$app->params['skin']; ?>/upload/iblock/7ec/7ec56638054cf93db4d25ede6197e03c.jpg" alt="" class="small" /></a>
	    
	    <div class="description">
	      <h3><a href="<?= Yii::$app->params['skin']; ?>/articles/modelnyy_ryad_ruchnykh_listogibov_decker/">Модельный ряд ручных листогибов Decker</a> </h3>
	      <p>Модельный ряд продукции под брендом Decker можно условно поделить на несколько групп ручных листогибов. В этих группах оборудование объединено по принципу работы и особенностям конструкции.</p>	    </div>
	  </article>
	
	<a href="articles/">Все статьи</a>
</section>
