<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Servers;
use app\models\Categorys;
use app\models\Menu;
use app\models\Images;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;

$this->title = 'Добавление|Редактирование пользователя';
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
	                       <?= Html::a('Ко всем пользователям',['service/userindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                        </div>
                            <h3>Добавление|Редактирование пользователя</h3>
                            <small>
                                Динамическое управление пользователями системы
                            </small>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>

                <div class="row">


    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => ['data-protected'=>'true'],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => []
        ],
    ]); ?>

                <div class="col-md-12">
                
                
                
                
                
                
                
                
                        <div class="tabs-container">


                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true">Основное</a></li>
                        </ul>
                        <div class="tab-content">
                
                
                
                
                
                
                
                
                
                
                <div id="tab-1" class="tab-pane  active">
                
                
                    <div>
                   

                        <div class="panel-body ">
                         <div class=" col-lg-12">






                            <div class="row">
      


    <div class="form-group col-lg-4">
        <?= $form->field($model, 'username')->textInput(['placeholder'=>'Пишем сюда'])->label('Email - пользователям, он же Логин для входа'); ?>
    </div>

    <div class="form-group col-lg-4">
        <?= $form->field($model, 'name')->textInput(['placeholder'=>'Пишем сюда'])->label('ФИО - пользователя'); ?>
    </div>
    
    <div class="form-group col-lg-4">
        <?= $form->field($model, 'password')->passwordInput(['placeholder'=>'Пишем сюда'])->label('Пароль пользователя'); ?>
    </div>
    
</div><div class="row">







                                <div class="form-group col-lg-2">
                                <label>Состояние</label>
                                <?= Html::activeDropDownList($model, 'state',
                                      ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>

                            </div>


                    
                    </div>
                        
                        

                    </div>
                    
                    
                    
                    
                    
                    </div>
                    


                    
                  </div> <!--  END TAB 1  -->  
                    
                    
                    
                    







</div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
                    
                    <?= Html::submitButton('Добавить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                    

                    
                    
                </div> </div> <!--   END BLOCK TABS   -->
                    
                  
                    
                    

                </div>

<?php ActiveForm::end(); ?>

                









            </div>