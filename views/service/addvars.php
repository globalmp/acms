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
	                       <?= Html::a('Ко всем сайтам',['service/varsindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                        </div>
                            <h3>Добавление или редактирование переменных</h3>
                            <small>
                                Добавление новых переменных для удобного вывода данных в необходимых местах
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

                <div class="col-md-12">
                
                
                
                
                
                
                
                
                        <div class="tabs-container">


                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true">Основное</a></li>
                        </ul>
                        <div class="tab-content">
                
                
                
                
                
                
                
                
                
                
                <div id="tab-1" class="tab-pane  active">
                
                
                    <div>
                   

                        <div class="panel-body ">
                         <div class=" col-lg-8">


<div class="row">
    <div class="form-group col-lg-4">
        <?= $form->field($model, 'name')->textInput()->label('Название в шапке'); ?>
    </div>
	
	<div class="form-group col-lg-4">
	<label>Таблица для связи</label>
	<?= Html::activeDropDownList($model, 'action',
		  ArrayHelper::map($tables, 'id', 'name'), ['class'=>'form-control']) ?>
	</div>
	
	<div class="form-group col-lg-4">
        <?= $form->field($model, 'alt')->textInput()->label('Уникальное имя (не обяз.)'); ?>
    </div>
</div>

<div class="row">
	<div class="form-group col-lg-4">
        <?= $form->field($model, 'def')->textInput()->label('По умолчанию'); ?>
    </div>
	<div class="form-group col-lg-4">
		<label for="vars-def">&nbsp;</label>
		<a class="btn btn-w-md btn-success" style="width:100%;" name="add-button" onClick="$('#myModal_categorys').modal('show'); return false;" href="#">Выберите категории</a>
	</div>
	<div class="form-group col-lg-4">
	<label>Тип поля</label>

	

                                <?php
                                        $dir = dirname(__FILE__) . '/../vars';
                                            $files = scandir($dir, 1);
                                            $tpls = array(); 
                                            for( $i = 0; $i < count( $files ); $i++ )
                                                if( @preg_match( "/.php/i", $files[$i] ) ) 
                                                    $tpls[ $files[$i] ] = $files[$i];
                                            $select = "<select name=\"Vars[type]\" class=\"select2\">";
                                            foreach($tpls as $tpl){
                                                $select .= "<option ".(($tpl == $model->type)?"SELECTED":"")." value=\"".$tpl."\">".$tpl."</option>";
                                            }
                                            $select .= "</select>";
                                            echo $select;
                                ?>


	
	
	</div>
</div>

<div class="row">
<div class="form-group col-lg-12">
 <?php echo $form->field($model, 'params')->textArea(['placeholder'=>'Текст или параметры переменной','style'=>'width:100%;','maxlength' => 1024, 'rows' => 5, 'cols' => 50])
 ->label('Параметры'); ?>
</div>
</div>




                            <div class="row">
      



                                <div class="form-group col-lg-6">
                                <label>Сайт (сервер)</label>
                                <?php 
                                $arr = Servers::find()->where(['state'=>'1'])->all();
                                echo Html::activeDropDownList($model, 'server_id',
                                      ArrayHelper::map($arr, 'id', 'name'), ['class'=>'select2 ppcategory']) ?>
                                </div>




                                <div class="form-group col-lg-6">
                                <label>Состояние</label>
                                <?= Html::activeDropDownList($model, 'state',
                                      ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>

                            </div>


                    
                    </div><div class=" col-lg-4">

                        
                        <!--  START IMAGES -->
                        
                        


<script src="/views/layouts/uploader/js/vendor/jquery.ui.widget.js"></script>
<script src="/views/layouts/uploader/js/jquery.iframe-transport.js"></script>
<script src="/views/layouts/uploader/js/jquery.fileupload.js"></script>


    <input type="hidden" name="route" value="<?= Yii::$app->controller->route; ?>">

    <!-- The fileinput-button span is used to style the file input field as button -->
    <span class="btn btn-success fileinput-button" style="width:100%;margin-bottom:10px;">
        <i class="glyphicon glyphicon-plus"></i>
        <span>Загрузка картинки...</span>
        <!-- The file input field used as target for the file upload widget -->
        <input id="fileupload" type="file" name="files[]" multiple>
    </span>

    <!-- The global progress bar -->
    <div id="progress" class="progress" style="border-radius:0px;">
        <div class="progress-bar progress-bar-success"></div>
    </div>
    <!-- The container for the uploaded files -->
    <div id="files" class="files row draggable-container2" style="z-index:1;">
        

          <?php
            $images = Images::find()->where(['route_id'=>@$model->id,'route'=>'service/updatevars'])->orderBy(['position'=>SORT_ASC])->all();
          ?>

          <?php if( @$images ): ?>
          <?php foreach ($images as $img): ?>
          <div class="col-md-6" id="file_id_<?= $img->id; ?>" style=" text-align:center;">
              <div class="panel-body" style="padding:0px; margin-bottom:10px;">
                  <div style="height:80px;border-radius:3px;overflow:hidden;text-align:center; position:relative;; border:1px solid #1bbf89; background-color:#494b54;">
                      <img src="<?= $img->mini; ?>" style="margin:0 auto; width:100%;" class=" img-responsive  " />
                  </div>
              <div style="margin:3px;position:relative;">
                  <input type="text" placeholder="alt" value="<?= $img->alt; ?>" id="data_alt_<?= $img->id; ?>" class="form-control input-sm m-t-sm">
                  <a href="javascript:void(0);" data-fileid="<?= $img->id; ?>" class="updatealt btn btn-xs btn-success" style="position:absolute; top:4px; right:4px;">OK</a>
              </div>
              <div style="margin:3px;" class="pull-left"><small><?= date("d-m-Y",$img->date); ?></small></div>
                  <div style="margin:3px;" class="pull-right"><a href="javascript:void(0);" data-fileid="<?= $img->id; ?>" style="" class="deletefile btn btn-xs btn-warning">Удалить</a></div>
              </div>
          </div>
          <?php endforeach; ?>
          <?php endif; ?>
     
     </div>





                        
                        
                        
                        <!-- END IMAGES -->
                        
                        
                        
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
			
			