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

use yii\widgets\Blocks;

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

<div class="site-contact" itemscope itemtype="http://schema.org/Product">


<div class="breadcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#" style="padding-bottom:20px;">
<span typeof="v:Breadcrumb">
<a href="http://<?= $server_name;?>" rel="v:url" property="v:title">Главная</a>
</span> / 
<span typeof="v:Breadcrumb">
<a href="http://<?= $server_name;?>/page/<?= $current_url;?>" rel="v:url" property="v:title"><?= $model->title;?></a>
</span>
</div>


<script>
var hsOptions = {
	align:'center',
	transitions:['expand', 'crossfade'],
	outlineType:'rounded-white',
	fadeInOut:true,
	dimmingOpacity:0.5,
}
</script>
    <?php

    	if( $model->title ) echo "<h1 itemprop=\"name\">" . $model->title . "</h1>";
    	if( $model->short_story ){
    		//echo "<div itemprop=\"description \"><p>".$model->short_story."</p></div>";
    	}
?>














<div class="article__ row">
<?php


    	$server_name = $_SERVER['SERVER_NAME'];
    	$server = Servers::find()->where(['host'=>$server_name])->one();

    	$images = Images::find()->where(['route_id'=>$model->id,'route'=>'pages/update'])->orderBy(['position'=>SORT_ASC])->all();

    	foreach( $images as $img )
    		$images_array[] = $img->original;

    	if( $model->full_story ){

    		if( @$images_array[0] ):
    		?>
                                        <div class="col-sm-3">

                                            <img src="<?=$images_array[0]; ?>" alt="<?= $model->title; ?>">

                                        </div>

                                        <div class="col-sm-5">

                                            <?=$model->short_story?>

                                        </div>


                                        <div class="col-sm-4">
                                            <div class="product-order-box">
                                                <h3>тел. <b>(812) 389-23-13</b></h3>
                                                <span> Пн-Пт, с 10 до 18 </span>
                                                <a href='#newton' class='callback btn secondary-btn callback-request'><span class='icon-phone'></span> Заказать обратный звонок</a>
                                            </div>

                                        </div>


			<?php
			endif;
    		echo "<div class='col-sm-12'><div style='clear:both;'></div><hr/><div class=\"page-content\">" . $model->full_story . "</div>";

echo "
<h3>Работаем в районах и города ЛО:</h3>
<p><b>Районы Санкт-Петербурга:</b> Адмиралтейский, Василеостровский, Выборгский, Калининский, Кировский, Колпинский, Красногвардейский, Красносельский, Кронштадтский, Курортный, Московский, Невский, Петроградский, Петродворцовый, Приморский, Пушкинский, Фрунзенский, Центральный.
</p>
<p>
<b>Ленинградская область:</b> Санкт-Петербург, Гатчина, Выборг, Сосновый Бор, Всеволожск, Тихвин, Кириши, Кингисепп, Сертолово, Волхов, Тосно, Луга, Сланцы, Кировск, Отрадное, Пикалёво, Лодейное Поле, Коммунар, Никольское, Приозерск, Подпорожье, Бокситогорск, Светогорск, Сясьстрой, Шлиссельбург, Волосово, Ивангород, Новая Ладога, Каменногорск, Любань, Приморск, Высоцк.
</p></div>
";

    	}

    ?>



<div class='col-sm-12'>

<div itemscope itemtype="http://schema.org/Offer">
    <span itemprop="name"><?= $model->title; ?></span><span>, </span>
    <span itemprop="price">1 &#8381;</span> <span><small>(Цена по запросу)</small></span><span>, </span>
    <link itemprop="availability" href="http://schema.org/InStock"/>В наличии
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


<?php echo Blocks::widget(['type'=>'comments','tpl'=>'comments.php','param'=>$model->id,'table'=>'pages','action'=>'all']); ?>
