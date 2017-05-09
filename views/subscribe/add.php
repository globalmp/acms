<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Users;
use app\models\Brands;
use app\models\Providers;
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
	<?= Html::a('Ко всем продуктам',['products/index'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
</div>
                            <h3>Добавление нового продукта</h3>
                            <small>
                                Вы можете добавить новый продукт в базу, заполнив форму данных ниже. Будьте внимательный при заполнении данных.
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
	                                <?= $form->field($model, 'name')->textInput(['placeholder'=>'Лыжи для лыж'])->label('Название продукта'); ?>
	                            </div>


                                <div class="form-group col-lg-3">
                                <label>Бренд</label>
                                <?= Html::activeDropDownList($model, 'brand_id',
                                      ArrayHelper::map(Brands::find()->all(), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>


                                <div class="form-group col-lg-3">
                                <label>Поставщик</label>
                                <?= Html::activeDropDownList($model, 'brand_id',
                                      ArrayHelper::map(Providers::find()->all(), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>

                                <div class="form-group col-lg-3">
                                <label>Ответственный за продукт</label>
                                <?php
                                    if( $model->owner_id <= 0 )
                                        $model->owner_id = Yii::$app->user->getId();
                                ?>
                                <?= Html::activeDropDownList($model, 'owner_id',
                                      ArrayHelper::map(Users::find()->where(['state'=>'1'])->all(), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>


</div><div class="row margin-bottom">

<div class="form-group col-lg-6">
 <?php echo $form->field($model, 'descr')->textArea(['placeholder'=>'Суперские лыжи для любых видов отдыха','style'=>'width:100%;','maxlength' => 1024, 'rows' => 5, 'cols' => 50])
 ->label('Описание продукта'); ?>
</div>


                                <div class="form-group col-lg-3">
                                    <?= $form->field($model, 'price')->textInput(['placeholder'=>'0.00'])->label('Цена продукта'); ?>
                                </div>
                                <div class="form-group col-lg-3">
                                    <?= $form->field($model, 'skidka')->textInput(['placeholder'=>'0.00'])->label('Цена со скидкой'); ?>
                                </div>
                                <div class="form-group col-lg-3">
                                    <?= $form->field($model, 'weight')->textInput(['placeholder'=>'1'])->label('Вес изделия'); ?>
                                </div>

</div><div class="row margin-bottom">





<div class="form-group col-lg-3">
<label>Дата добавления продукта</label>
<?php 

if( $model->date > 0 )
$val = date( "d-m-Y H:i", $model->date );
else $val = date( "d-m-Y H:i" );

echo Datetimepicker::widget([
    'model' => $model,
    'attribute' => 'date',
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







</div>

<?= Html::submitButton('Добавить продукта', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

                        </div>
                    </div>

                </div>

<?php ActiveForm::end(); ?>

                
            </div>