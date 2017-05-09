<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers; 
use yii\widgets\Blocks;

$this->title = 'Статистика посещаемости';
$this->params['breadcrumbs'][] = $this->title;
?>

 
 
                            <?php 
							
								$arr = Servers::find()->where("state=1 and yandex_token!='' and yandex_counter!=''")->all();
								
                            ?>

                            <div class="row"> 
                                <div class="form-group col-lg-12">
									<select name="server_id" class="select2">
									<option value="0">Выберите сервер</option>
									<?php 
										foreach( $arr as $el ){ 
											echo "<option ".(($el->id==$_GET['server_id'])?"SELECTED":"")." value=\"".$el->id."\">".$el->name."</option>";
										}  
									?>
									</select>
								</div>
							</div>

							





							
							

                        <div class="panel panel-filled">
                            <div class="row">
                                <div class="col-md-4">

                                    <div class="panel-body h-200 list">
                                        <div class="stats-title pull-left">
                                            <h4>Сводная статистика</h4>
                                        </div>
                                        <div class="m-t-xl">
                                            <small>
                                                Общая статистика посещаемости сайта и просмотров страниц за сегодня и за последние 14 дней.
												Необходимые статистические данные подтягиваются в аналитику сайта благодаря API Яндекс.Метрики.
												<b>Ниже представлены данные за сегодня.</b>
                                            </small>
                                        </div>


										
										
									
										
                                        <hr/>
							



                                        <div class="row">
                                            <div class="col-md-6">
                                                <small class="stat-label">Посетителей</small>
                                                <h4 class="m-t-xs"><?=$users;?></h4>
                                            </div>
                                            <div class="col-md-6">
                                                <small class="stat-label">Просмотров</small>
                                                <h4 class="m-t-xs"><?=$views;?></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="panel-body">
                                        <div class="text-center slight">
                                        </div>

                                        <div id="container" style="min-width: 310px; height: 300px; margin: 0 auto"></div>
										

                                    </div>
                                </div>

                            </div>  
                        </div>











							
                            <div class="row">
                                <div class="col-md-12">
									<div class="panel collapsed panel-filled panel-c-success">
										<div class="panel-heading">
											<div class="panel-tools">
												<a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
												<a class="panel-close"><i class="fa fa-times"></i></a>
											</div>
											Статистика поисковых запросов, используемых для перехода на сайт
										</div>
										<div class="panel-body">
										
										
											<?php if(@$json['ga:users']['ga:keyword']){ ?>
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:users']['ga:keyword'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<h2>По времени нахождения по сайту</h2>
											
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:timeOnPage']['ga:keyword'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<?php }else{ ?>
												<center><h2>Пока нет записей</h2></center>
											<?php } ?>
										
										
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
                                <div class="col-md-12">
									<div class="panel collapsed panel-filled panel-c-success">
										<div class="panel-heading">
											<div class="panel-tools">
												<a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
												<a class="panel-close"><i class="fa fa-times"></i></a>
											</div>
											Источники посетителей на Вашего сайта
										</div>
										<div class="panel-body">
											<?php if(@$json['ga:users']['ga:source']){ ?>
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:users']['ga:source'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											
											<h2>По времени нахождения по сайту</h2>
											
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:timeOnPage']['ga:source'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											
											<?php }else{ ?>
												<center><h2>Пока нет записей</h2></center>
											<?php } ?>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
                                <div class="col-md-12">
									<div class="panel collapsed panel-filled panel-c-success">
										<div class="panel-heading">
											<div class="panel-tools">
												<a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
												<a class="panel-close"><i class="fa fa-times"></i></a>
											</div>
											Переходы из социальных сетей
										</div>
										<div class="panel-body">
											<?php if(@$json['ga:users']['ga:socialNetwork']){ ?>
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:users']['ga:socialNetwork'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<h2>По времени нахождения по сайту</h2>
											
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:timeOnPage']['ga:socialNetwork'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<?php }else{ ?>
												<center><h2>Пока нет записей</h2></center>
											<?php } ?>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="row">
                                <div class="col-md-12">
									<div class="panel collapsed panel-filled panel-c-success">
										<div class="panel-heading">
											<div class="panel-tools">
												<a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
												<a class="panel-close"><i class="fa fa-times"></i></a>
											</div>
											Города из которых пришли посетители
										</div>
										<div class="panel-body">
											<?php if(@$json['ga:users']['ga:city']){ ?>
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:users']['ga:city'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<h2>По времени нахождения по сайту</h2>
											
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:timeOnPage']['ga:city'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<?php }else{ ?>
												<center><h2>Пока нет записей</h2></center>
											<?php } ?>
										</div>
									</div>
								</div>
							</div>
							
							
							
							
							
							
							
							
							<div class="row">
                                <div class="col-md-12">
									<div class="panel collapsed panel-filled panel-c-success">
										<div class="panel-heading">
											<div class="panel-tools">
												<a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
												<a class="panel-close"><i class="fa fa-times"></i></a>
											</div>
											Страницы входа на сайт
										</div>
										<div class="panel-body">
											<?php if(@$json['ga:users']['ga:pagePath']){ ?>
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:users']['ga:pagePath'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<h2>По времени нахождения по сайту</h2>
											
											<table class="table table-bordered">
												<thead>
												<tr>
													<th>Название</th>
													<th>Кол-во</th>
												</tr>
												</thead>
												<tbody>
												<?php foreach ($json['ga:timeOnPage']['ga:pagePath'] as $line): ?>
													<tr>
														<td><?=$line[0]?></td>
														<td width="100px"><?=(int)$line[1]?></td>
													</tr>
												<?php endforeach; ?>
												</tbody>
											</table>
											
											<?php }else{ ?>
												<center><h2>Пока нет записей</h2></center>
											<?php } ?>
										</div>
									</div>
								</div>
							</div>