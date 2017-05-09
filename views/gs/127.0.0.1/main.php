<?php


header('Content-Type: text/html; charset=UTF-8');

/* @var $this \yii\web\View */
/* @var $content string */
 
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\widgets\Menu;
use yii\widgets\Blocks;
use yii\widgets\Play;
use yii\widgets\View;
use yii\helpers\Url;
  
AppAsset::register($this);
?>
<?php $this->beginPage() ?>


<!DOCTYPE html>
	<!--[if IE 7]>
<html class="ie ie7 no-js" lang="ru-RU"
	itemscope 
	itemtype="http://schema.org/WebSite" 
	prefix="og: http://ogp.me/ns#" >
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8 no-js" lang="ru-RU"
	itemscope 
	itemtype="http://schema.org/WebSite" 
	prefix="og: http://ogp.me/ns#" >
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html class="no-js" lang="ru-RU"
	itemscope 
	itemtype="http://schema.org/WebSite" 
	prefix="og: http://ogp.me/ns#" >
 <head>

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>

<?php $this->head() ?>


    

<meta name="yandex-verification" content="63d4fbae5db27ed0" />
<meta name="google-site-verification" content="6SF0eNPiCFdxUhnLARmkVYT4lmufG70D7LMCsPpdou8" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="robots" content="index, follow" />

<link href="<?= Yii::$app->params['skin']; ?>/bitrix/cache/css/s1/custom/kernel_main/kernel_main.css?144679497739563" type="text/css"  rel="stylesheet" />
<link href="<?= Yii::$app->params['skin']; ?>/bitrix/cache/css/s1/custom/template_1f8678571e658c816582f54412a11862/template_1f8678571e658c816582f54412a11862.css" type="text/css"  data-template-style="true"  rel="stylesheet" />


<meta name="viewport" content="width=device-width, initial-scale=1.0">


<link rel="stylesheet" href="<?= Yii::$app->params['skin']; ?>/css/range-slider.css" media="screen">
<link rel="stylesheet" href="<?= Yii::$app->params['skin']; ?>/css/bitrix.css" media="screen">
<link rel="stylesheet" href="<?= Yii::$app->params['skin']; ?>/css/style.css?<?=rand(1111,9999);?>" media="screen">
<link rel="stylesheet" href="<?= Yii::$app->params['skin']; ?>/css/media.css" media="screen">





<!--[if IE]>
  <link href="<?= Yii::$app->params['skin']; ?>/css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
<![endif]-->

<link rel="icon" type="image/x-icon" href="<?= Yii::$app->params['skin']; ?>/local/templates/custom/favicon.ico" />


				<script type="text/javascript">if(!window.BX)window.BX={message:function(mess){if(typeof mess=='object') for(var i in mess) BX.message[i]=mess[i]; return true;}};</script>
<script type="text/javascript">(window.BX||top.BX).message({'JS_CORE_LOADING':'Загрузка...','JS_CORE_NO_DATA':'- Нет данных -','JS_CORE_WINDOW_CLOSE':'Закрыть','JS_CORE_WINDOW_EXPAND':'Развернуть','JS_CORE_WINDOW_NARROW':'Свернуть в окно','JS_CORE_WINDOW_SAVE':'Сохранить','JS_CORE_WINDOW_CANCEL':'Отменить','JS_CORE_H':'ч','JS_CORE_M':'м','JS_CORE_S':'с','JSADM_AI_HIDE_EXTRA':'Скрыть лишние','JSADM_AI_ALL_NOTIF':'Показать все','JSADM_AUTH_REQ':'Требуется авторизация!','JS_CORE_WINDOW_AUTH':'Войти','JS_CORE_IMAGE_FULL':'Полный размер'});</script>
<script type="text/javascript">(window.BX||top.BX).message({'LANGUAGE_ID':'ru','FORMAT_DATE':'DD.MM.YYYY','FORMAT_DATETIME':'DD.MM.YYYY HH:MI:SS','COOKIE_PREFIX':'BITRIX_SM','SERVER_TZ_OFFSET':'10800','SITE_ID':'s1','USER_ID':'','SERVER_TIME':'1489163273','USER_TZ_OFFSET':'0','USER_TZ_AUTO':'Y','bitrix_sessid':'cf4f124490d54a3e5b796a6666c3cf0e'});</script>


<script type="text/javascript" src="<?= Yii::$app->params['skin']; ?>//bitrix/cache/js/s1/custom/kernel_main/kernel_main.js?1446798072246063"></script>
<script type="text/javascript" src="<?= Yii::$app->params['skin']; ?>//bitrix/js/main/cphttprequest.min.js?14345171203623"></script>
<script type="text/javascript" src="<?= Yii::$app->params['skin']; ?>//bitrix/cache/js/s1/custom/kernel_currency/kernel_currency.js?14467949772669"></script>
<script type="text/javascript">BX.setJSList(['<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/core.js?144195617569133','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/core_fx.js?14345171209592','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/core_popup.js?143451712228778','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/core_ajax.js?143451712320575','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/core_window.js?143451712374831','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/json/json2.min.js?14148671013467','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/core_ls.js?14345171237365','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/session.js?14345171202511','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/utils.js?143451712019858','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/rating_like.js?14345171207144','<?= Yii::$app->params['skin']; ?>/bitrix/js/currency/core_currency.js?14195709672414','<?= Yii::$app->params['skin']; ?>/local/templates/custom/components/bitrix/catalog/shopcatalog/bitrix/catalog.element/.default/script.js?142977537771670','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/iblock.vote/templates/stars/script.js?14148671383018','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/catalog.comments/templates/.default/script.js?14297874235409','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/catalog.tabs/templates/.default/script.js?14152709612101','<?= Yii::$app->params['skin']; ?>/bower_components/jquery/dist/jquery.min.js?143141355484380','<?= Yii::$app->params['skin']; ?>/js/slick/slick.min.js?143141357436637','<?= Yii::$app->params['skin']; ?>/js/SlickNav/jquery.slicknav.min.js?14314135756606','<?= Yii::$app->params['skin']; ?>/bower_components/fancybox/source/jquery.fancybox.pack.js?143141355323135','<?= Yii::$app->params['skin']; ?>/bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js?14314135584324','<?= Yii::$app->params['skin']; ?>/bower_components/purl/purl.js?14314135508771','<?= Yii::$app->params['skin']; ?>/bower_components/jquery.cookie-min/jquery.cookie.js?14314135483140','<?= Yii::$app->params['skin']; ?>/js/jquery.downCount.js?14374670053593','<?= Yii::$app->params['skin']; ?>/js/bootstrap-slider.js?143141357411246','<?= Yii::$app->params['skin']; ?>/js/init.js?14486314733054','<?= Yii::$app->params['skin']; ?>/js/cart.js?14383478881896','<?= Yii::$app->params['skin']; ?>/js/filter.js?14343653354576']); </script>
<script type="text/javascript">BX.setCSSList(['<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/css/core.css?14345171202854','<?= Yii::$app->params['skin']; ?>/bitrix/js/main/core/css/core_popup.css?144195614334473','<?= Yii::$app->params['skin']; ?>/local/templates/custom/components/bitrix/catalog/shopcatalog/style.css?1429775367697','<?= Yii::$app->params['skin']; ?>/local/templates/custom/components/bitrix/catalog/shopcatalog/bitrix/catalog.element/.default/style.css?142977537732567','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/iblock.vote/templates/stars/style.css?14148671381033','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/catalog.comments/templates/.default/style.css?14152710392651','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/catalog.tabs/templates/.default/style.css?14419561511463','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/blog/templates/.default/style.css?141560184533012','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/blog/templates/.default/themes/green/style.css?14148671151140','<?= Yii::$app->params['skin']; ?>/bitrix/components/bitrix/catalog.comments/templates/.default/themes/blue/style.css?141527096224','<?= Yii::$app->params['skin']; ?>/local/templates/custom/components/bitrix/catalog/shopcatalog/bitrix/catalog.element/.default/themes/blue/style.css?1429775379591','<?= Yii::$app->params['skin']; ?>/js/slick/slick.css?14314135741739','<?= Yii::$app->params['skin']; ?>/js/slick/slick-theme.css?14314135743195','<?= Yii::$app->params['skin']; ?>/js/SlickNav/slicknav.css?14314135753289','<?= Yii::$app->params['skin']; ?>/bower_components/fancybox/source/jquery.fancybox.css?14364400434892','<?= Yii::$app->params['skin']; ?>/local/templates/custom/components/bitrix/menu/catalog_native/style.css?142977541910949','<?= Yii::$app->params['skin']; ?>/local/templates/custom/template_styles.css?142978507421']); </script>
<script type="text/javascript">var ajaxMessages = {wait:"Загрузка..."}</script>

 

		<script type="text/javascript" src="<?= Yii::$app->params['skin']; ?>/bitrix/cache/js/s1/custom/template_70efe19d8d6373e30ba692a13ef226bc/template_70efe19d8d6373e30ba692a13ef226bc.js?1448631503194414"></script>
<script type="text/javascript" src="<?= Yii::$app->params['skin']; ?>/bitrix/cache/js/s1/custom/page_f733259846484d5bb19aaed9cca80eee/page_f733259846484d5bb19aaed9cca80eee.js?144679497783702"></script>


<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	</head>
	<body>

<script type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=z4pN3qFU9*hHnYMcueqghiqtwmneIUN34TySOc1EXrKTgJLP4ETIqwikOWUJUhtXT9kqES­yMl8T04iBzOITRgVD9VlJ3GZIeEsRZ9i1wHSHp9lPqB8rmtSVSM6q7wbP3S1­ZuhzD5ckdGPrLXJnmjps9QaSx213AZUen/euaMsBM-';</script>



	
<div id="panel"></div>

<header>
  <div class="wrapper">

		
<div class="logo">
	<a class="logo-link" href=""> <img src="<?= Yii::$app->params['skin']; ?>/images/logo.png" alt=""></a>
</div>

<div class="header-slogan">
Торгово-промышленная компания:<br>
Строительные материалы и спец. техника.
 </div>
		
<address class="head-contacts">
  <span>Работаем по всему СЗФО:</span>
  <div class="header-phones">
    <span class="phone-number">(812) 389-23-13</span>
<a href="#newton" class="callback btn secondary-btn callback-request"><span class="icon-phone"></span> Заказать обратный звонок</a>
  </div>
</address>


		
<nav class="head-nav">
  Россия, г. Санкт-Петербург<br>
  Ленинский пр-т 114<br>
  Наши <a href="/sklady" style="display:inline-block;padding:0px;margin-bottom:0px;">склады</a>
  <hr style="margin-bottom:7px;margin-top:7px;">
  Работаем: Пн-Пт с 9 до 18
</nav>

		


  </div>
</header>



<div class="wrapper">
<nav class="navigation navbar navbar-default" role="navigation">


		<div class="navbar-header mm">
			<a href="/" class="navbar-brand hidden-sm hidden-lg hidden-md">
				<div class="logo-text"><b>ПРОМ</b>СЕРВИС</div>
			</a>
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
				<span class="sr-only">Меню</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>


  <div class="collapse navbar-collapse" id="main-nav">


  
								<?php echo Blocks::widget(['type'=>'menu','param'=>[
								'id'=>6,
								'options' => [ 'class' => 'nav navbar-nav' ],
								'submenuTemplate' => "\n<ul id=\"menu\">\n{items}\n</ul>\n",
								'activeCssClass'=>'active',
								'itemLinkTemplate' => '
								<a href="#sites" data-toggle="collapse" aria-expanded="false">
									{label}<span class="sub-nav-icon"> <i class="stroke-arrow"></i></span>
								</a>
								',
								]]); ?>  
  

  </div>
</nav>
</div>




<div class="container wrapper">

	<div class="main-content">

		



<?=$content;?>












		
  </div>

	<aside class="left-sidebar">

	  

<nav class="catalog-nav">
  <h3> <a href="catalog/">Случайная продукция:</a> </h3>

  <ul>
				<li class="top-category-01 "><a
				href="catalog/segmentnye_listogiby/">Автомобильная техника</a>

					</li>

				
			</ul>

</nav>


		<div id="products-filter-block-dest"></div>

		
	  


	  



	  
<section class="review-block">
  <h3> Отзывы клиентов </h3>

<?php echo Blocks::widget(['type'=>'comments','tpl'=>'comments_global.php','param'=>3573,'table'=>'pages','action'=>'all']); ?>

	

</section>


	</aside>

</div>

<footer class="wrapper">
	<address class="footer-contacts" style="padding:20px;">
  © «ПромСервис», 2017. Нержавеющая сталь, пиломатериалы и Железобетонные изделия с доставкой по России. Специализированная техника без посредников. Работаем по всему СЗФО: (812) 389-23-13
</address>
  
	<div class="counters">
		
<!-- counters -->
	</div>


<nav class="footer-nav">




								<?php echo Blocks::widget(['type'=>'menu','param'=>[
								'id'=>9,
								'options' => [ 'class' => 'footer-nav' ],
								'submenuTemplate' => "\n<ul id=\"menu\">\n{items}\n</ul>\n",
								'activeCssClass'=>'active',
								'itemLinkTemplate' => '
								<a href="#sites" data-toggle="collapse" aria-expanded="false">
									{label}<span class="sub-nav-icon"> <i class="stroke-arrow"></i></span>
								</a>
								',
								]]); ?> 



</nav>

</footer>







		
					<div style="display:none;">
	<div id="callbackPopup">
		<form name="SIMPLE_FORM_1" action="" method="POST" enctype="multipart/form-data"><input type="hidden" name="sessid" id="sessid" value="7678f35be620e6d2e5063e6e404eed5d" /><input type="hidden" name="WEB_FORM_ID" value="1" />		<div id="callbackPopup1" class="form-inline" role="form">

			
			
			
			<div class="form-header"> Возникли вопросы? Заказажите у нас обратный звонок: </div>
			
				<div class="form-group">
				</div>

				
					<div class="form-group">
												
												<input type="tel" name="form_text_1" class="form-control" id="form-callback-phone" placeholder="+7 (___) ___-____" required>
						
						
											</div>

				
					<div class="form-group">
												
						
												<input type="text" name="form_text_2" class="form-control" id="form-callback-name" placeholder="Ваше имя" required>
						
											</div>

				
				<button name="web_form_submit" type="submit" class="btn btn-primary btn-callback-request">Заказать</button>
				<input name="web_form_apply" value="Y" type="hidden">

			
		</div>
		</form>	</div>
</div>


	<script>
	$(document).ready(function(){
		$(".byclick a").each(function() {
			$(this).attr('href','/?formclick=1&referer=dfa436e9cf51af2d69c1ee3863ecc622&pr_id='+$(this).attr("data-id"));
		});
	});
	
		$('.byclick a').fancybox({
		'type': 'iframe',
		'width': 600,
		'height': 250,
		});
	</script>
	


  <?php 
$this->endBody() 
?>

</body>
</html>

<?php $this->endPage() ?>