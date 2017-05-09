<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Servers;
use app\models\Categorys;
use app\models\Images;
use app\models\Menu;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;

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
	                       <?= Html::a('Ко всем виджетам-категориям',['service/categoryindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                        </div>
                            <h3>Добавление новой категории</h3>
                            <small>
                                Добавление новой категории к Вашему серверу (сайту), будьте внимательны при заполнениии всех полей.
                            </small>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>

                <div class="row">


    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => [],
        'fieldConfig' => [
            'template' => "{label}{input}",
            'labelOptions' => []
        ],
    ]); ?>




                <div class="col-md-12">

                   <div class="tabs-container">

                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true">Основное</a></li>
                            <li><a data-toggle="tab" href="#tab-3" aria-expanded="false">МЕТА - дата (SEO-настройки)</a></li>
                        </ul>
                        <div class="tab-content">





                <div id="tab-1" class="tab-pane  active">
                    <div>
                        <div class="panel-body ">
                         <div class=" col-lg-8">








<div class="row">
                                <div class="form-group col-lg-4">
                                <label>Сайт (сервер)</label>
                                <?= Html::activeDropDownList($model, 'server_id',
                                      ArrayHelper::map(Servers::find()->where(['state'=>'1'])->all(), 'id', 'name'), ['class'=>'select2 ppcategory']) ?>
                                </div>

                                <div class="form-group col-lg-4">
                                <label>Родительская категория</label>
                                <div id="parentto">
                                    
                                <?php
                                    $servers = Servers::find()->all();
                                    foreach($servers as $server){
                                        $categorys = Categorys::find()->where(['server_id'=>$server->id])->all();
                                        if( count( $categorys ) > 0 && $model->server_id == $server->id ){
                                            $select = "<select name=\"Categorys[parent_id]\" class=\"select2\">
                                            <option value=\"0\">Без родителя</option>";
                                            foreach($categorys as $cat){
                                                $select .= "<option ".(($cat->id == $model->parent_id)?"SELECTED":"")." value=\"".$cat->id."\">".$cat->title."</option>";
                                            }
                                            $select .= "</select>";
                                            echo $select;
                                        }
                                    }

                                ?>


                                </div>
                                </div>




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
                                            $select = "<select name=\"Categorys[template]\" class=\"select2\">
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




</div>
<!-- TITLE BLOCKS -->

<div class="row">

    <div class="form-group col-lg-12">
        <?= $form->field($model, 'title')->textInput()->label('Название новой категории'); ?>
    </div>



</div>


<!-- DESCR BLOCKS -->

<div class="row">
    <div class="form-group col-lg-12">
        <?php 
        echo $form->
            field($model, 'text')->
            textArea([
                'class'=>'tinymce-editor',
                'placeholder'=>'Текст',
                'style'=>'width:100%;',
                'maxlength' => 1024, 
                'rows' => 8, 
                'cols' => 50])
            ->label('Краткое содержание категории для вывода'); 
        ?>
    </div>
</div>







<div class="row">


                            <div class="form-group col-lg-4">
                                <label>Состояние</label>
                                <?= Html::activeDropDownList($model, 'state',
                                      ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>
                                <div class="form-group col-lg-4">
                                    <?= $form->field($model, 'position')->textInput()->label('Позиция'); ?>
                                </div>
                                <div class="form-group col-lg-4">
                                    <?= $form->field($model, 'pear_page')->textInput()->label('На страницу'); ?>
                                </div>
                            </div>
</div>




                         
                         <div class=" col-lg-4">

                        
                        <!--  START IMAGES -->
                        
                        


<script src="/views/layouts/uploader/js/vendor/jquery.ui.widget.js"></script>
<script src="/views/layouts/uploader/js/jquery.iframe-transport.js"></script>
<script src="/views/layouts/uploader/js/jquery.fileupload.js"></script>


    <input type="hidden" name="route" value="<?= Yii::$app->controller->route; ?>">

    <!-- The fileinput-button span is used to style the file input field as button -->
    <span class="btn btn-success fileinput-button" style="width:100%;margin-bottom:10px;">
        <i class="glyphicon glyphicon-plus"></i>
        <span>Загрузка логотипа...</span>
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
            $images = Images::find()->where(['route_id'=>@$model->id,'route'=>'service/updatecategory'])->orderBy(['position'=>SORT_ASC])->all();
          ?>

          <?php if( @$images ): ?>
          <?php foreach ($images as $img): ?>
          <div class="col-md-6" id="file_id_<?= $img->id; ?>" style=" text-align:center;">
              <div class="panel-body" style="padding:0px; margin-bottom:10px;">
                  <div style="height:80px;border-radius:3px;overflow:hidden;text-align:center; position:relative;; border:1px solid #1bbf89; background-color:#494b54;">
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





                        
                        
                        
                        <!-- END IMAGES -->
                        
                        
                        
                    </div>
                         
                         
                         
                         
                         
                         
                        </div>
                    </div>
                </div>

                <div id="tab-3" class="tab-pane">
                    <div class="">
                          <div class="panel-body">
                                <div class="row">
                             


     <div class="form-group col-lg-12">
        <?= $form->field($model, 'alt')->textInput()->label('ALT - вашей категории'); ?>
    </div>

    <div class="form-group col-lg-12">
        <?= $form->field($model, 'meta_title')->textInput()->label('META-TITLE новой категории'); ?>
    </div>
 
 
 
    <div class="form-group col-lg-12">
        <?php 
        echo $form->
            field($model, 'meta_decription')->
            textArea([
                'placeholder'=>'до 150 знаков, желательно',
                'style'=>'width:100%;',
                'maxlength' => 1024, 
                'rows' => 15, 
                'cols' => 50])
            ->label('META содержание'); 
        ?>
    </div>
                             
                                
                                
                               </div>
                              </div>
                          </div>
                      </div>







                    <?= Html::submitButton('Добавить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                    

                    
                    
                </div> </div> <!--   END BLOCK TABS   -->
                    
                  
                    
                    

                </div>

<?php ActiveForm::end(); ?>





                



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
                                            $select .= "<select name=\"Categorys[template]\">
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
                            $select .= "<select name=\"Categorys[parent_id]\">
                            <option value=\"0\">Без родителя</option>
                            ";
                            foreach($categorys as $cat){
                                $select .= "<option ".(($cat->id == $model->parent_id)?"SELECTED":"")." value=\"".$cat->id."\">".$cat->title."</option>";
                            }
                            $select .= "</select>";
                        }
                        $select .= "</div>";
                        echo $select;
                    }

                ?>






            </div>