<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers;
use yii\widgets\Blocks;

$this->title = 'Перечень всех ваших меню';
$this->params['breadcrumbs'][] = $this->title;
?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить новую категорию", array('service/addcategory'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Перечень всех категорий ваших сайтов
                        </div>
                        <div class="panel-body">
                        	<p>Перечень всех категорий ваших сайтов, редактирование, добавление и удаления производится в данном разделе</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>Название</th>
                                        <th>Сервер</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td>
								                <?php echo Html::a($post->id, array('service/updatecategory', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->title, array('service/updatecategory', 'id'=>$post->id)); ?></td>
								            <td><?php 
								            if( $post->server_id > 0 ){
								            	$server_info = Servers::findIdentity( $post->server_id );
								            	if( $server_info->host != '' )
								            		echo Html::a( $server_info->name , array('server/update', 'id'=>$post->server_id)); 
								            }else echo "-";
								            ?></td>
								            <td>
								                <?php echo Html::a(NULL, array('service/updatecategory', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('service/deletecategory', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
