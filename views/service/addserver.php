<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Servers;
use app\models\Categorys;
use app\models\Menu;
use app\models\Images;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;

$this->title = 'Добавление новой категории';
$this->params['breadcrumbs'][] = $this->title;

//recaptcha_site

?>



            <div class="row">
                <div class="col-lg-12">
                    <div class="view-header">
                        <div class="header-icon">
                            <i class="pe page-header-icon pe-7s-note2"></i>
                        </div>
                        <div class="header-title">
                        <div class="pull-right">
	                       <?= Html::a('Ко всем сайтам',['service/serverindex'], ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                        </div>
                            <h3>Добавление нового сайта</h3>
                            <small>
                                Добавляя новый сайт, будьте внимательные при заполнении всех полей, это залог правильной машрутизации системы.
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
                            <li><a data-toggle="tab" href="#tab-2" aria-expanded="false">МЕТА - дата (SEO-настройки)</a></li>
                            <li><a data-toggle="tab" href="#tab-3" aria-expanded="false">PUSH - уведомления</a></li>
							<li><a data-toggle="tab" href="#tab-4" aria-expanded="false">Yandex Метрика</a></li>
							<li><a data-toggle="tab" href="#tab-5" aria-expanded="false">Быстра форма + SMS</a></li>
							<li><a data-toggle="tab" href="#tab-6" aria-expanded="false">reCaptcha Google</a></li>
                        </ul>
                        <div class="tab-content">
                

				
				
				
				
<div id="tab-6" class="tab-pane">
<div>
<div class="panel-body ">
<div class=" col-lg-12">              
   
   <div class="row">
    <div class="form-group col-lg-6">
        <?= $form->field($model, 'recaptcha_site')->textInput()->label('Key'); ?>

		Получить токен можно здесь<br>
	<a target="_blank" href="https://www.google.com/recaptcha/admin#list">https://www.google.com/recaptcha/admin#list</a>
	
	</div>
	 
    <div class="form-group col-lg-6">
        <?= $form->field($model, 'recaptcha_key')->textInput()->label('Secret Key'); ?>

	</div>



</div>
   
</div>  
</div> 
</div> 
</div>  
				
				
				
				
				
				
				
				
				
				
				
<div id="tab-5" class="tab-pane">
<div>
<div class="panel-body ">
<div class=" col-lg-12"> 
   

<div class="row">
<div class="form-group col-lg-4">
<label>Состояние чата</label>
<?= Html::activeDropDownList($model, 'chat',
ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
</div>

</div>


   
<div class="row">

<div class="form-group col-lg-4">
<?= $form->field($model, 'chat_button_text')->textInput()->label('Текст круглой кнопки'); ?>
</div>


<div class="form-group col-lg-2">
<label>Цвет формы</label>
<div class="bfh-colorpicker" data-name="Servers[chat_color_hex]"  data-color="<?php echo $model->chat_color_hex; ?>" data-close="false"></div>
</div>

<div class="form-group col-lg-2">
<label>Цвет текста кнопки</label>
<div class="bfh-colorpicker" data-name="Servers[chat_css_phone_button_text_color]"  data-color="<?php echo $model->chat_css_phone_button_text_color; ?>" data-close="false"></div>
</div>

<div class="form-group col-lg-2">
<label>Цвет фона кнопки</label>
<div class="bfh-colorpicker" data-name="Servers[chat_css_phone_button_color]"  data-color="<?php echo $model->chat_css_phone_button_color; ?>" data-close="false"></div>
</div>

<div class="form-group col-lg-2">
<label>Цвет иконки</label>
<div class="bfh-colorpicker" data-name="Servers[chat_css_button_icons_color]"  data-color="<?php echo $model->chat_css_button_icons_color; ?>" data-close="false"></div>
</div>





</div>



					<div class="panel panel-filled  <?php if( $model->chat_to_email == '' ) echo "panel-c-danger collapsed"; else echo "panel-c-success"; ?>">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
                                <a class="panel-close"><i class="fa fa-times"></i></a>
                            </div>
                            Настройки email для получения запросов
                        </div>
                        <div class="panel-body">
                            

							
							<div class="row">

							<div class="form-group col-lg-6">
							<?= $form->field($model, 'chat_to_email')->textInput()->label('Email - для получения ответов'); ?>
							</div>


							</div>
						
						</div>
                    </div>








					<div class="panel panel-filled panel-c-success <?php if( $model->chat_sms == 0 ) echo "panel-c-danger collapsed"; else echo "panel-c-success"; ?>">
                        <div class="panel-heading">
                            <div class="panel-tools">
                                <a class="panel-toggle"><i class="fa fa-chevron-up"></i></a>
                                <a class="panel-close"><i class="fa fa-times"></i></a>
                            </div>
                            Настройки номера для приема SMS
                        </div>
                        <div class="panel-body">
                            
							<div class="row">
							<div class="form-group col-lg-4">
							<label>Состояние SMS - уведомлений</label>
							<?= Html::activeDropDownList($model, 'chat_sms',
							ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
							</div>
							<div class="form-group col-lg-2">&nbsp;</div>
							<div class="form-group col-lg-4">Сумма на счету:&nbsp;<?php echo $balance; ?></div>
							</div>
							
							<div class="row">
							<div class="form-group col-lg-6">
							<?= $form->field($model, 'chat_sms_login')->textInput()->label('Логин к SMS-fly'); ?>
							<a href="https://sms-fly.com/" target="_blank">https://sms-fly.com/</a>
							</div>
							<div class="form-group col-lg-6">
							<?= $form->field($model, 'chat_sms_passwd')->textInput()->label('Пароль к SMS-fly'); ?>
							</div>
							</div>
							
							<div class="row">

							<div class="form-group col-lg-6">
							<?= $form->field($model, 'chat_phone')->textInput(['placeholder'=>'+380930000000'])->label('Номер для получения SMS'); ?>
							</div>

							</div>
						
						</div>
                    </div>






<div class="row">
    <div class="form-group col-lg-12">
        <?php 
        echo $form->
            field($model, 'chat_subject')->
            textArea([
                'placeholder'=>'Каждый отдел с новой строки. Формат Название|Телефон - при необходимости',
                'style'=>'width:100%;',
                'maxlength' => 10024, 
                'rows' => 5, 
                'cols' => 50])
            ->label('Каждый отдел с новой строки. Формат Название|Телефон - при необходимости'); 
        ?>
    </div>
</div>


<div class="row">

 
			
<div class="form-group col-lg-6">
<?= $form->field($model, 'form_input_placeholder')->textInput()->label('form_input_placeholder'); ?>
</div>

<div class="form-group col-lg-6">
<?= $form->field($model, 'form_input_placeholder_name')->textInput()->label('Текст ввода имени'); ?>
</div>

<div class="form-group col-lg-6">
<?= $form->field($model, 'form_input_placeholder_text')->textInput()->label('Текст ввода сообщения'); ?>
</div>

<div class="form-group col-lg-6">
<?= $form->field($model, 'form_input_placeholder_phone')->textInput()->label('Текст ввода телефона'); ?>
</div>

<div class="form-group col-lg-6">
<?= $form->field($model, 'ok_send')->textInput()->label('Сообщение об успешной отправки'); ?>
</div>
 
<div class="form-group col-lg-6">
<?= $form->field($model, 'form_submit_button')->textInput()->label('form_submit_button'); ?>
</div>


<div class="form-group col-lg-6">
<?= $form->field($model, 'window_title')->textInput()->label('Window title'); ?>
</div>

<div class="form-group col-lg-6">
<?= $form->field($model, 'phone_format')->textInput()->label('Формат маска телефона'); ?>
</div>

<div class="form-group col-lg-6">
<?= $form->field($model, 'department_link_text')->textInput()->label('Текст выбора департамента'); ?>
</div>






</div>

</div>  
</div> 
</div> 
</div> 

				




 
                
                
<div id="tab-4" class="tab-pane">
<div>
<div class="panel-body ">
<div class=" col-lg-12">              
   
   <div class="row">
    <div class="form-group col-lg-6">
        <?= $form->field($model, 'yandex_token')->textInput()->label('Token для Яндекс Метрики'); ?>

		Получить токен можно здесь<br>
	<a target="_blank" href="https://oauth.yandex.ru/authorize?response_type=token&client_id=dfa7cc881b3d4072b35160f0f28f26d6">https://oauth.yandex.ru/authorize?response_type=token&client_id=dfa7cc881b3d4072b35160f0f28f26d6</a>
	
	</div>
	 
    <div class="form-group col-lg-6">
        <?= $form->field($model, 'yandex_counter')->textInput()->label('ID - статистики'); ?>

	</div>



    <div class="form-group col-lg-12">
        <?php 
        echo $form->
            field($model, 'metrika_code')->
            textArea([
                'placeholder'=>'Вставьте сюда JavaCode отслеживания',
                'style'=>'width:100%;',
                'maxlength' => 10024, 
                'rows' => 5, 
                'cols' => 50])
            ->label('Яндекс.Метрика JavaCode отслеживания'); 
        ?>
    </div>
</div>
   
</div>  
</div> 
</div> 
</div>  
                
                
                
                
                <div id="tab-1" class="tab-pane  active">
                
                
                    <div>
                   

                        <div class="panel-body ">
                         <div class=" col-lg-8">
<div class="row">
    <div class="form-group col-lg-12">
        <?= $form->field($model, 'name')->textInput()->label('Название, внутреннее'); ?>
    </div>
</div>


<div class="row">
    <div class="form-group col-lg-6">
        <?= $form->field($model, 'site_name')->textInput()->label('Название в шапке'); ?>
    </div>
	<div class="form-group col-lg-6">
        <?= $form->field($model, 'site_slogan')->textInput()->label('Слоган в шапке'); ?>
    </div>
</div>


<div class="row">

    <div class="form-group col-lg-12">
        <?= $form->field($model, 'title')->textInput()->label('TITLE вашего сайта'); ?>
    </div>

</div>





                            <div class="row">
      


    <div class="form-group col-lg-6">
        <?= $form->field($model, 'host')->textInput()->label('Точный HOST сайта'); ?>
    </div>

    <div class="form-group col-lg-6">
        <?= $form->field($model, 'email')->textInput()->label('Почта (email)'); ?>
    </div>
	
	
	
	</div><div class="row">
	

                                <div class="form-group col-lg-4">
                                <label>Layout сайта</label>
                                <div id="templateto">
                                <?php

                                        $dir    = dirname(__FILE__) . '/../gs';
                                        if( @is_dir( $dir ) == true ){
                                            $files = scandir($dir, 1);
                                            $tpls = array();
                                            for( $i = 0; $i < count( $files ); $i++ )
                                                if( !@preg_match( "/.php/i", $files[$i] ) && $files[$i] != "." && $files[$i] != ".." ) 
                                                    $tpls[ $files[$i] ] = $files[$i];
                                            $select = "<select name=\"Server[layout]\" class=\"select2\">
                                            <option value=\"default\">По умолчанию</option>";
                                            foreach($tpls as $tpl){
                                                $select .= "<option ".(($tpl == $model->layout)?"SELECTED":"")." value=\"".$tpl."\">".$tpl."</option>";
                                            }
                                            $select .= "</select>";
                                            echo $select;
                                        }
                                ?>
                                </div>
                                </div>







                                <div class="form-group col-lg-4">
                                <label>Состояние</label>
                                <?= Html::activeDropDownList($model, 'state',
                                      ArrayHelper::map(array(array('id'=>0,'name'=>'Выключен'),array('id'=>1,'name'=>'Включен')), 'id', 'name'), ['class'=>'select2']) ?>
                                </div>
								
								
								<div class="form-group col-lg-4">
                                <label>HTTPS</label>
                                <?= Html::activeDropDownList($model, 'https',
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
            $images = Images::find()->where(['route_id'=>@$model->id,'route'=>'service/updateserver'])->orderBy(['position'=>SORT_ASC])->all();
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
                    


                    
                  </div> <!--  END TAB 1  -->  
                    
                    
                    
                    
<div id="tab-3" class="tab-pane">
<div class="">
<div class="panel-body">
<div class="row">                 
                  
                  
                    
                        <div class="form-group col-lg-6">
        <?= $form->field($model, 'google_id')->textInput()->label('GOOGLE ID'); ?>
    </div>

    <div class="form-group col-lg-6">
        <?= $form->field($model, 'google_key')->textInput()->label('GOOGLE KEY'); ?>
    </div>


</div>
<div class="row"> 
<div class="form-group col-lg-6">
<a href="https://console.firebase.google.com/" target="_blank">https://console.firebase.google.com/</a>  
</div>
</div>
</div></div></div>



                    
                    
                    
                    
                    
                    <div id="tab-2" class="tab-pane">
<div class="">
<div class="panel-body">
<div class="row">


    <div class="form-group col-lg-12">
        <?= $form->field($model, 'meta_title')->textInput()->label('META-TITLE новой категории'); ?>
    </div>
 
</div> 
    
<div class="row">

    <div class="form-group col-lg-6">
        <?php 
        echo $form->
            field($model, 'meta_description')->
            textArea([
                'placeholder'=>'до 150 знаков, желательно',
                'style'=>'width:100%;',
                'maxlength' => 1024, 
                'rows' => 5, 
                'cols' => 50])
            ->label('META содержание'); 
        ?>
    </div>

    <div class="form-group col-lg-6">
        <?php 
        echo $form->
            field($model, 'meta_keywords')->
            textArea([
                'placeholder'=>'до 150 знаков, через запятую',
                'style'=>'width:100%;',
                'maxlength' => 1024, 
                'rows' => 5, 
                'cols' => 50])
            ->label('META ключевые слова'); 
        ?>
    </div>

</div>

</div>
</div>
</div>
</div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
                    
                    <?= Html::submitButton('Добавить запись', ['class' => 'btn btn-w-md btn-success', 'name' => 'add-button']) ?>
                    

                    
                    
                </div> </div> <!--   END BLOCK TABS   -->
                    
                  
                    
                    

                </div>

<?php ActiveForm::end(); ?>

                









            </div>