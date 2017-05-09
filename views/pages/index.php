<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers;

use yii\widgets\LinkPager;
 
$this->title = 'Страницы сайта';
$this->params['breadcrumbs'][] = $this->title;
?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
						<form action="" method="GET">
                            <div class="panel-tools">
									<input type="text" name="query" class="form-control" style="float:left; width:200px; margin-right:5px;">
									<input type="submit" value="Поиск" class="btn btn-w-md btn-success" style="width:50px!important;">
								<?= Html::a("Все записи", array('pages/index'), array('class'=>'btn btn-w-md btn-success')) ?>
                                <?= Html::a("Добавить страницу", array('pages/add'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
						</form>


                            Перечень страниц
                        </div>
                        <div class="panel-body">
                        	<p>Список всех страниц и серверов</p>
                            <div class="table-responsive">


								<table class="table table-bordered">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th width="40%">Название страницы</th>
                                        <th width="20%">Сервер</th>
                                        <th>Просмотров</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td>
								                <?php echo Html::a($post->id, array('pages/update', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->title, array('pages/update', 'id'=>$post->id)); ?></td>
								            <td><?php 
								            if( $post->server_id > 0 ){
								            	$server_info = Servers::findIdentity( $post->server_id );
								            	if( $server_info->host != '' )
								            		echo Html::a( $server_info->name , array('server/read', 'id'=>$post->server_id)); 
								            }else echo "-";
								            ?></td>
								            
								            <td><?php echo $post->views; ?></td>
								            <td>
								                <?php echo Html::a(NULL, array('pages/update', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('pages/delete', 'id'=>$post->id), array('data-protected'=>"true",'class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>




<?php
	echo LinkPager::widget([
	    'pagination' => $pages
	]);
?>







								</div>

                        </div>
                    </div>
