<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title>Подписка на информационные рассылки</title>

    <link rel="manifest" href="https://<?= Yii::$app->params['server']; ?>/manifest.json">

    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900' rel='stylesheet' type='text/css'>

    <!-- Vendor styles -->
    <link rel="stylesheet" href="/tpl_files/vendor/fontawesome/css/font-awesome.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/animate.css/animate.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/bootstrap/css/bootstrap.css"/>

    <!-- App styles -->
    <link rel="stylesheet" href="/tpl_files/styles/pe-icons/pe-icon-7-stroke.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/pe-icons/helper.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/stroke-icons/style.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/style.css">
    
    <script src="/PUSH/push.js?<?= rand(1111111,9999999); ?>"></script>
    
</head>
<body class="blank">
<?php $this->beginBody() ?>
<!-- Wrapper-->
<div class="wrapper">


    <!-- Main content-->
    <section class="content">

        <div class="container-center md animated slideInDown">

            <div class="view-header">
                <div class="header-icon">
                    <i class="pe page-header-icon pe-7s-mail"></i>
                </div>
                <div class="header-title">
                    <h3>Подписка на ресурсы компании</h3>
                    <small>
                        Информационная система портала, подписка на актуальную информацию.
                    </small>
                </div>
            </div>

            <div class="panel panel-filled">
                <div class="panel-body">
                   <p> На этой странице вы может подписаться на информационные рассылки компании. Рассылки будут приходить согласно тематике сайта. Новости, скидки, акции и подарки – все это будет доставлено вам прямо на компьютер в виде всплывающего окна в браузере Chrome, Mozilla. Вы всегда сможете отписаться от рассылки в самом всплывающем окне.
</p><p>
<b>Мы гарантируем конфиденциальность всех ваших данных работая по протоколу HTTPS (SSL)</b></p>

                </div>
            </div>
            <div>
                <?= Html::a("На главную страницу", array('site/index'), array('class'=>'btn btn-default pull-right btn-xs')) ?>
                
                <button class="btn btn-success pull-left js-push-button" id="jspushbutton">
                  Подписаться!
                </button>
            </div>

        </div>
    </section>
    <!-- End main content-->

</div>
<!-- End wrapper-->

<!-- Vendor scripts -->

<script src="/tpl_files/vendor/jquery/dist/jquery.min.js"></script>
<script src="/tpl_files/vendor/bootstrap/js/bootstrap.min.js"></script>

<!-- App scripts -->
<script src="/tpl_files/scripts/luna.js"></script>
<?php $this->endBody() ?>
</body>

</html>