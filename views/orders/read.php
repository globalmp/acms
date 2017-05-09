<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Providers;
use app\models\Products;
use app\models\Clients;
use app\models\User;
use app\models\Users;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
//use yii\jui\AutoComplete;

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
                            <h3><?= $data['title']; ?></h3>
                            <small>
                                Карточка заказа, комплектация и ответственный персонал для работы
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
                                $count = app\models\Links::find()->where(['action'=>'orders/read','type'=>'provider','row_id'=>Yii::$app->request->get('id')])->count();
                            ?>
                            <li <?php echo ((Yii::$app->request->get('openTab')=='2')?"class=\"active\"":"class=\"\""); ?>><a data-toggle="tab" href="#tab-2" <?php echo ((Yii::$app->request->get('openTab')=='2')?"aria-expanded=\"true\"":"aria-expanded=\"false\""); ?>>Комплектация&nbsp;<span class="badge pull-right"><?= $count; ?></span></a></li>
                            <?php
                                $count = app\models\Links::find()->where(['action'=>'orders/read','type'=>'responsible','row_id'=>Yii::$app->request->get('id')])->count();
                            ?>
                            <li <?php echo ((Yii::$app->request->get('openTab')=='3')?"class=\"active\"":"class=\"\""); ?>><a data-toggle="tab" href="#tab-3" <?php echo ((Yii::$app->request->get('openTab')=='3')?"aria-expanded=\"true\"":"aria-expanded=\"false\""); ?>>Ответственные&nbsp;<span class="badge pull-right"><?= $count; ?></span></a></li>
                            <?php
                                $count = app\models\Links::find()->where(['action'=>'orders/read','type'=>'messages','row_id'=>Yii::$app->request->get('id')])->count();
                            ?>
                            <li <?php echo ((Yii::$app->request->get('openTab')=='4')?"class=\"active\"":"class=\"\""); ?>><a data-toggle="tab" href="#tab-4" <?php echo ((Yii::$app->request->get('openTab')=='4')?"aria-expanded=\"true\"":"aria-expanded=\"false\""); ?>>Комментарий&nbsp;<span class="badge pull-right"><?= $count; ?></span></a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane <?php echo ((!@Yii::$app->request->get('openTab'))?"active":""); ?>">
                                <div class="panel-body">
                                    
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="small">Дата оформления заказа</div>
                                            <h2 class="c-white"><?php
                                                echo Yii::$app->formatter->asDatetime($data['created'], "dd-MM-yyyy hh:mm");
                                             ?></h2>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="small">Дата закрытия заказа</div>
                                            <h2 class="c-white"><?php
                                                echo Yii::$app->formatter->asDatetime($data['deadline'], "dd-MM-yyyy hh:mm");
                                             ?></h2>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="small">Осталось</div>
                                            <h2 class="c-white"><?php
                                                echo ceil(($data['deadline'] - time())/86400) . ' <small>дня[ей]</small>';
                                             ?></h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <table class="table table-hover table-striped table-bordered table-condensed">
                                            <tbody>
                                            <tr>
                                                <td>Стоимость</td>
                                                <td><?= $data['price']; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Налоги</td>
                                                <td><?= $data['tax']; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Вес заказа</td>
                                                <td><?= $data['weight']; ?>&nbsp;т.</td>
                                            </tr>
                                            </tbody>
                                        </table>
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
                                            <?php if( @$data['owner_id'] == Yii::$app->user->getId() ): ?>
                                            <div class="panel panel-c-success">
                                                <div class="panel-body" style="margin-bottom:0px;">
                                                    <div class="row">
                                                        <?php if( @$data['client_id'] != null ): ?>
                                                            <div class="col-lg-12">
                                                            <h3><?php if( @$client['title'] ) echo $client['title']; else echo $client['name'];  ?></h3>
                                                            </div>

                                                            <div class="col-lg-12">
                                                                <table class="table table-hover table-striped table-bordered table-condensed">
                                                                <tbody>
                                                                    <?php if( @$client['created'] ): ?>
                                                                        <tr>
                                                                            <td><b>Добавлен в базу</b></td>
                                                                            <td><?php echo Yii::$app->formatter->asDatetime(@$client['created'], "dd-MM-yyyy hh:mm"); ?></td>
                                                                        </tr>
                                                                    <?php endif; ?>
                                                                    <?php if( @$client['name'] ): ?>
                                                                        <tr>
                                                                            <td><b>Руководитель</b></td>
                                                                            <td><?php echo @$client['name']; ?></td>
                                                                        </tr>
                                                                    <?php endif; ?>
                                                                    <?php if( @$client['phone'] ): ?>
                                                                        <tr>
                                                                            <td><b>Телефон</b></td>
                                                                            <td><?php echo @$client['phone']; ?></td>
                                                                        </tr>
                                                                    <?php endif; ?>
                                                                    <?php if( @$client['email'] ): ?>
                                                                        <tr>
                                                                            <td><b>Email-адрес</b></td>
                                                                            <td><?php echo @$client['email']; ?></td>
                                                                        </tr>
                                                                    <?php endif; ?>
                                                                    <?php if( @$client['adress'] ): ?>
                                                                        <tr>
                                                                            <td><b>Адрес предприятия</b></td>
                                                                            <td><?php echo @$client['adress']; ?></td>
                                                                        </tr>
                                                                    <?php endif; ?>
                                                                    <?php if( @$client['owner_id'] > 0 ): ?>
                                                                        <?php $user_info = User::findIdentity( $client['owner_id'] ); ?>
                                                                        <?php
                                                                            if( $user_info->name != '' )
                                                                                $link_ = Html::a( $user_info->name , array('users/view', 'id'=>$user_info->id)); 
                                                                            else 
                                                                                $link_ = Html::a( $user_info->username , array('users/view', 'id'=>$user_info->id));
                                                                        ?>
                                                                        <tr>
                                                                            <td><b>Ответственный за контакт</b></td>
                                                                            <td><?php echo @$link_; ?></td>
                                                                        </tr>
                                                                    <?php endif; ?>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                        <?php endif; ?>
                                                        <?php $form = ActiveForm::begin([
                                                            'id' => 'login-form',
                                                            'options' => [],
                                                            'fieldConfig' => [
                                                                'template' => "{label}{input}",
                                                                'labelOptions' => []
                                                            ],
                                                        ]); 
                                                            echo Html::hiddenInput('providers[row_id]', $_GET['id']);
                                                            ?>
                                                            <div class="col-lg-6">
                                                            <?= Html::dropDownList('Client[id]', 'row_id',
                                                                  ArrayHelper::map(Clients::find()->where(['state'=>'5'])->all(), 'id', 'title'), 
                                                                  ['name'=>'Client[id]','class'=>'select2 form-control2']) 
                                                                  ?>
                                                            </div>
                                                            <div class="col-lg-2">
                                                            <?= Html::submitButton('Добавить клиента', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                                                            </div>
                                                        <?php ActiveForm::end(); ?>
                                                        </div>
                                                </div>
                                            </div>
                                        <?php endif; ?>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div id="tab-2" class="tab-pane <?php echo ((Yii::$app->request->get('openTab')=='2')?"active":""); ?>">
                                <div class="panel-body">



                                    <div class="row">
                                        <div class="col-lg-12">

                                <div class="row">
                                    <div class="col-lg-3">
                                        <button type="button" class="btn btn-lg btn-default" data-toggle="modal" data-target="#myModal">Добавить комплектацию</button>
                                    </div>
                                    <div class="col-lg-9">
                                            <div class="panel panel-c-white" style="margin-bottom:0px;">
                                                <div class="panel-body" style="margin-bottom:0px; padding:12px">
                                                    Добавление нового элемента комплектации к заказу
                                                </div>
                                            </div>
                                        </div>
                                </div>



                                    <div class="row" style="margin-top:20px;">
                                        <div class="col-lg-12">
                                            <table class="table table-hover table-striped table-bordered table-condensed">

                                    <thead>
                                    <tr>
                                        <th>Продукт</th>
                                        <th>Подрядчик</th>
                                        <th>Комментарий</th>
                                        <th>Цена</th>
                                        <th>Объем</th>
                                        <th>-</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            <?php if( @$providers != null ): ?>
                                            <?php foreach ($providers as $provider): ?>
                                                <tr>
                                                    <td>
                                                        <?php
                                                            if( $provider->product_id > 0 ){
                                                                $product_info = app\models\Products::find()->where(['id'=>$provider->product_id])->one();
                                                                echo Html::a( $product_info->name , array('products/view', 'id'=>$provider->product_id)); 
                                                            }else echo "-";
                                                        ?>
                                                    </td>
                                                    <td>
                                                        <?php
                                                            if( $provider->other_id > 0 ){
                                                                $provider_info = app\models\Providers::find()->where(['id'=>$provider->other_id])->one();
                                                                echo Html::a( $provider_info->title , array('providers/view', 'id'=>$provider->other_id)); 
                                                            }else echo "-";
                                                        ?>
                                                    </td>
                                                    <td><?= $provider->comment; ?></td>
                                                    <td><?= (($provider->param_str_1)?$provider->param_str_1:"-"); ?></td>
                                                    <td><?= (($provider->param_str_2)?$provider->param_str_2:"-"); ?></td>
                                                    <td>
                                                        <?php echo Html::a(NULL, array('orders/deleteprovider', 'link_id'=>$provider->id,'id'=>$provider->row_id), array('class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
                                                    </td>
                                                </tr>
                                            <?php endforeach; ?>
                                            <?php endif; ?>
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
                                    <div class="row">
                                        <div class="col-lg-12">

                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <button type="button" class="btn btn-lg btn-default" data-toggle="modal" data-target="#myModal2">Добавить ответственного</button>
                                                </div>
                                                <div class="col-lg-9">
                                                        <div class="panel panel-c-white" style="margin-bottom:0px;">
                                                            <div class="panel-body" style="margin-bottom:0px; padding:12px">
                                                                Добавление сотрудника к заказу для работы
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div class="row" style="margin-top:20px;">
                                                        <div class="col-lg-12">
                                                            <table class="table table-hover table-striped table-bordered table-condensed">
                                                            <thead>
                                                            <tr>
                                                                <th>Сотрудник</th>
                                                                <th>Комментарий</th>
                                                                <th>-</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <?php if( @$responsibles != null ): ?>
                                                            <?php foreach ($responsibles as $responsible): ?>
                                                                <tr>
                                                                    <td>
                                                                        <?php
                                                                            if( $responsible->other_id > 0 ){
                                                                                $responsible_info = app\models\Users::find()->where(['id'=>$responsible->other_id])->one();
                                                                                echo Html::a( $responsible_info->name , array('users/view', 'id'=>$responsible->other_id)); 
                                                                            }else echo "-";
                                                                        ?>
                                                                    </td>
                                                                    <td><?= $responsible->comment; ?></td>
                                                                    <td>
                                                                        <?php echo Html::a(NULL, array('orders/deleteresponsible', 'link_id'=>$responsible->id,'id'=>$responsible->row_id), array('class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
                                                                    </td>
                                                                </tr>
                                                            <?php endforeach; ?>
                                                            <?php endif; ?>
                                                            </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                                Новый комментарий к карточке заказа
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                    <div class="table-responsive">

                                        <table id="tableExample2" class="table table-striped table-hover">
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
                                                    <div  class="col-lg-6">
                                                        <?= Html::dropDownList('Providers[product_id]', 'product_id',
                                                            ArrayHelper::map(Products::find()->where(['state'=>'1'])->all(), 'id', 'name'), 
                                                            ['name'=>'Providers[product_id]','class'=>'select2 form-control2']) 
                                                        ?>
                                                    </div>
                                                    </div>
                                                    <div class="row margin-bottom">
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
