<?php

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Users;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;


$this->title = 'Добавить';
$this->params['breadcrumbs'][] = $this->title;
?>



<div class="row">
                <div class="col-lg-12">
                    <div class="view-header">
                        <div class="header-icon">
                            <i class="pe page-header-icon pe-7s-note2"></i>
                        </div>
                        <div class="header-title">
                        <div class="pull-right">
	<?= Html::a('Ко всем клиентам',['clients/index'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
</div>
                            <h3>Добавление нового клиента</h3>
                            <small>
                                Вы можете добавить нового клиента в базу, заполнив форму данных ниже. Будьте внимательный при заполнении данных.
                            </small>



                        </div>
                    </div>
                    <hr>
                </div>
            </div>

                <div class="row">


    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => [],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => []
        ],
    ]); ?>

                <div class="col-md-12">
                    <div class="panel panel-filled">

                        <div class="panel-body">

                        	<div class="row">

	                            <div class="form-group col-lg-3">
	                                <?= $form->field($model, 'title')->textInput(['placeholder'=>'ООО, Строительная компания'])->label('Название организации'); ?>
	                            </div>

                                <div class="form-group col-lg-3">
                                    <?= $form->field($model, 'name')->textInput(['placeholder'=>'Игорь Иванов'])->label('Имя контакта'); ?>
                                </div>

                                <div class="form-group col-lg-3">
                                    <?= $form->field($model, 'phone')->input('phone')->label('Телефон контакта'); ?>
                                </div>

                                <div class="form-group col-lg-3">
                                    <?= $form->field($model, 'email')->input('email')->label('Эл. почта контакта'); ?>
                                </div>


<div class="form-group col-lg-4">
 <?php echo $form->field($model, 'adress')->textArea(['placeholder'=>'02002 Киев, ул. Строителей 50','maxlength' => 512, 'rows' => 5, 'cols' => 50])->label('Адрес клиента'); ?>
</div>

<div class="form-group col-lg-4">
 <?php echo $form->field($model, 'descr')->textArea(['placeholder'=>'Дополнительные контакты, ответственные и полезная информация','maxlength' => 512, 'rows' => 5, 'cols' => 50])->label('Описание нового клиента'); ?>
</div>

<div class="form-group col-lg-4">
 <?php echo $form->field($model, 'keywords')->textArea(['placeholder'=>'Сроительство, частные дома','maxlength' => 512, 'rows' => 5, 'cols' => 50])->label('Виды деятельности'); ?>
</div>

</div><div class="row margin-bottom">


<div class="form-group col-lg-3">
<label>Ответственный за клиента</label>
<?php
    if( $model->owner_id <= 0 )
        $model->owner_id = Yii::$app->user->getId();
?>
<?= Html::activeDropDownList($model, 'owner_id',
      ArrayHelper::map(Users::find()->where(['state'=>'1'])->all(), 'id', 'name'), ['class'=>'select2']) ?>
</div>


<div class="form-group col-lg-3">
<label>Дата добавления клиента</label>
<?php 

if( $model->created > 0 )
$val = date( "d-m-Y H:i", $model->created );
else $val = date( "d-m-Y H:i" );

echo Datetimepicker::widget([
    'model' => $model,
    'attribute' => 'created',
    'options' => [
        'lang' => 'ru',
        //'theme' => 'dark',
        'value' => $val,
        'placeholder' => 'Выберите дату...',
        'format' => 'd-m-Y h:i',
    ]
]);
?>
 </div>


<div class="form-group col-lg-3">
<label>Состояние клиента</label>
<?= Html::activeDropDownList($model, 'state',
      ArrayHelper::map(Dropdowns::find()->where(['type'=>'client_state'])->all(), 'id', 'name'), ['class'=>'form-control']) ?>
</div>




</div>

<?= Html::submitButton('Добавить клиента', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

                        </div>
                    </div>

                </div>

<?php ActiveForm::end(); ?>

                
            </div>