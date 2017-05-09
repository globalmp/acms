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
    <title>404 Страница не найдена</title>

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900' rel='stylesheet' type='text/css'>

    <!-- Vendor styles -->
    <link rel="stylesheet" href="/tpl_files/vendor/fontawesome/css/font-awesome.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/animate.css/animate.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/bootstrap/css/bootstrap.css"/>

    <!-- App styles -->
    <link rel="stylesheet" href="/tpl_files/styles/pe-icons/pe-icon-7-stroke.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/pe-icons/helper.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/stroke-icons/style.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/style.css">
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
                    <i class="pe page-header-icon pe-7s-close-circle"></i>
                </div>
                <div class="header-title">
                    <h3>404</h3>
                    <small>
                        Раздел сайта не найден
                    </small>
                </div>
            </div>

            <div class="panel panel-filled">
                <div class="panel-body">
                    Извините страница не найдена!<br>Возможно страница была перемещена или удалена из системы, повторите попытку позже или обратитесь к администратору сайта.

                </div>
            </div>
            <div>
                <?= Html::a("На главную страницу", array('site/index'), array('class'=>'btn btn-accent')) ?>
            </div>

        </div>
    </section>
    <!-- End main content-->

</div>
<!-- End wrapper-->

<!-- Vendor scripts -->
<script src="/tpl_files/vendor/pacejs/pace.min.js"></script>
<script src="/tpl_files/vendor/jquery/dist/jquery.min.js"></script>
<script src="/tpl_files/vendor/bootstrap/js/bootstrap.min.js"></script>

<!-- App scripts -->
<script src="/tpl_files/scripts/luna.js"></script>
<?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>