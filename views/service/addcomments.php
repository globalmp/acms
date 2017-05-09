<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Servers;
use app\models\Categorys;
use app\models\Menu;
use app\models\Vars;
use app\models\Row_categorys;
use app\models\Images;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
use yii\db\ActiveRecord;

$this->title = 'Добавление новой категории';
$this->params['breadcrumbs'][] = $this->title;



?>



            <div class="row">
                <div class="col-lg-12">
                    <div class="view-header">
                        <div class="header-icon">
                            <i class="pe page-header-icon pe-7s-note2"></i>
                        </div>
                        <div class="header-title">
                        <div class="pull-right">
	                       <?= Html::a('Ко всем сайтам',['service/commentsindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                        </div>
                            <h3>Добавление или редактирование комментариев</h3>
                            <small>
                                Добавление или редактирование новых комментариев в системе управление контентам
                            </small>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>

                <div class="row">


    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => ['data-protected'=>'true'],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => []
        ],
    ]); ?>
<input type="hidden" name="Comments[date]" value="<?= time(); ?>">
<input type="hidden" name="Comments[parent_id]" value="<?= ((@$_GET['parent_id'])?$_GET['parent_id']:0); ?>">
                <div class="col-md-12">
                
                
                
                
                
                
                
                
                        <div class="tabs-container">


                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true">Основное</a></li>
                        </ul>
                        <div class="tab-content">
                
                
                
                
                
                
                
                
                
                
                <div id="tab-1" class="tab-pane  active">
                
                
                    <div>
                   

                        <div class="panel-body ">
                         <div class=" col-lg-12">


<div class="row">
    <div class="form-group col-lg-4">
        <?= $form->field($model, 'name')->textInput()->label('Имя пользователя'); ?>
    </div>
	
	<div class="form-group col-lg-4">
	<label>Таблица для связи</label>
	<?php 
	if( @$_GET['action'] && !@$model->action ) $model->action = $_GET['action'];
	echo Html::activeDropDownList($model, 'action',
		  ArrayHelper::map($tables, 'id', 'name'), ['class'=>'form-control']) ?>
	</div>
	
	<div class="form-group col-lg-4">
        <?= $form->field($model, 'row_id')->textInput((($_GET['row_id'])?['value'=>$_GET['row_id']]:[]))->label('Номер записи в таблице'); ?>
    </div>
</div>


<div class="row">
<div class="form-group col-lg-12">
 <?php echo $form->field($model, 'text')->textArea(['placeholder'=>'Текст сообщения','style'=>'width:100%;','maxlength' => 1024, 'rows' => 5, 'cols' => 50])
 ->label('Сообщение'); ?>
</div>
</div>




                            <div class="row">
      



                                <div class="form-group col-lg-4">
                                <label>Сайт (сервер)</label>
                                <?php 
                                $arr = Servers::find()->where(['state'=>'1'])->all();
                                if( @$_GET['server_id'] && !@$model->server_id ) $model->server_id = $_GET['server_id'];
								echo Html::activeDropDownList($model, 'server_id',
                                      ArrayHelper::map($arr, 'id', 'name'), ['class'=>'select2 ppcategory']) ?>
                                </div>




                                <div class="form-group col-lg-4">
                                <label>Состояние</label>
                                <?= Html::activeDropDownList($model, 'state',
                                      ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>

								
								<div class="form-group col-lg-4">
								 <?= $form->field($model, 'email')->textInput()->label('Email - пользователя'); ?>
								</div>
								
								
                            </div>


                    
                    </div>
                        
                        

                    </div>
                    
                    
                    
                    
                    
                    </div>
                    


                    
                  </div> 
				  
				  
				  
				  
				  
				  
				  
				  
				  

</div>
                    
                    
                    
                                <div class="modal fade" id="myModal_categorys" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header text-center">
                                                <h4 class="modal-title">Выбор категорий</h4>
                                                <small>Выберите категории для связи карточки</small>
                                            </div>
                                            <div class="modal-body">

                                                    <div class="row">
                                                        <div class="col-lg-12">
															<div id="cats_list">

															
															<?php
																$rows__ = Row_categorys::find()->where(['action'=>'vars_'.$model->id,'server_id'=>$model->server_id])->all();
																foreach($rows__ as $row__){
																$cat = Categorys::find()->where(['id'=>$row__->category_id])->one();
																if( $cat->id > 0 )
																echo '
																<div class="row_____">
																	<div class="col-sm-11">
																		'.$cat->title.'
																	</div>
																	<div class="col-sm-1">
																		<input type="hidden" name="AddCategorys[]" value="'.$cat->id.'">
																		<button type="button"  onClick="deleteCategoryButton(this)" class="btn btn-danger btn-xs">X</button>
																	</div>
																	<div style="clear:both;"></div><hr/>
																</div>
																	';
																}
															?>		

															</div>
                                                            <div id="parentto">
															</div>
															<br><br>
															<small>Хотим обратить Ваше внимание на то, что для начала выборки категорий, вы должны выбрать сервер (он же ваш сайт)</small>
                                                        </div> 
                                                    </div>
                                    <div class="clearfix"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть окно</button>
                                                
												
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                    
                    
                    
                    
                    
                    
                    
 
                    
                    <?= Html::submitButton('Добавить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                    

                    
                    
                </div> </div> <!--   END BLOCK TABS   -->
                    
                  
                    
                    

                </div>

				
				
				
				
				
				
				
				
<?php ActiveForm::end(); ?>

                









            </div>
			
			
			    <?php
				

                    $servers = Servers::find()->all();
                    foreach($servers as $server){
                        $categorys = Categorys::find()->where(['server_id'=>$server->id])->all();
                        $select = "<div class=\"row ads_cat\" data-host=\"server".$server->id."\" style=\"display:none;\">";
                        if( count( $categorys ) > 0 ){
                            $select .= "<div class=\"col-sm-11\"><select name=\"AddCategorys[category_id]\" id=\"server__".$server->id."\">
                            <option value=\"0\">Без родителя</option>
                            ";
                            foreach($categorys as $cat){
                                $select .= "<option value=\"".$cat->id."\">".$cat->title."</option>";
                            }     
                            $select .= "</select></div><div class=\"col-sm-1\"><input type=\"button\" onClick=\"addCategoryButton('server__".$server->id."');\" class=\" btn btn-success\" value=\"+\"></div>";
                        }
                        $select .= "</div>";
                        echo $select;
                    }

                ?>
			
			