<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;

use yii\widgets\Blocks;

$this->title = 'Заказы';
$this->params['breadcrumbs'][] = $this->title;
?>

<?= Blocks::widget(['type'=>'menu','param'=>'top']) ?>

                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить заказ", array('orders/add'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Перечень заказов компании
                        </div>
                        <div class="panel-body">
                        	<p>Перечень всех заказов компании с основной информацией</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>Название</th>
                                        <th>Ответственный</th>
                                        <th>Создан</th>
                                        <th>Закрыт</th>
                                        <th>Сумма (налог)</th>
                                        <th>Вес (т)</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td>
								                <?php echo Html::a($post->id, array('orders/read', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->title, array('orders/read', 'id'=>$post->id)); ?></td>
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
								            <td><?php
								            	echo Yii::$app->formatter->asDatetime($post->deadline, "dd-MM-yyyy hh:mm");
								             ?></td>
								            <td><?php echo $post->price . (($post->tax > 0)?" (".$post->tax.")":""); ?></td>
								            <td><?php echo $post->weight; ?></td>
								            <td>
								                <?php echo Html::a(NULL, array('orders/update', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('orders/delete', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
