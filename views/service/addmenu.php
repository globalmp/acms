<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Servers;
use app\models\Menu;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;

$this->title = 'Добавление нового меню';
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
	                       <?= Html::a('Ко всем виджетам-меню',['service/menuindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                        </div>
                            <h3>Добавление нового меню</h3>
                            <small>
                                Добавление нового виджета-меню, данное меню позволит быстро получать доступ к необходимым разделам сайта.
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
                                <div class="form-group col-lg-5">
                                <label>Сайт (сервер)</label>
                                <?= Html::activeDropDownList($model, 'server_id',
                                      ArrayHelper::map(Servers::find()->where(['state'=>'1'])->all(), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>
                                <div class="form-group col-lg-4">
                                <label>Состояние</label>
                                <?= Html::activeDropDownList($model, 'state',
                                      ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>
                            </div>


                        	<div class="row margin-bottom">

	                            <div class="form-group col-lg-9">
	                                <?= $form->field($model, 'title')->textInput()->label('Название нового меню'); ?>
	                            </div>






<?php
/*
$elements_menus = Menu::find()->where(['state'=>'1'])->all();
    foreach( $elements_menus as $element ) echo $element->title."<-";
*/
?>



                                </div>

                                







<?= Html::submitButton('Добавить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

                        </div>
                    </div>

                </div>

<?php ActiveForm::end(); ?>

                
            </div>