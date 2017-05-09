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
    <title><?= Html::encode($this->title) ?></title>

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900' rel='stylesheet' type='text/css'>


    <!-- Vendor styles -->
    <link rel="stylesheet" href="/tpl_files/vendor/fontawesome/css/font-awesome.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/animate.css/animate.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/bootstrap/css/bootstrap.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/toastr/toastr.min.css"/>
    
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


       <?= $content ?>


    </section>
    <!-- End main content-->

</div>
<!-- End wrapper-->

<!-- Vendor scripts -->
<script src="/tpl_files/vendor/pacejs/pace.min.js"></script>
<script src="/tpl_files/vendor/jquery/dist/jquery.min.js"></script>
<script src="/tpl_files/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="/tpl_files/vendor/toastr/toastr.min.js"></script>

<!-- App scripts -->
<script src="/tpl_files/scripts/luna.js"></script>


<?php if(Yii::$app->session->hasFlash('noUserName')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.error('Данный email-адрес уже используется в системе.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->request->get('okRegister', false)): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Отлично! Введите Ваши логин и пароль и пользуйтесь всеми благами системы.');
    });
</script>
<?php endif; ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>