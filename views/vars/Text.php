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

?>
<div class="form-group col-lg-12">
<div class="form-group field-pages-alt">
<label><?php echo $params->name; ?></label><br>

<input type="text" name="Vars[<?php echo $params->id; ?>]" class="form-control" value="<?php echo implode("",$value); ?>" style="width:100%;">



</div></div>

</div>
</div>
</div>

