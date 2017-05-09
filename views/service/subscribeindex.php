<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers;
use yii\widgets\Blocks;

$this->title = 'Перечень всех серверов';
$this->params['breadcrumbs'][] = $this->title;
?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить новый сайт", array('service/addserver'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Подписчики ваших сайтов
                        </div>
                        <div class="panel-body">
                        	<p>Список всех push-подписчиков на ваших сайтах</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>Браузер</th>
                                        <th>IP</th>
                                        <th>Дата подписки</th>
                                        <th>Получено</th>
                                        <th>Перейдено</th>
                                        <th>Сервис</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td width="40px">
								                <?php echo Html::a($post->id, array('service/updatesubscribe', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->browser, array('service/updatesubscribe', 'id'=>$post->id)); ?></td>
								            <td><?php echo Html::a($post->ip, array('service/updatesubscribe', 'id'=>$post->id)); ?></td>
                            <td><?php echo $post->date; ?></td>
                            <td><?php echo $post->send; ?></td>
                            <td><?php echo $post->click; ?></td>
								            <td width="100px">
								                <?php echo Html::a(NULL, array('service/updatesubscribe', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('service/deletesubscribe', 'id'=>$post->id), array('data-protected'=>"true",'class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
