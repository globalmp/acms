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

<div class="container-center lg animated slideInDown">

    

    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => [],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => []
        ],
    ]); ?>







            <div class="view-header">
                <div class="header-icon">
                    <i class="pe page-header-icon pe-7s-add-user"></i>
                </div>
                <div class="header-title">
                    <h3>Регистрация на сервере</h3>
                    <small>
                        Пожалуйста заполните форму ниже, не оставляйте пустых полей
                    </small>
                </div>
            </div>

            <div class="panel panel-filled">
                <div class="panel-body">
                    <p>

                    </p>
                    <form action="index.html" id="loginForm" novalidate>
                        <div class="row">
                            
                            <div class="form-group col-lg-6">
                                <?= $form->field($model, 'username')->input('email')->label('Email - пользователя'); ?>
                            </div>
                            <div class="form-group col-lg-6">
                                <?= $form->field($model, 'name')->textInput()->label('Реальное имя пользователя'); ?>
                            </div>
                            <div class="form-group col-lg-6">
                                <?= $form->field($model, 'password')->passwordInput()->label('Пароль для пользователя'); ?>
                            </div>
                            <div class="form-group col-lg-6">
                                <?= $form->field($model, 'password2')->passwordInput()->label('Re-Пароль для пользователя'); ?>
                            </div>
                        </div>

                    <?= $form->field($model, 'verifyCode')->widget(Captcha::className(), [
                        'class'=>'col-lg-6',
                        'template' => '
                        <div class="row">
                        <div class="col-lg-6">
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
                        <div style="clear:both;"></div>
                        ',
                    ])->label(false); ?>


                        <div>
                            <?= Html::submitButton('Регистрация', ['class' => 'btn btn-accent', 'name' => 'login-button']) ?>
                            <?= Html::a("Войти", array('site/login'), array('class'=>'btn btn-default')) ?>
                        </div>
                    </form>
                </div>
            </div>

        










    <?php ActiveForm::end(); ?>
</div>
</div>



