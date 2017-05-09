<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Providers;
use app\models\Clients;
use app\models\User;
use app\models\Users;
use app\models\Brands;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
use yii\widgets\Pjax;
//use yii\jui\AutoComplete;

$this->title = 'Карточка продукта';
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
    <?= Html::a('Ко всем поставщикам',['products/index'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
</div>
                            <h3><?= $data['name']; ?></h3>
                            <small>
                                Карточка поставщика, комплектация и ответственный персонал для работы
                            </small>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="tabs-container">
                        <ul class="nav nav-tabs">
                            <li <?php echo ((!@Yii::$app->request->get('openTab'))?"class=\"active\"":"class=\"\""); ?>><a data-toggle="tab" href="#tab-1" <?php echo ((!@Yii::$app->request->get('openTab'))?"aria-expanded=\"true\"":"aria-expanded=\"false\""); ?>> Основная информация </a></li>
                            <?php
                                $count = app\models\Links::find()->where(['action'=>'providers/read','type'=>'messages','row_id'=>Yii::$app->request->get('id')])->count();
                            ?>
                            <li <?php echo ((Yii::$app->request->get('openTab')=='4')?"class=\"active\"":"class=\"\""); ?>><a data-toggle="tab" href="#tab-4" <?php echo ((Yii::$app->request->get('openTab')=='4')?"aria-expanded=\"true\"":"aria-expanded=\"false\""); ?>>Комментарий&nbsp;<span class="badge pull-right"><?= $count; ?></span></a></li>
 

                            <?php
                                $count = app\models\Links::find()->where(['action'=>'products/read','type'=>'providers','row_id'=>Yii::$app->request->get('id')])->count();
                            ?>
                            <li <?php echo ((Yii::$app->request->get('openTab')=='3')?"class=\"active\"":"class=\"\""); ?>><a data-toggle="tab" href="#tab-3" <?php echo ((Yii::$app->request->get('openTab')=='3')?"aria-expanded=\"true\"":"aria-expanded=\"false\""); ?>>Поставщики услуги&nbsp;<span class="badge pull-right"><?= $count; ?></span></a></li>

                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane <?php echo ((!@Yii::$app->request->get('openTab'))?"active":""); ?>">
                                <div class="panel-body">
                                    
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="small">Дата добавления</div>
                                            <h2 class="c-white"><?php
                                                echo Yii::$app->formatter->asDatetime($data['date'], "dd-MM-yyyy hh:mm");
                                             ?></h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                        <?php if( @$data['descr'] ): ?>
                                            <div class="panel panel-c-white">
                                                <div class="panel-body" style="margin-bottom:0px;">
                                                    <?php
                                                        echo $data['descr'];
                                                    ?>
                                                </div>
                                            </div>
                                            <?php endif; ?>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="panel panel-c-success">
                                                <div class="panel-body" style="margin-bottom:0px;">
                                                    <table style="margin-bottom:0px;" class="table table-hover table-striped table-bordered table-condensed">
                                                        <tbody>
                                                        <tr>
                                                            <td width="150px" style="width:150px important;">Цена</td>
                                                            <td><?php echo @$data['price']; ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td width="15%">Цена&nbsp;со&nbsp;скидкой</td>
                                                            <td><?php echo @$data['skidka']; ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td width="15%">Вес</td>
                                                            <td><?php echo @$data['weight']; ?></td>
                                                        </tr>
                            

                                                        <?php
                                                            if( (int)$data['brand_id'] > 1 ){
                                                        
                                                            $brand_info = Brands::findIdentity( $data['brand_id'] ); 

                                                            }
                                                        ?>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            














                            <div id="tab-3" class="tab-pane <?php echo ((Yii::$app->request->get('openTab')=='3')?"active":""); ?>">
                                <div class="panel-body">
                                
                                            <div class="row margin-bottom">
                                                <div class="col-lg-3">
                                                    <button type="button" class="btn btn-lg btn-default" data-toggle="modal" data-target="#myModal4">Добавить поставщика</button>
                                                </div>
                                                <div class="col-lg-9">
                                                        <div class="panel panel-c-white" style="margin-bottom:0px;">
                                                            <div class="panel-body" style="margin-bottom:0px; padding:12px">
                                                                Новый поставщик к этому продукту
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                    <div class="table-responsive">
                                    <table id="tableExample3" class="table table-striped table-hover" width="100%">
                                            <thead>
                                            <tr>
                                                <th width="15%">Дата</th>
                                                <th width="15%">Поставщик</th>
                                                <th width="15%">Цена</th>
                                                <th width="15%">Мин. Объем</th>
                                                <th width="15%">Сотрудник</th>
                                                <th>Сообщение</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                    <?php if( @$providers ) foreach ($providers as $provider): ?>
                                        <tr>
                                            <td>
                                                <?php echo Yii::$app->formatter->asDatetime($provider->created, "dd-MM-yyyy hh:mm"); ?>
                                            </td>
                                                    <td>
                                                        <?php
                                                            if( $provider->other_id > 0 ){
                                                                $provider_info = app\models\Providers::find()->where(['id'=>$provider->other_id])->one();
                                                                echo Html::a( $provider_info->title , array('providers/view', 'id'=>$provider->other_id)); 
                                                            }else echo "-";
                                                        ?>
                                                    </td>
                                            <td><?= (($provider->param_str_1)?$provider->param_str_1:"-"); ?></td>
                                            <td><?= (($provider->param_str_2)?$provider->param_str_2:"-"); ?></td>
                                            <td><?php 

                                            if( $provider->user_id > 0 ){
                                                $user_info = User::findIdentity( $provider->user_id );
                                                if( $user_info->name != '' )
                                                    echo Html::a( $user_info->name , array('users/view', 'id'=>$user_info->id)); 
                                                else 
                                                    echo Html::a( $user_info->username , array('users/view', 'id'=>$user_info->id)); 
                                            }else echo "-";

                                            ?></td>
                                            <td><?php
                                                echo $provider->comment;
                                            ?></td>
                                        </tr>
                                    <?php endforeach; ?>
                                            </tbody>
                                        </table>
                                    </div>


                            </div>
                        </div>
















                            <div id="tab-4" class="tab-pane <?php echo ((Yii::$app->request->get('openTab')=='4')?"active":""); ?>">
                                <div class="panel-body">
                                
                                    <div class="row margin-bottom">
                                                <div class="col-lg-3">
                                                    <button type="button" class="btn btn-lg btn-default" data-toggle="modal" data-target="#myModal3">Добавить комментарий</button>
                                                </div>
                                                <div class="col-lg-9">
                                                        <div class="panel panel-c-white" style="margin-bottom:0px;">
                                                            <div class="panel-body" style="margin-bottom:0px; padding:12px">
                                                                Новый комментарий к карточке поставщика
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                    <div class="table-responsive">





                                        <table id="tableExample2" class="table table-striped table-hover" width="100%">
                                            <thead>
                                            <tr>
                                                <th width="15%">Дата</th>
                                                <th width="15%">Сотрудник</th>
                                                <th>Сообщение</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                    <?php if( @$messages ) foreach ($messages as $message): ?>
                                        <tr>
                                            <td>
                                                <?php echo Yii::$app->formatter->asDatetime($message->created, "dd-MM-yyyy hh:mm"); ?>
                                            </td>
                                            <td><?php 

                                            if( $message->user_id > 0 ){
                                                $user_info = User::findIdentity( $message->user_id );
                                                if( $user_info->name != '' )
                                                    echo Html::a( $user_info->name , array('users/view', 'id'=>$message->id)); 
                                                else 
                                                    echo Html::a( $user_info->username , array('users/view', 'id'=>$message->id)); 
                                            }else echo "-";

                                            ?></td>
                                            <td><?php
                                                echo $message->comment;
                                            ?></td>
                                        </tr>
                                    <?php endforeach; ?>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
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












                                <div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header text-center">
                                                <h4 class="modal-title">Добавление нового поставщика</h4>
                                                <small>Для каждого продукта или товара есть поставщик и вы его можете указать здесь</small>
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
                                                            <?= Html::textInput('Providers[param_str_2]', NULL, ['placeholder'=>'Мин. бъем','class'=>'form-control']); ?>
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