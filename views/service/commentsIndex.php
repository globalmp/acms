<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers;
use yii\widgets\Blocks;
use yii\widgets\LinkPager;

$this->title = 'Перечень всех серверов';
$this->params['breadcrumbs'][] = $this->title;

$servers_names = [];
$servers_names_ = Servers::find()->all();

foreach( $servers_names_ as $el )
	$servers_names[ $el->id ] = $el->name;

?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
						<form action="" method="GET">
                            <div class="panel-tools">
									<input type="text" name="query" class="form-control" style="float:left; width:200px; margin-right:5px;">
									<input type="submit" value="Поиск" class="btn btn-w-md btn-success" style="width:50px!important;">
								<?= Html::a("Все записи", array('service/commentsindex'), array('class'=>'btn btn-w-md btn-success')) ?>
                                <?= Html::a("Добавить новый комментарий", array('service/addcomments'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
						</form>
                            Перечень всех комментариев
                        </div>
                        <div class="panel-body">
                        	<p>Список всех комментариев в системе с привязкой к серверу</p>
                            <div class="table-responsive">


							
	
            
							<?php if(@$data){ ?>

                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Имя</th>
                                        <th>Email</th>
                                        <th>Сервер</th>
                                        <th>Текст</th>
                                        <th>Дата</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
									<?php foreach ($data as $post): ?>
								        <tr>
								            <td width="40px">
								                <?php echo Html::a($post->id, array('service/updatecomments', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->name, array('service/commentsindex', 'name'=>$post->name)); ?></td>
								            <td><?php echo Html::a($post->email, array('service/commentsindex', 'email'=>$post->email)); ?></td>
											<td><?php echo Html::a($servers_names[$post->server_id], array('service/commentsindex', 'server_id'=>$post->server_id)); ?></td>
								            
								            <td><?php echo (mb_strlen($post->text,'UTF-8')>100) ? trim(mb_substr($post->text
,0,100,'UTF-8')).'...':mb_substr($post->text,0,100,'UTF-8'); ?></td> 
											<td><?php 
											
											$s = strtotime( date("d-m-Y 00:01",$post->date) );
											$n = strtotime( "+1 day", $s );
											
											echo "<a href=\"/service/commentsindex?date_start=".$s."&sate_end=".$n."\">".date("d/m/Y",$post->date)."</a><br>"; 
											
											echo date("H:i:s",$post->date);  
											
											?></td>
											<td width="150px" valign="middle" align="center" style="vertical-align: middle !important;">
								                <?php echo Html::a(NULL, array('service/updatecomments', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('service/deletecomments', 'id'=>$post->id), array('data-protected'=>"true",'class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            
											<a href="/service/addcomments/?parent_id=<?=$post->id;?>&server_id=<?=$post->server_id;?>&row_id=<?=$post->row_id;?>&action=<?=$post->action;?>" data-protected="true"><i class="btn btn-default btn-sm pe pe-7s-repeat"></i></a>
											
	  
											</td>
								        </tr>
								    <?php endforeach; ?>


                                    </tbody>
                                </table>
								<?php }else{ ?>
								 
									<center><h2>Пока нет записей</h2></center>
								
								<?php } ?>



								
								<?php
	echo LinkPager::widget([
	    'pagination' => $pages,
	]);
?>
								
							

							</div>

                        </div>
                    </div>
