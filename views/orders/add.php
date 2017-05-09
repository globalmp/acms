<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;

$this->title = 'Заказы';
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
	<?= Html::a('Ко всем заказам',['orders/index'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
</div>
                            <h3>Добавление нового заказа</h3>
                            <small>
                                Вы можете добавить новый заказ в базе, заполнив форму данных ниже. Будьте внимательный при заполнении данных.
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

	                            <div class="form-group col-lg-6">
	                                <?= $form->field($model, 'title')->textInput()->label('Название нового заказ'); ?>
	                            </div>

<div class="form-group col-lg-3">
<label>Дата поступления заказа</label>
<?php 

if( $model->created > 0 )
$val = date( "d-m-Y H:i", $model->created );
else $val = '';

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
<label>Крайник срок (закрытие)</label>
<?php 

if( $model->deadline > 0 )
$val = date( "d-m-Y H:i", $model->deadline );
else $val = '';

echo Datetimepicker::widget([
    'model' => $model,
    'attribute' => 'deadline',
    'options' => [
        'lang' => 'ru',
        'value' => $val,
        'placeholder' => 'Выберите дату...',
        'format' => 'd-m-Y h:i',
    ]
]);
?>
 </div>
</div><div class="row">
<div class="form-group col-lg-6">
 <?php echo $form->field($model, 'descr')->textArea(['maxlength' => 512, 'rows' => 5, 'cols' => 50])->label('Описание нового заказа'); ?>
</div>




<div class="form-group col-lg-2">
	<?= $form->field($model, 'price')->textInput(['placeholder'=>'0.00'])->label('Сумма заказа'); ?>
</div>

<div class="form-group col-lg-2">
	<?= $form->field($model, 'tax')->textInput(['placeholder'=>'0.00'])->label('Налог'); ?>
</div>

<div class="form-group col-lg-2">
	<?= $form->field($model, 'weight')->textInput(['placeholder'=>'0'])->label('Вес (тонн)'); ?>
</div>

<div class="form-group col-lg-3">
<label>Состояние заказа</label>
<?= Html::activeDropDownList($model, 'state',
      ArrayHelper::map(Dropdowns::find()->where(['type'=>'order_state'])->all(), 'id', 'name'), ['class'=>'form-control']) ?>
</div>

<div class="form-group col-lg-3">
<label>Состояние заказа</label>
<?= Html::activeDropDownList($model, 'goods_id',
      ArrayHelper::map(Dropdowns::find()->where(['type'=>'goods'])->all(), 'id', 'name'), ['class'=>'form-control']) ?>
</div>



</div>

<?= Html::submitButton('Добавить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

                        </div>
                    </div>

                </div>

<?php ActiveForm::end(); ?>

                
            </div>