<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers;
use yii\widgets\Blocks;

$this->title = 'Перечень всех пользователей';
$this->params['breadcrumbs'][] = $this->title;
?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить нового пользователя", array('service/adduser'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Перечень всех пользователей
                        </div>
                        <div class="panel-body">
                        	<p>Список всех зарегистрированных на сайте пользователей</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>ФИО</th>
                                        <th>Email</th>
                                        <th>Дата последней активности</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td width="40px">
								                <?php echo Html::a($post->id, array('service/updateuser', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->name, array('service/updateuser', 'id'=>$post->id)); ?></td>
								            <td><?php echo Html::a($post->username, array('service/updateuser', 'id'=>$post->id)); ?></td>
								            <td><?php echo date("H:i:s d-m-Y", $post->login_date); ?></td>
								            <td width="100px">
								                <?php echo Html::a(NULL, array('service/updateuser', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('service/deleteuser', 'id'=>$post->id), array('data-protected'=>"true",'class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
