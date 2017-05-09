<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\widgets\Menu;
use yii\helpers\Url;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900' rel='stylesheet' type='text/css'>


<script src="/tpl_files/vendor/jquery/dist/jquery.min.js"></script>
<script src="/tpl_files/jquery.copy-to-clipboard.js"></script>
<script src="/tpl_files/vendor/bootstrap/js/bootstrap.min.js"></script>




<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
<script>tinymce.init({ selector:'.tinymce-editor',

theme: 'modern',
  plugins: [
    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen',
    'insertdatetime media nonbreaking save table contextmenu directionality',
    'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
  ],
  toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
  image_advtab: true,
  templates: [
    { title: 'Test template 1', content: 'Test 1' },
    { title: 'Test template 2', content: 'Test 2' }
  ],
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css'
  ]

 });</script>

    <link href="/tpl_files/plugins/multiselect/css/multi-select.css"  rel="stylesheet" type="text/css" />
    <link href="/tpl_files/plugins/select2/select2.css" rel="stylesheet" type="text/css" />

    <!-- Vendor styles -->
    <link rel="stylesheet" href="/tpl_files/vendor/fontawesome/css/font-awesome.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/animate.css/animate.css"/>
    <link rel="stylesheet" href="/tpl_files/vendor/bootstrap/css/bootstrap.css?<?php echo rand(111,999); ?>"/>
    <link rel="stylesheet" href="/tpl_files/vendor/toastr/toastr.min.css"/>

<link rel="stylesheet" href="/tpl_files/vendor/toastr/toastr.min.css"/>

<!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
<link rel="stylesheet" href="/views/layouts/uploader/css/jquery.fileupload.css">

    <!-- App styles -->
    <link rel="stylesheet" href="/tpl_files/styles/pe-icons/pe-icon-7-stroke.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/pe-icons/helper.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/stroke-icons/style.css"/>
    <link rel="stylesheet" href="/tpl_files/styles/style.css">
    <link rel="stylesheet" href="/tpl_files/vendor/datatables/datatables.min.css"/>

	<!-- Bootstrap Form Helpers -->
    <link href="/tpl_files/css/bootstrap-form-helpers.min.css" rel="stylesheet" media="screen">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="/tpl_files/js/html5shiv.js"></script>
      <script src="/tpl_files/js/respond.min.js"></script>
    <![endif]-->
	
	
<?php $this->head() ?>

<script src="/tpl_files/vendor/jquery-ui/jquery-ui.min.js"></script>

</head>
<body>
<?php $this->beginBody() ?>
<!-- Wrapper-->
<div class="wrapper">

    <!-- Header-->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <div id="mobile-menu">
                    <div class="left-nav-toggle">
                        <a href="#">
                            <i class="stroke-hamburgermenu"></i>
                        </a>
                    </div>
                </div>
                <a class="navbar-brand" href="index.html">
                    SCRM
                    <span>v.1.0</span>
                </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <div class="left-nav-toggle">
                    <a href="">
                        <i class="stroke-hamburgermenu"></i>
                    </a>
                    
                </div>
                <ul class="nav navbar-left ff__">
                  <li id="useragent"></li>
                  <li id="serverpage"></li>
                  <li id="visittime"></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">

                    <li class="pages__" style="display:none;">
                      <select class="select2" id="select_top">
                        
                      </select>
                    </li>
                    <li class="pages__ s2" style="display:none;">
                      <a href="/service/categoryindex" data-protected="true" class="no__2 btn-sm btn btn-success">РЕДАКТ.</a>
                    </li>
                    <li class="pages__ s2" style="display:none;">
                      <a href="" class="no__2 btn-sm btn btn-success">НОВАЯ</a>
                    </li>
                    
                    
                    
                    <li class=" profil-link">

                        <?php

                         echo Html::beginForm(['/site/logout'], 'post', ['class' => 'navbar-form'])
                        . Html::submitButton(
                            'Выход (<span class="profile-address">' . Yii::$app->user->identity->username . '</span>)',
                            ['class' => 'btn btn-link']
                        ) . Html::endForm();

                        ?>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End header-->

    <!-- Navigation-->
    <aside class="navigation">
        <nav>


<?php

/*
echo Menu::widget([
    'options' => [ 'class' => 'nav luna-nav' ],
    'submenuTemplate' => "\n<ul class=\"nav nav-second collapse\" aria-expanded=\"true\">\n{items}\n</ul>\n",
    'items' => [
        // Important: you need to specify url as 'controller/action',
        // not just as 'controller' even if default action is used.
        ['label' => 'Главная страница', 'url' => ['site/index']],
        // 'Products' menu item will be selected as long as the route is 'product/index'
        ['label' => 'Заказы', 'url' => ['orders/index'] ],
        ['label' => 'Клиенты', 'url' => ['clients/index']],
        ['label' => 'Поставщики', 'url' => ['providers/index']],
        ['label' => 'Продукция', 'url' => ['products/index']],
        ['label' => 'Шаблоны писем', 'url' => ['template/index']],
        ['label' => 'PUSH Подписка', 'url' => ['service/subscribeindex']],
        ['label' => 'Управление сайтами', 
        'url' => ['sites/index'],
        'options'=>['class'=>'dropdown'],
        'template' => '<a href="#sites" data-toggle="collapse" aria-expanded="false">
            {label}<span class="sub-nav-icon"> <i class="stroke-arrow"></i> </span></a>',
        'items' => [
                ['label' => 'Меню', 'url' => ['service/menuindex']],
                ['label' => 'Страницы', 'url' => ['pages/index']],
                ['label' => 'Сервера', 'url' => ['service/serverindex']],
                ['label' => 'Категории', 'url' => ['service/categoryindex']],
                ['label' => 'Вывод', 'url' => ['service/outindex']],
				['label' => 'Комментарии', 'url' => ['service/commentsindex']],
				['label' => 'Переменные', 'url' => ['service/varsindex']],
				['label' => 'Статистика', 'url' => ['service/statistic']],
				['label' => 'Органайзер', 'url' => ['service/organizer']],
				['label' => 'Пользователи', 'url' => ['service/userindex']],
            ],
        'submenuTemplate' => "\n<ul id=\"sites\"  class='nav nav-second collapse' role='menu'>\n{items}\n</ul>\n",
        ],

        ['label' => 'База компаний', 'url' => ['base/index']],
        ['label' => 'Корпоративная почта', 'url' => ['mail/index']],
        ['label' => 'Статистика', 'url' => ['stat/index']],

    ],
]);
*/



echo Menu::widget([
    'options' => [ 'class' => 'nav luna-nav' ],
    'submenuTemplate' => "\n<ul class=\"nav nav-second collapse\" aria-expanded=\"true\">\n{items}\n</ul>\n",
    'items' => [
                ['label' => 'Меню', 'url' => ['service/menuindex']],
                ['label' => 'Страницы', 'url' => ['pages/index']],
                ['label' => 'Сервера', 'url' => ['service/serverindex']],
                ['label' => 'Категории', 'url' => ['service/categoryindex']],
                ['label' => 'Вывод', 'url' => ['service/outindex']],
				['label' => 'Комментарии', 'url' => ['service/commentsindex']],
				['label' => 'Переменные', 'url' => ['service/varsindex']],
				['label' => 'Статистика', 'url' => ['service/statistic']],
				['label' => 'Органайзер', 'url' => ['service/organizer']],
				['label' => 'Пользователи', 'url' => ['service/userindex']],
                ['label' => 'Я Программист', 'url' => ['service/dev']],

    ],
]);

?>













            <!--<ul class="nav luna-nav">
                <li class="nav-category">
                    Main
                </li>
                <li class="active">
                    <a href="index.html">Dashboard</a>
                </li>
            </ul>-->
        </nav>
    </aside>
    <!-- End navigation-->





<!-- Main content-->
    <section class="content">
            <div class="container-fluid">
                
             
                <div class="container">

                </div>
<?= $content ?>
            </div>
    </section>
    <!-- End main content-->

</div>
<!-- End wrapper-->

<!-- Vendor scripts -->







                                <div class="modal fade" id="myModal_protected" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header text-center">
                                                <h4 class="modal-title">Подтверждение действия</h4>
                                                <small>Внимание, системное сообщение</small>
                                            </div>
                                            <div class="modal-body">

                                                    <div class="row">
                                                        <div  class="col-lg-12">
                                                            Вы выполняете определенное действие которое требудет подтверждения.
                                                        </div>
                                                    </div>
                                    <div class="clearfix"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Выход</button>
                                                <a href="#" class="btn btn-accent">Подтверждаю</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>









<script src="/tpl_files/vendor/nestable/jquery.nestable.js"></script>

<script src="/tpl_files/vendor/toastr/toastr.min.js"></script>
<script src="/tpl_files/vendor/sparkline/index.js"></script>
<script src="/tpl_files/vendor/flot/jquery.flot.min.js"></script>
<script src="/tpl_files/vendor/flot/jquery.flot.resize.min.js"></script>
<script src="/tpl_files/vendor/flot/jquery.flot.spline.js"></script>
<script src="/tpl_files/plugins/flot-chart/jquery.flot.time.js"></script>
<script src="/tpl_files/vendor/datatables/datatables.min.js"></script>

<script src="/tpl_files/vendor/sparkline/index.js"></script>

 
<script type="text/javascript" src="/tpl_files/plugins/multiselect/js/jquery.multi-select.js"></script>
<script type="text/javascript" src="/tpl_files/plugins/jquery-quicksearch/jquery.quicksearch.js"></script>
<script src="/tpl_files/plugins/select2/select2.min.js" type="text/javascript"></script>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<!-- App scripts -->
<script src="/tpl_files/scripts/luna.js"></script>

<!-- Bootstrap Form Helpers -->
    <script src="/tpl_files/js/bootstrap-formhelpers.min.js"></script>


<style>
  .ui-state-highlight { height: 1.5em; width:1.5em; position:absolute; background-color:#fff; }
</style>


<script>


function getLogData(){

  $.get('<?= Url::to(['service/playlastlog']);?>','', function(response) {
    $("#useragent").text( response.ip + " - " + response.user_agent );
    $("#serverpage").html( '<b>'+response.time+'</b> ' + '<a target="_blank" class="no__" href="http://' + response.server_name + response.page + '">'+response.page+'</a>' );
    $("#visittime").text( response.referer );
  }, 'json');

}


function delete_this_node(el){
    $(el).parents('li:first').remove();
    $('#nestable').change();
    return false;
}

function update_this_node(el){
    var el = $(el).parents('li');
    //$('#nestable').change();
    return false;
}

function reDeclareDeleteLink(){
        $(".deletefile").on('click',function(){
            var file_id = $(this).attr('data-fileid');
            $.get('<?= Url::to(['service/filedelete']);?>/'+file_id, "", function(response) {
                $("#file_id_" + response.id).fadeOut('fast',function(){
                    $(this).remove();
                });
            }, 'json');
        });
        $(".updatealt").on('click',function(){
            var file_id = $(this).attr('data-fileid');
            var alt_text = $('#data_alt_' + file_id).val();
            $.get('<?= Url::to(['service/updatealt']);?>/'+file_id+"/"+alt_text, "", function(response) {
                $("#file_id_" + response.id).fadeOut('fast',function(){
                    $(this).fadeIn('fast');
                });
            }, 'json');
        });
        $( ".draggable-container" ).sortable( "refresh" );
}

function handleReorderElements(){


            var param = $('meta[name=csrf-param]').attr("content");
            var token = $('meta[name=csrf-token]').attr("content");
    var fieldData = $( ".draggable-container2" ).sortable( "serialize" );
    $.post('/service/saveposition/<?= @Yii::$app->request->get('id', 0);?>', param+"="+token+"&"+fieldData, function(response) {
        $("#file_id_" + response.id).fadeOut('fast',function(){
            $(this).fadeIn('fast');
        });
    }, 'json');
}

	function deleteCategoryButton(el){
		$(el).parents(".row_____").remove();
	}
	
	function addCategoryButton(id______){
		var cName = $("#"+id______).find(":selected").text();
		var cId = $("#"+id______).find(":selected").val();
		var a0 = '<div class="row_____">';
		var a1 = '<div class="col-sm-11">'+cName+'</div>';
		var a2 = '<div class="col-sm-1">';
		var a3 = '<input type="hidden" name="AddCategorys[]" value="'+cId+'">';
		var a4 = '<button type="button" onClick="deleteCategoryButton(this)" class="btn btn-danger btn-xs">X</button>';
		var a5 = '</div>';
		var a6 = '<div style="clear:both;"></div><hr/>';
		var aN = '</div>';
		$("#cats_list").append(a0+a1+a2+a3+a4+a5+a6+aN);
	}


    $(document).ready(function () {


	
	

	
	
	
	
	
	
	
	
setInterval(function(){

  //getLogData();
},3000);


jQuery.noConflict();






    if( $('#fileupload').length > 0 ){




        var element = ".draggable-container2";
        var handle = "img";
        var connect = "[class*=col]";
        $(element).sortable(
                {
                    handle: "img",
                    connectWith: ".draggable-container2 [class*=col]",
                    //tolerance: 'pointer',
                    //forcePlaceholderSize: false,
                   // distance: 1,
                    //scroll: 'true',
                    //forceHelperSize: false,
                    //revert: false,
                    stop: handleReorderElements,
                    //opacity: 0.5
                });
                //.disableSelection();



        reDeclareDeleteLink();

        'use strict';
        var url = window.location.hostname === 'blueimp.github.io' ?
                    '//jquery-file-upload.appspot.com/' : '/service/serverupload/<?= @Yii::$app->request->get('id', 0);?>';
        $('#fileupload').fileupload({
            url: url,
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) { 
                    var img = '<div class="col-sm-6" id="file_id_'+file.id+'" style="margin-bottom:10px; text-align:center;">'+
					'<input type="hidden" id="data_input_'+file.id+'" value="'+file.url+'">'+
                    '<div  ondblclick="$(\'#data_input_'+file.id+'\').CopyToClipboard(); goodCopy();" style="height:80px;border-radius:3px;overflow:hidden;text-align:center;border:1px solid #1bbf89; background-color:#494b54;">'+
                    '<img src="'+file.thumbnailUrl+'" style="margin:0 auto; width:100%;" class=" img-responsive">'+
                    '</div>'+
                    '<div style="margin:3px;position:relative;">'+
                    '<input type="text" placeholder="alt" id="data_alt_'+file.id+'" class="form-control input-sm m-t-sm">'+
                    '<a href="javascript:void(0);" data-fileid="'+file.id+'" class="updatealt btn btn-xs btn-success" style="position:absolute; top:4px; right:4px;">OK</a>'+
                    '</div>'+
                    '<div style="margin:3px;" class="pull-left"><small>'+file.date+'</small></div>'+
                    '<div style="margin:3px;" class="pull-right"><a href="javascript:void(0);" data-fileid="'+file.id+'" style="" class="deletefile btn btn-xs btn-warning">Удалить</a></div>'+
                    '</div>';
                    $(img).appendTo('#files');
                });
                reDeclareDeleteLink();
                $( ".draggable-container" ).sortable( "refresh" );
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    }






        // Log for nestable list

        if( $("#add-menu").length > 0 )
        {
            $("#add-menu").on('click',function(){
                $("#nestable").find("ol:first").append(
                        '<li class="dd-item" data-id="6" data-name="'+$("#menu-name").val()+'"  data-link="'+$("#menu-link").val()+'">'+
                        '<div class="dd-handle dd_h" style="cursor:normal;">'+
                        '    <span style="margin-right:20px;cursor:move;"><i class="fa fa-hand-pointer-o"> D`N`D</i></span>'+
                        '    <strong>'+$("#menu-name").val()+'</strong> <small>'+$("#menu-link").val()+'</small>'+
                        '    <a href="#" style="z-index:9999;" onClick="return delete_this_node(this);" class="delete_this_node pull-right btn btn-xs btn-danger">Удалить</a>'+
                        '</div>'+
                        '</li>'
                );
                $('#nestable').change();
            });
            var updateOutput = function (e) {
                var list = e.length ? e : $(e.target),
                        output = list.data('output');
                if (window.JSON) {
                    var json_data = window.JSON.stringify(list.nestable('serialize'));
                    var data_id = '<?= Yii::$app->request->get('id'); ?>';
                    $.get('<?= Url::to(['service/menujsonpositionsave']);?>', "id="+data_id+"&json_data=" + json_data, function(response) {
                        if( response.r == true ){
                            $("#nestable").html( response.data );
                                    $(".delete_this_node").on('mouseout',function(){
                                        $(".dd-handle").addClass("dd_h");
                                    });
                                    $(".delete_this_node").on('mousedown',function(){
                                        $(".dd_h").removeClass("dd_h");
                                    });
                        }
                    }, 'json');

                } else {
                    output.val('JSON browser support required for this demo.');
                }
            };

            // Activate Nestable for list 1

                            $('#nestable').nestable({
                                group: 1,
                                handleClass: 'dd_h'
                            }).on('change', updateOutput);

            // Output initial serialised data
            updateOutput($('#nestable').data('output', $('#nestable-output')));
        }



                
                $(".select2").select2();


                if( $(".ppcategory").length > 0 )
                {
                    $(".ppcategory").on("change", function (e) { 
                        var html_ = $("div[data-host=server"+$(this).find("option:selected").val()+"]").html();
						var html_2 = $("div[data-host=server"+$(this).find("option:selected").val()+"category]").html();
                        var template_ = $("div[data-host=template"+$(this).find("option:selected").val()+"]").html();
                        $("#parentto").html(html_);
                        $("#parentto").find("select").addClass("select2");
                        $("#parentto").find("select").select2();

                        $("#templateto").html(template_);
                        $("#templateto").find("select").addClass("select2");
                        $("#templateto").find("select").select2();

						$(".parentto").html(html_2);
                        $(".parentto").find("select").addClass("select2");
                        $(".parentto").find("select").select2();
						
						
                    });
                }

                if( $(".ppcategory").length > 0 )
                {
                        var html_ = $("div[data-host=server"+$(".ppcategory").find("option:selected").val()+"]").html();
						var html_2 = $("div[data-host=server"+$(".ppcategory").find("option:selected").val()+"category]").html();
                        var template_ = $("div[data-host=template"+$(".ppcategory").find("option:selected").val()+"]").html();

                        $("#parentto").html(html_);
                        $("#parentto").find("select").addClass("select2");
                        $("#parentto").find("select").select2();

						$(".parentto").html(html_2);
                        $(".parentto").find("select").addClass("select2");
                        $(".parentto").find("select").select2();
						
                        $("#templateto").html(template_);
                        $("#templateto").find("select").addClass("select2");
                        $("#templateto").find("select").select2();
                }

                if( $('#tableExample3').length > 0 )
                $('#tableExample3').DataTable({
                    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp",
                    'lengthMenu': [ [10, 25, 50, -1], [10, 25, 50, 'All'] ],
                    buttons: [
                        {extend: 'copy',className: 'btn-sm'},
                        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
                        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
                        {extend: 'print',className: 'btn-sm'}
                    ]
                }); 
                //jQuery.noConfli
                if( $('#tableExample2').length > 0 )
                $('#tableExample2').DataTable();
            });

			function goodCopy(){
				toastr.options = {
					"debug": false,
					"newestOnTop": true,
					"positionClass": "toast-top-right",
					"closeButton": true,
					"progressBar": true
				};
				toastr.success('Ссылка скопирована в буфер обмена!');
			}
			
</script>

<?php if(Yii::$app->request->get('access', true) == false): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.error('Доступ к данному разделу системы ограничен');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('MessageAdded')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Комментарий был добавлен в карточку.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('ClientAdded')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Компания, к карточке заказа установлена.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('PostDeleted')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Запись удалена безвозвратно.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('ProviderAdded')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Одна комплектация была добавлена.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('ProviderDeleted')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Одна комплектация была безвозвратно удалена.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('ResponsibleAdded')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Ответственный добавлен к заказу.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('ResponsiblesDeletedA1')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.success('Ответственный удален от данного заказа.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('ResponsiblesDeletedError')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.error('Возникла ошибка при удалении ответственного.');
    });
</script>
<?php endif; ?>

<?php if(Yii::$app->session->hasFlash('PostDeletedError')): ?>
<script>
    $(document).ready(function () {
        toastr.options = {
            "debug": false,
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "closeButton": true,
            "progressBar": true
        };
        toastr.error('Ошибка при удалении, возможно не хватает прав на удаление данной записи.');
    });
</script>
<?php endif; ?>


<?php 
$this->endBody() 
?>

</body>
</html>
<?php $this->endPage() ?>








