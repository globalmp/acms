<?php

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Users;
use app\models\Brands;
use app\models\Servers;
use app\models\Categorys;
use app\models\Providers;
use app\models\Products;
use app\models\Row_categorys;
use app\models\Vars;
use app\models\Vars_data;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
use yii\widgets\VarsDisplay;

$this->title = 'Добавить страницу';
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
	<?= Html::a('Ко всем страницам',['pages/index'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

    <?= Html::a('Добавление новой страницы',['pages/add'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

</div>
                            <h3>Добавление новой страницы</h3>
                            <small>
                                Добавление / редактрование страниц ваших сайтов.
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
																$rows__ = Row_categorys::find()->where(['action'=>'pages_'.$model->id,'server_id'=>$model->server_id])->all();
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
                                                            <div class="parentto">
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
	
	
	
	
	
	
	

                <div class="col-md-12">




                    <div class="tabs-container">


                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true">Основное</a></li>
                            <li><a data-toggle="tab" href="#tab-2" aria-expanded="false">МЕТА - дата (SEO-настройки)</a></li>
							<li><a data-toggle="tab" href="#tab-3" aria-expanded="false">Дополнительные параметры</a></li>
                        </ul>
                        <div class="tab-content">

<div id="tab-3" class="tab-pane">
<div class="panel-body">

<?php

	$vars = Vars::find()->where(['action'=>'pages'])->all();
	$arr = Vars_data::find()->where(['action'=>'pages_'.@$model->id])->all();
	$values = []; 
	foreach( $arr as $var ) if( trim( $var->data ) != '') $values[ $var->var_id ][md5(trim($var->data))] = trim($var->data);
	foreach( $vars as $var )
		echo VarsDisplay::widget(['params' => $var, 'value' =>  $values[ $var->id ] ]);

?>

</div>
</div>
									
									


                            <div id="tab-2" class="tab-pane">
                                <div class="panel-body">


                                    <div class="row">

                                        <div class="form-group col-lg-6">
                                            <?= $form->field($model, 'alt')->textInput(['placeholder'=>'Красивае название страницы латиницей'])->label('ALT-Вашей страницы'); ?>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <?= $form->field($model, 'meta_title')->textInput(['placeholder'=>'META-заголовок'])->label('META-заголовок'); ?>
                                        </div>

                                    </div>

                                    <div class="row">
                                    <div class="form-group col-lg-6">
                                     <?php echo $form->field($model, 'meta_keywords')->textArea(['placeholder'=>'META-ключевые слова через запятую','style'=>'width:100%;','maxlength' => 1024, 'rows' => 3, 'cols' => 50])
                                     ->label('META-ключевые слова'); ?>
                                    </div>
                                    <div class="form-group col-lg-6">
                                     <?php echo $form->field($model, 'meta_description')->textArea(['placeholder'=>'1 - 2 предложения, meta-описание данной страницы','style'=>'width:100%;','maxlength' => 1024, 'rows' => 3, 'cols' => 50])
                                     ->label('Meta-описание'); ?>
                                    </div>
                                    </div>


                                </div>
                            </div>



                        
                            <div id="tab-1" class="tab-pane active">













                    <div class="">

                        <div class="panel-body">









                            <div class="row">
                                <div class="form-group col-lg-8">










                        	<div class="row">


                                <div class="form-group col-lg-4">
                                <label>Сайт (сервер)</label>
                                <?php 
                                $arr = Servers::find()->where(['state'=>'1'])->all();
                                echo Html::activeDropDownList($model, 'server_id',
                                      ArrayHelper::map($arr, 'id', 'name'), ['class'=>'select2 ppcategory']) ?>
                                </div>

                                <div class="form-group col-lg-4">
                                <label>Категория</label>
                                <div id="parentto">
                                <?php
                                    $servers = Servers::find()->all();
                                    foreach($servers as $server){
                                        $categorys = Categorys::find()->where(['server_id'=>$server->id])->all();
                                        if( count( $categorys ) > 0 && $model->category_id == $server->id ){
                                            $select = "<select name=\"Pages[category_id]\" class=\"select2\">
                                            <option value=\"0\">Без родителя</option>";
                                            foreach($categorys as $cat){
                                                $select .= "<option ".(($cat->id == $model->category_id)?"SELECTED":"")." value=\"".$cat->id."\">".$cat->title."</option>";
                                            }
                                            $select .= "</select>";
                                            echo $select;
                                        }
                                    }

                                ?>
                                </div>
                                </div>
								
								
									<div class="form-group col-lg-4">
		<label for="vars-def">&nbsp;</label>
		<a class="btn btn-w-md btn-success" style="width:100%;" name="add-button" onClick="$('#myModal_categorys').modal('show'); return false;" href="#">Выберите категории</a>
	</div>
								
								
								</div>
								<div class="row">
								
                                <div class="form-group col-lg-4">
                                <label>Шаблон</label>
                                <div id="templateto">
                                <?php
                                    $servers = Servers::find()->all();
                                    foreach($servers as $server){
                                        $dir    = dirname(__FILE__) . '/../gs/' . $server->host;
                                        if( @is_dir( $dir ) == true && $model->server_id == $server->id ){
                                            $files = scandir($dir, 1);
                                            $tpls = array();
                                            for( $i = 0; $i < count( $files ); $i++ )
                                                if( @preg_match( "/.php/i", $files[$i] ) ) 
                                                    $tpls[ $files[$i] ] = $files[$i];
                                            $select = "<select name=\"Pages[template]\" class=\"select2\">
                                            <option value=\"default\">По умолчанию</option>";
                                            foreach($tpls as $tpl){
                                                $select .= "<option ".(($tpl == $model->template)?"SELECTED":"")." value=\"".$tpl."\">".$tpl."</option>";
                                            }
                                            $select .= "</select>";
                                            echo $select;
                                        }
                                    }
                                ?>
                                </div>
                                </div>
                                <div class="form-group col-lg-4">
<label>Дата</label>
<?php 

if( $model->add_date > 0 )
$val = date( "d-m-Y H:i", $model->add_date );
else $val = date( "d-m-Y H:i" );

echo Datetimepicker::widget([
    'model' => $model,
    'attribute' => 'add_date',
    'options' => [
        'lang' => 'ru',
        //'theme' => 'dark',
        'value' => $val,
        'placeholder' => 'Выберите дату...',
        'format' => 'd-m-Y h:i',
    ]
]);
?>
 </div>


</div>
<div class="row">
	                            <div class="form-group col-lg-12">
	                                <?= $form->field($model, 'title')->textInput(['placeholder'=>'Заголовок вашего материала'])->label('Заголовок статьи'); ?>
	                            </div>

                                


</div>



<div class="row">
<div class="form-group col-lg-12">
 <?php echo $form->field($model, 'short_story')->textArea(['placeholder'=>'1 - 2 абзаца о новости или еще что-то там...','style'=>'width:100%;','maxlength' => 1024, 'rows' => 5, 'cols' => 50])
 ->label('Краткое содержание'); ?>
</div>
</div>

<div class="row margin-bottom">
<div class="form-group col-lg-12">
 <?php echo $form->field($model, 'full_story')->textArea(['class'=>'tinymce-editor','placeholder'=>'1 - 2 абзаца о новости или еще что-то там...','style'=>'width:100%;','maxlength' => 1024, 'rows' => 15, 'cols' => 50])
 ->label('Краткое содержание'); ?>
</div>
</div>



<div class="row margin-bottom">







                                 <div class="form-group col-lg-6">
                                <label>Ответственный за страницу</label>
                                <?php
                                    if( $model->owner_id <= 0 )
                                        $model->owner_id = Yii::$app->user->getId();
                                ?>
                                <?= Html::activeDropDownList($model, 'owner_id',
                                      ArrayHelper::map(Users::find()->where(['state'=>'1'])->all(), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>







</div>


</div>
<div class="col-lg-4">


<div class="panel panel-filled panel-c-success">
<div class="panel-body">

                                <div class="form-group col-lg-12 imgBlock">
                                <label>Связь с продуктом</label>
                                <?php 
                                $arr = Products::find()->where(['state'=>'1'])->all();
                                $els = array();
                                $els[] = array('id'=>'','name'=>'Нет продукта');
                                foreach( $arr as $el ) $els[] = $el;
                                echo Html::activeDropDownList($model, 'product_id',
                                      ArrayHelper::map($els, 'id', 'name'), ['class'=>'select2']) ?>
                                </div>
</div></div>



<div class="panel panel-filled">
<div class="panel-body">


<script src="/views/layouts/uploader/js/vendor/jquery.ui.widget.js"></script>
<script src="/views/layouts/uploader/js/jquery.iframe-transport.js"></script>
<script src="/views/layouts/uploader/js/jquery.fileupload.js"></script>

<input type="hidden" name="route" value="<?= Yii::$app->controller->route; ?>">


    <!-- The fileinput-button span is used to style the file input field as button -->
    <span class="btn btn-success fileinput-button" style="width:100%;margin-bottom:10px;">
        <i class="glyphicon glyphicon-plus"></i>
        <span>Выберите файл для загрузки...</span>
        <!-- The file input field used as target for the file upload widget -->
        <input id="fileupload" type="file" name="files[]" multiple>
    </span>

    <!-- The global progress bar -->
    <div id="progress" class="progress" style="border-radius:0px;">
        <div class="progress-bar progress-bar-success"></div>
    </div>
    <!-- The container for the uploaded files -->
    <div id="files" class="files row draggable-container2" style="z-index:1;">
        


<?php if( @$images ): ?>
<?php foreach ($images as $img): ?>
<div class="col-md-6" id="file_id_<?= $img->id; ?>" style=" text-align:center;">
	<input type="hidden" id="data_input_<?= $img->id; ?>" value="<?= $img->original; ?>">
    <div class="panel-body" style="padding:0px; margin-bottom:10px;">
        <div ondblclick="$('#data_input_<?= $img->id; ?>').CopyToClipboard(); goodCopy();" style="height:80px;border-radius:3px;overflow:hidden;text-align:center; position:relative;; border:1px solid #1bbf89; background-color:#494b54;">
            <img src="<?= $img->mini; ?>" style="margin:0 auto; width:100%;" class=" img-responsive  " />
        </div>
    <div style="margin:3px;position:relative;z-index:9999;">
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

</div></div>






</div></div>




                        </div>
                    </div>

                </div>

</div></div>


</div></div>













<?= Html::submitButton('Добавить / обновить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>

<?php ActiveForm::end(); ?>

                
            </div>



                                <?php
                                    $servers = Servers::find()->all();
                                    foreach($servers as $server){
                                        $dir    = dirname(__FILE__) . '/../gs/' . $server->host;
                                        if( @is_dir( $dir ) == true ){
                                            $files = scandir($dir, 1);
                                            $tpls = array();
                                            for( $i = 0; $i < count( $files ); $i++ )
                                                if( @preg_match( "/.php/i", $files[$i] ) ) 
                                                    $tpls[ $files[$i] ] = $files[$i];
                                            $select = "<div data-host=\"template".$server->id."\" style=\"display:none;\">";
                                            $select .= "<select name=\"Pages[template]\">
                                            <option value=\"default\">По умолчанию</option>";
                                            foreach($tpls as $tpl){
                                                $select .= "<option ".(($tpl == $model->template)?"SELECTED":"")." value=\"".$tpl."\">".$tpl."</option>";
                                            }
                                            $select .= "</select></div>";
                                            echo $select;
                                        }else{
                                            $select = "<div data-host=\"template".$server->id."\" style=\"display:none;\">";
                                            $select .= "</div>";
                                            echo $select;
                                        }
                                    }
                                ?>



                <?php
                    $servers = Servers::find()->all();
                    foreach($servers as $server){
                        $categorys = Categorys::find()->where(['server_id'=>$server->id])->all();
                        $select = "<div data-host=\"server".$server->id."\" style=\"display:none;\">";
                        if( count( $categorys ) > 0 ){
                            $select .= "<select name=\"Pages[category_id]\">
                            <option value=\"0\">Без родителя</option>
                            ";
                            foreach($categorys as $cat){
                                $select .= "<option ".(($cat->id == $model->category_id)?"SELECTED":"")." value=\"".$cat->id."\">".$cat->title."</option>";
                            }
                            $select .= "</select>";
                        }
                        $select .= "</div>";
                        echo $select;
                    }

                ?>
				
				
				
				
				
				
				
				
				<?php
                    $servers = Servers::find()->all();
                    foreach($servers as $server){
                        $categorys = Categorys::find()->where(['server_id'=>$server->id])->all();
                        $select = "<div class=\"row ads_cat\" data-host=\"server".$server->id."category\" style=\"display:none;\">";
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