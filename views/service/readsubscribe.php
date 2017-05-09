<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Providers;
use app\models\Clients;
use app\models\User;
use app\models\Users;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
//use yii\jui\AutoComplete;

$this->title = 'Управление виджетом меню';
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
    <?= Html::a('Ко всем елементам меню',['service/menuindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
</div>
                            <h3><?= $data['title']; ?></h3>
                            <small>
                                Карточка управления блоком меню.
                            </small>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>

            <div class="row">
  
                    





                <div class="col-md-8">
                            <div class="dd" id="nestable">
                                <?= $menu_editor; ?>
                            </div>
                </div>




                <div class="col-md-4" style="margin-top:5px;">
                    <div class="panel panel-filled">
                        <div class="panel-body">
                            <div class="form-group">
                                <label>Название будущего пункта меню</label>
                                    <input type="text" name="" id="menu-name" value="" placeholder="Название пункта меню" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Ссылка, куда будет вести пункт</label>
                                    <input type="text" name="" id="menu-link" value="" placeholder="Ссылка на категорию или раздел" class="form-control">
                            </div>
                            <button class="pull-right btn btn-success" id="add-menu">Добавить пункт</button>
                        </div>
                    </div>
                </div>
    
            </div>











                </div>


















                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header text-center">
                                                <h4 class="modal-title">Добавление комплектации к заказу</h4>
                                                <small>Комплектация заказа позволяет точно собирать для клиента заказ из поставщиков и подрядчиков</small>
                                            </div>
                                    <?php 
                                        $form = ActiveForm::begin([
                                            'id' => 'login-form',
                                            'options' => [],
                                            'fieldConfig' => [
                                                'template' => "{label}{input}",
                                                'labelOptions' => []
                                            ],
                                        ]); 
                                        echo Html::hiddenInput('providers[row_id]', $_GET['id']);
                                    ?>
                                            <div class="modal-body">

                                                <div class="row margin-bottom">
                                                    <div  class="col-lg-6">
                                                        <?= Html::dropDownList('Providers[other_id]', 'row_id',
                                                            ArrayHelper::map(Providers::find()->where(['state'=>'1'])->all(), 'id', 'title'), 
                                                            ['name'=>'Providers[other_id]','class'=>'select2 form-control2']) 
                                                        ?>
                                                    </div>
                                                        <div class="col-sm-3">
                                                         <?= Html::textInput('Providers[param_str_1]', NULL, ['placeholder'=>'Цена','class'=>'form-control']); ?>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <?= Html::textInput('Providers[param_str_2]', NULL, ['placeholder'=>'Объем','class'=>'form-control']); ?>
                                                        </div>
                                                </div>
                                                    <div class="row">
                                                        <div  class="col-lg-12">
                                                            <?php 
                                                             echo Html::textArea('Providers[comment]',NULL,['maxlength' => 512,'class'=>'form-control', 'rows' => 5, 'cols' => 50]); 
                                                             ?>
                                                        </div>
                                                    </div>
                                    <div class="clearfix"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Выход</button>
                                                <?= Html::submitButton('Добавить', ['class' => 'btn btn-accent', 'name' => 'add-button']) ?>
                                            </div>
                                        </div>
                                        <?php 
                                            ActiveForm::end(); 
                                        ?>

                                    </div>
                                </div>




                                <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header text-center">
                                                <h4 class="modal-title">Добавление ответственного к заказу</h4>
                                                <small>Вы можете подключить коллег к данному заказу для ускорения работы</small>
                                            </div>
                                    <?php 
                                        $form = ActiveForm::begin([
                                            'id' => 'login-form',
                                            'options' => [],
                                            'fieldConfig' => [
                                                'template' => "{label}{input}",
                                                'labelOptions' => []
                                            ],
                                        ]); 
                                        echo Html::hiddenInput('Responsibles[row_id]', $_GET['id']);
                                    ?>
                                            <div class="modal-body">

                                                <div class="row margin-bottom">
                                                    <div  class="col-lg-12">
                                                        <?= Html::dropDownList('Responsibles[other_id]', 'row_id',
                                                            ArrayHelper::map(Users::find()->where(['state'=>'1'])->all(), 'id', 'name'), 
                                                            ['name'=>'Responsibles[other_id]','class'=>'select2 form-control2']) 
                                                        ?>
                                                    </div>
                                                </div>
                                                    <div class="row">
                                                        <div  class="col-lg-12">
                                                            <?php 
                                                             echo Html::textArea('Responsibles[comment]',NULL,['maxlength' => 512,'class'=>'form-control', 'rows' => 5, 'cols' => 50]); 
                                                             ?>
                                                        </div>
                                                    </div>
                                    <div class="clearfix"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Выход</button>
                                                <?= Html::submitButton('Добавить', ['class' => 'btn btn-accent', 'name' => 'add-button']) ?>
                                            </div>
                                        </div>
                                        <?php 
                                            ActiveForm::end(); 
                                        ?>

                                    </div>
                                </div>





                                <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header text-center">
                                                <h4 class="modal-title">Добавление комментария</h4>
                                                <small>Вы можете добавить комментарий к карточке заказа и сообщить об нем всем ответственным</small>
                                            </div>
                                    <?php 
                                        $form = ActiveForm::begin([
                                            'id' => 'login-form',
                                            'options' => [],
                                            'fieldConfig' => [
                                                'template' => "{label}{input}",
                                                'labelOptions' => []
                                            ],
                                        ]); 
                                        echo Html::hiddenInput('Message[row_id]', $_GET['id']);
                                    ?>
                                            <div class="modal-body">

                                                    <div class="row">
                                                        <div  class="col-lg-12">
                                                            <?php 
                                                             echo Html::textArea('Message[comment]',NULL,['maxlength' => 512,'class'=>'form-control', 'rows' => 5, 'cols' => 50]); 
                                                             ?>
                                                        </div>
                                                    </div>
                                    <div class="clearfix"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Выход</button>
                                                <?= Html::submitButton('Добавить', ['class' => 'btn btn-accent', 'name' => 'add-button']) ?>
                                            </div>
                                        </div>
                                        <?php 
                                            ActiveForm::end(); 
                                        ?>

                                    </div>
                                </div>
