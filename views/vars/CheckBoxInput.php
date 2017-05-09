<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Dropdowns;
use app\models\Providers;
use app\models\Clients;
use app\models\User;
use app\models\Users;
use app\models\Brands;
use vakorovin\datetimepicker\Datetimepicker;
use yii\helpers\ArrayHelper;
use yii\widgets\Pjax;
?>
<div class="row">
<div class="col-lg-12">
<div class="row">
<?php
$params_ = $params->params;
$params_ = explode("\n",$params_);
for($i=0;$i<count($params_);$i++){
	if( trim( $params_[$i] ) != '' ){
?>
<div class="form-group col-lg-3">
<div class="form-group field-pages-alt">
<label><?php echo $params->name; ?>(<?php echo $params_[$i]; ?>)</label><br>
<input <?php echo (( @$value[md5(trim($params_[$i]))] )?"CHECKED":""); ?> type="checkbox" name="Vars[<?php echo $params->id; ?>][]" value="<?php echo $params_[$i]; ?>">
</div></div>
<?php
}}
?>
</div>
</div>
</div>

