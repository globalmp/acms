<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\User;
use app\models\Servers; 
use yii\widgets\Blocks;

$this->title = 'Я Программист';
$this->params['breadcrumbs'][] = $this->title;

?>

 
 <link rel="stylesheet" href="/dev/CodeMirror/lib/codemirror.css">
<link rel="stylesheet" href="/dev/CodeMirror/addon/fold/foldgutter.css">
<link rel="stylesheet" href="/dev/CodeMirror/addon/dialog/dialog.css">
<link rel="stylesheet" href="/dev/CodeMirror/theme/monokai.css">
<script src="/dev/CodeMirror/lib/codemirror.js"></script>
<script src="/dev/CodeMirror/addon/search/searchcursor.js"></script>
<script src="/dev/CodeMirror/addon/search/search.js"></script>
<script src="/dev/CodeMirror/addon/dialog/dialog.js"></script>
<script src="/dev/CodeMirror/addon/edit/matchbrackets.js"></script>
<script src="/dev/CodeMirror/addon/edit/closebrackets.js"></script>
<script src="/dev/CodeMirror/addon/comment/comment.js"></script>
<script src="/dev/CodeMirror/addon/wrap/hardwrap.js"></script>
<script src="/dev/CodeMirror/addon/fold/foldcode.js"></script>
<script src="/dev/CodeMirror/addon/fold/brace-fold.js"></script>
<script src="/dev/CodeMirror/mode/javascript/javascript.js"></script>
<script src="/dev/CodeMirror/keymap/sublime.js"></script>
<script src="/dev/CodeMirror/addon/display/fullscreen.js"></script>


<link rel="stylesheet" href="/dev/CodeMirror/lib/codemirror.css">
<link rel="stylesheet" href="/dev/CodeMirror/addon/display/fullscreen.css">
<link rel="stylesheet" href="/dev/CodeMirror/theme/night.css">
<script src="/dev/CodeMirror/mode/xml/xml.js"></script>


	<link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>

	<!-- CSS
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<link rel="stylesheet" href="/dev/jqueryfiletree-master/dist/jqueryFileTree.css?<?php echo rand(111,999); ?>">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/styles/atelier-cave.light.min.css">

 

	<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script> -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js"></script>

	<script src="/dev/jqueryfiletree-master/dist/jQueryFileTree.min.js"></script>

<style>
	.CodeMirror-fullscreen{
		z-index:9999;
	}
</style>
<div class="row">
<div class="col-sm-3" id="tree" style="background-color:#fff; padding:10px; overflow:scroll; height:300px;">
</div>
<div class="col-sm-9">
<textarea id="code">

</textarea>
</div></div>
 

<div class="row">
<div class="col-sm-3">
<input type="button" value="Загрузить" class="btn btn-success" style="width:100%;margin-top:20px;">
</div>
<div class="col-sm-9">
<input type="button" id="save" value="Сохранить" class="btn btn-primary" style="margin-top:20px;width:100%;">
</div></div> 


<h5 class="selected-file"></h5><br>



  <script>
 


  //$(document).ready(function(){
	 $('body').keydown(function (event) {
		  	if((event.altKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD)))
		    {
				$.post( "/ProxyCodeMirrorSave.php", { file: $('.selected-file').text(), code: editor.getValue() })
					.done(function( data ) {
					toastr.options={
						"debug":false,
						"newestOnTop":true,
						"positionClass":"toast-top-right",
						"closeButton":true,
						"progressBar":true
					};
					toastr.success('Ура! Я все записал!');
				});
		    }
	});





  //});


	$('#tree')
		.fileTree({
			script: '/dev/jqueryfiletree-master/dist/connectors/jqueryFileTree.php',
		}, function(file) {
		   console.log(file);
		   $('.selected-file').text( $('a[rel="'+file+'"]').text() );
		})
		.on('filetreeexpanded filetreecollapsed filetreeclicked ...', function(e, data) {
			console.log(data);
			$.getJSON( "/ProxyCodeMirror.php?file="+data.rel, function( data ) {
				editor.setValue( data.code );  
				$('.selected-file').text( data.file );
			});
	});
		

	$('#save').on('click',function(){
		$.post( "/ProxyCodeMirrorSave.php", { file: $('.selected-file').text(), code: editor.getValue() })
			.done(function( data ) {
			toastr.options={
				"debug":false,
				"newestOnTop":true,
				"positionClass":"toast-top-right",
				"closeButton":true,
				"progressBar":true
			};
			toastr.success('Ура! Я все записал!');
		});
	});



    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      theme: "monokai",
    lineNumbers: true,
    mode: "javascript",
    lineWrapping: true,
    keyMap: "sublime",
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    tabSize: 2,
      extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
      }
    });


</script>

