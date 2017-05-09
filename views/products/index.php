<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;

$this->title = 'Продукция';
$this->params['breadcrumbs'][] = $this->title;
?>


                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <?= Html::a("Добавить продукт", array('products/add'), array('class'=>'btn btn-w-md btn-success')) ?>
                            </div>
                            Перечень продукции
                        </div>
                        <div class="panel-body">
                        	<p>Список всей продукции компании</p>
                            <div class="table-responsive">


								<table class="table table-striped table-hover" id="tableExample3">

                                    <thead>
                                    <tr>
                                    	<th>№</th>
                                        <th>Название</th>
                                        <th>Поставщик</th>
                                        <th>Бренд</th>
                                        <th>Стоимость</th>
                                        <th>Наличие</th>
                                        <th>Продаж</th>
                                        <th>Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
								    <?php foreach ($data as $post): ?>
								        <tr>
								            <td>
								                <?php echo Html::a($post->id, array('products/read', 'id'=>$post->id)); ?>
								            </td>
								            <td><?php echo Html::a($post->name, array('products/read', 'id'=>$post->id)); ?></td>
								            <td><?php 
								            if( $post->provider_id > 0 ){
								            	$provider_info = Providers::findIdentity( $post->provider_id );
								            	if( $provider_info->name != '' )
								            		echo Html::a( $provider_info->name , array('providers/read', 'id'=>$post->provider_id)); 
								            }else echo "-";
								            ?></td>
								            <td><?php 
								            if( $post->brand_id > 0 ){
								            	$brand_info = User::findIdentity( $post->brand_id );
								            	if( $brand_info->name != '' )
								            		echo Html::a( $brand_info->name , array('brand/read', 'id'=>$post->brand_id)); 
								            }else echo "-";
								            ?></td>
								            <td><?php echo $post->price; ?></td>
								            <td><?php echo $post->stack; ?></td>
								            <td><?php echo $post->buying; ?></td>
								            <td>
								                <?php echo Html::a(NULL, array('products/update', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-edit')); ?>
								                <?php echo Html::a(NULL, array('products/delete', 'id'=>$post->id), array('class'=>'btn btn-default btn-sm pe pe-7s-trash')); ?>
								            </td>
								        </tr>
								    <?php endforeach; ?>
								    </tbody>
								</table>

								</div>

                        </div>
                    </div>
