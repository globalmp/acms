<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;

$this->title = 'Login';
$this->params['breadcrumbs'][] = $this->title;
?>



<div class="container-center animated slideInDown">


            <div class="view-header">
                <div class="header-icon">
                    <i class="pe page-header-icon pe-7s-unlock"></i>
                </div>
                <div class="header-title">
                    <h3>Вход в систему</h3>
                    <small>
                        Пожалуйста, введите ваш логин и пароль
                    </small>
                </div>
            </div>

            <div class="panel panel-filled">
                <div class="panel-body">
    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => [],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => [],
        ],
    ]); ?>



        <?= $form->field($model, 'username')->input('email')->label('Email - адрес') ?>

        <?= $form->field($model, 'password')->passwordInput()->label('Ваш пароль') ?>

                    <?= $form->field($model, 'verifyCode')->widget(Captcha::className(), [
                        'class'=>'col-lg-12',
                        'template' => '
                        <div class="row">
                        <div class="col-lg-12">
                        <label for="signupform-password">
                        Введите пожалуйста код с картинки
                        </label>
                            <div class="row">
                                <div class="col-lg-4">
                                    {image}
                                </div>
                                <div class="col-lg-8">
                                    {input}
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        ',
                    ])->label(false); ?>

        <?= $form->field($model, 'rememberMe')->checkbox([
            'template' => "<div class=\"col-lg-12\">{input} {label}</div>\n<div class=\"col-lg-8\">{error}</div>",
        ])->label('Запомнить меня на этом сайте') ?>
<div style="clear:both;"></div>
                        <div>
                            <div>
                                <?= Html::submitButton('Войти', ['class' => 'btn btn-accent', 'name' => 'login-button']) ?>
                                <?= Html::a("Регистрация", array('site/signup'), array('class'=>'btn btn-default')) ?>
                            </div>

                        </div>


<?php ActiveForm::end(); ?>

                </div>
            </div>

        </div>


