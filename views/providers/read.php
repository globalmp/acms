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

$this->title = 'Карточка поставщика';
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
    <?= Html::a('Ко всем поставщикам',['providers/index'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
</div>
                            <h3><?= $data['title']; ?></h3>
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
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane <?php echo ((!@Yii::$app->request->get('openTab'))?"active":""); ?>">
                                <div class="panel-body">
                                    
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="small">Дата добавления поставщика</div>
                                            <h2 class="c-white"><?php
                                                echo Yii::$app->formatter->asDatetime($data['created'], "dd-MM-yyyy hh:mm");
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
                                                            <td width="15%">Email</td>
                                                            <td><?php echo $data['email']; ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td width="15%">Телефон</td>
                                                            <td><?php echo $data['phone']; ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td width="15%">Адрес</td>
                                                            <td><?php echo $data['adress']; ?></td>
                                                        </tr>
                                                        <?php if( @$data['keywords'] ): ?>
                                                            <tr>
                                                                <td>Деятельность</td>
                                                                <td><?php echo @$data['keywords']; ?></td>
                                                            </tr>
                                                        <?php endif; ?>
                                                                    <?php if( @$data['owner_id'] > 0 ): ?>
                                                                        <?php $user_info = User::findIdentity( $data['owner_id'] ); ?>
                                                                        <?php
                                                                            if( $user_info->name != '' )
                                                                                $link_ = Html::a( $user_info->name , array('users/view', 'id'=>$user_info->id)); 
                                                                            else 
                                                                                $link_ = Html::a( $user_info->username , array('users/view', 'id'=>$user_info->id));
                                                                        ?>
                                                                        <tr>
                                                                            <td>Ответственный</td>
                                                                            <td><?php echo @$link_; ?></td>
                                                                        </tr>
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
