<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers;
use yii\widgets\Blocks;

$this->title = 'Перечень всех переменных';
$this->params['breadcrumbs'][] = $this->title;

		$Servers_ = Servers::find()->where(['state'=>1])->all();
		foreach( $Servers_ as $el_val ){
			$sites[ $el_val->id ] = $el_val;
		}

?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить новую переменную", array('service/addvars'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Перечень всех ваших переменных
                        </div>
                        <div class="panel-body">
                        	<p>Список всех запаркованных переменных</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>Название</th>
                                        <th>Сервисное название</th>
										<th>Сервер</th>
                                        
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td width="40px">
								                <?php echo Html::a($post->id, array('service/updatevars', 'id'=>$post->id)); ?>
								            </td>
											<td>
								                <?php echo Html::a($post->name, array('service/updatevars', 'id'=>$post->id)); ?>
								            </td>
											<td>
								                <?php echo Html::a($post->alt, array('service/updatevars', 'id'=>$post->id)); ?>
								            </td>
											<td>
								                <?php  
												if( $post->server_id > 0 )
												echo Html::a( $sites[$post->server_id]['name'], array('service/updateserver', 'id'=>$post->server_id)); 
												else echo "Глобальная";
												?>
								            </td>
											<td width="100px">
								                <?php echo Html::a(NULL, array('service/updatevars', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('service/deletevars', 'id'=>$post->id), array('data-protected'=>"true",'class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
											

								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
