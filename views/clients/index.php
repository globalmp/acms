<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;

$this->title = 'Клиенты';
$this->params['breadcrumbs'][] = $this->title;
?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить клиента", array('clients/add'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Перечень клиентов
                        </div>
                        <div class="panel-body">
                        	<p>Список всех существующих клиентов компании</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>Название</th>
                                        <th>Ответственный</th>
                                        <th>Сотрудник</th>
                                        <th>Создан</th>
                                        <th>Телефон</th>
                                        <th>Почта</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td>
								                <?php echo Html::a($post->id, array('clients/read', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->title, array('clients/read', 'id'=>$post->id)); ?></td>
								            <td><?php echo Html::a($post->name, array('clients/read', 'id'=>$post->id)); ?></td>
								            <td><?php 
								            if( $post->owner_id > 0 ){
								            	$user_info = User::findIdentity( $post->owner_id );
								            	if( $user_info->name != '' )
								            		echo Html::a( $user_info->name , array('users/view', 'id'=>$post->id)); 
								            	else 
								            		echo Html::a( $user_info->username , array('users/view', 'id'=>$post->id)); 
								            }else echo "-";
								            ?></td>
								            <td><?php
												echo Yii::$app->formatter->asDatetime($post->created, "dd-MM-yyyy hh:mm");
								            ?></td>
								            <td><?php echo $post->phone; ?></td>
								            <td><?php echo $post->email; ?></td>
								            <td>
								                <?php echo Html::a(NULL, array('clients/update', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('clients/delete', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
