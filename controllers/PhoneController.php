<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\SignupForm;
use app\models\ContactForm;
use app\models\Users;
use app\models\Images; 
use app\models\Servers;
use app\models\R;

class PhoneController extends Controller
{


    public $layout = 'main';
	public $json_setting = [];
	public $server_data = [];
	public $server_info = [];
	public $server = '';
	public $image = [];

    public function init(){
	
        $this->server = $_SERVER['SERVER_NAME'];
        $this->server_info = $_SERVER;
        $dir = dirname(__FILE__) . '/';
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();
		if( $this->server_data['chat'] == 1 ){
			$this->image = Images::find()->where(['route_id'=>@$this->server_data['id'],'route'=>'service/updateserver'])->orderBy(['position'=>SORT_ASC])->one();
			$setting_content = file_get_contents( $dir . "../round_phone/setting.json" );
			//echo $setting_content;
			$setting_content = json_decode( $setting_content, true );
			$this->json_setting = $setting_content;
			$this->json_setting['css'] = $this->json_setting['css'] . "&" . rand(111,999);
		}
        
    }
	
	public function actionSend(){
		/*
			ApplicationForm_department_id
			ApplicationForm_client_phone
			ApplicationForm_name
			ApplicationForm_email
		*/ 
		$errors = [];
		$p = $_POST['ApplicationForm'];
		if( trim( $p['client_phone'] ) == '' ){
			$errors['client_phone'] = 'Error';
		}
		if( trim( $p['name'] ) == '' ){
			$errors['name'] = 'Error';
		}
		if( count( $errors ) > 0 ){
			header('Content-Type: application/json;charset=utf-8');
			echo json_encode( $errors ); 
			exit;
		} else echo "1";

		require(__DIR__ . '/../PHPMailer/PHPMailerAutoload.php');
        $mail = new \PHPMailer;
        $mail->isSMTP();
        $mail->Host = Yii::$app->params['SMTPHost'];
        $mail->SMTPAuth = true;
        $mail->Username = Yii::$app->params['SMTPEmail'];
        $mail->Password = Yii::$app->params['SMTPPasswd'];
        $mail->SMTPSecure = Yii::$app->params['SMTPSecure'];
        $mail->Port = Yii::$app->params['SMTPPort'];
        $mail->isHTML(true);
        $mail->CharSet = 'utf-8';
        $mail->ContentType = 'text/html';
        $mail->setFrom(Yii::$app->params['SMTPEmail'], Yii::$app->params['SMTPFrom']);
        $mail->addAddress( @$this->server_data['chat_to_email'] );
        $mail->Subject = (($p['department_id'])?$p['department_id']." - ":"") . "REQUEST FROM " . $this->server_data['host'] . ": " . ((@$this->server_data['title'])?@$this->server_data['title']:@$this->server_data['meta_title']);
        $body = [];
        $body[] = "<table>";
        $body[] = "<tr><td style=\"padding:10px;width:200px;\"><b>FROM PAGE</b></td><td><a href=\"".$_SERVER['HTTP_REFERER']."\">".$_SERVER['HTTP_REFERER']."</a></td></tr>";
          foreach( @$p as $name=>$value )
            $body[] = "<tr><td style=\"padding:10px;\"><b>".$name."</b></td><td>".$value."</td></tr>";
        $body[] = "</table>";    
        
        $mail->Body = implode("\n",$body);
        if (!$mail->send()) {} else {}
		
		if( trim( @$this->server_data['chat_phone'] ) != '' && $this->server_data['chat_sms'] == 1 )
		{
			$text = (($p['department_id'])?$p['department_id']." ":"") . (($p['client_phone'])?$p['client_phone']." ":"") . (($p['name'])?$p['name']:"");
			$description = 'Message from CRM to manager dep.';
			$start_time = 'AUTO'; // отправить немедленно или ставим дату и время  в формате YYYY-MM-DD HH:MM:SS
			$end_time = 'AUTO'; // автоматически рассчитать системой или ставим дату и время  в формате YYYY-MM-DD HH:MM:SS
			$rate = 1; // скорость отправки сообщений (1 = 1 смс минута). Одиночные СМС сообщения отправляются всегда с максимальной скоростью.
			$lifetime = 4; // срок жизни сообщения 4 часа
			$recipient = @$this->server_data['chat_phone'];
			$user = $this->server_data['chat_sms_login']; // тут ваш логин в международном формате без знака +. Пример: 380501234567
			$password = $this->server_data['chat_sms_passwd']; // Ваш пароль

			$myXML 	 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
			$myXML 	.= "<request>"."\n";
			$myXML 	.= "<operation>SENDSMS</operation>"."\n";
			$myXML 	.= '		<message start_time="'.$start_time.'" end_time="'.$end_time.'" lifetime="'.$lifetime.'" rate="'.$rate.'" desc="'.$description.'">'."\n";
			$myXML 	.= "		<body>".$text."</body>"."\n";
			$myXML 	.= "		<recipient>".$recipient."</recipient>"."\n";
			$myXML 	.=  "</message>"."\n";
			$myXML 	.= "</request>";

			$ch = curl_init();
			curl_setopt($ch, CURLOPT_USERPWD , $user.':'.$password);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_URL, 'http://sms-fly.com/api/api.noai.php');
			curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: text/xml", "Accept: text/xml"));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $myXML);
			$response = curl_exec($ch);
			curl_close($ch);

		}
		exit;
	}

	public function actionSend_pretected(){
		exit;
	}
	
    public function actionSetting(){
		header('Content-Type: application/json;charset=utf-8');
		$this->json_setting['phone_button_text'] = $this->server_data['chat_button_text'];
		$departments = $this->server_data['chat_subject'];
		$departments = explode("\n",$departments);
		$this->json_setting['_csrf'] = Yii::$app->request->getCsrfToken();
		$this->json_setting['departments'] = [];
		for($i=0;$i<count($departments);$i++){
			$u = explode("|",$departments[$i]);
			$this->json_setting['departments'][$i]['header'] = trim( $u[0] );
			$this->json_setting['departments'][$i]['time_from'] = 0;
			$this->json_setting['departments'][$i]['time_to'] = time()+86400;
			$this->json_setting['departments'][$i]['is_holiday'] = 1;
			$this->json_setting['departments'][$i]['delay_text'] = "1";
			$this->json_setting['departments'][$i]['delay_text_mobile'] = "2";
			$this->json_setting['departments'][$i]['delay_text_mobile_success'] = "3";
			$this->json_setting['departments'][$i]['active_delay_text'] = "";
			$this->json_setting['departments'][$i]['only_on_mobile'] = 0;
			$this->json_setting['departments'][$i]['direct_phone'] = trim( $u[1] );
		}
		foreach( $this->server_data as $name => $value ){
			if( !@$this->json_setting[ $name ] ) $this->json_setting[ $name ] = $value;
		}
		$this->json_setting['form_text_mobile'] = time();
		$this->json_setting['department_link_text'] = $this->server_data['department_link_text'];
		$this->json_setting['current_time'] = time();
		$this->json_setting['chat_color_hex'] = str_replace("#","",$this->server_data['chat_color_hex']);
		$this->json_setting['css_phone_button_color'] = str_replace("#","",$this->server_data['chat_css_phone_button_color']);
		$this->json_setting['css_button_icons_color'] = str_replace("#","",$this->server_data['chat_css_button_icons_color']);
		$this->json_setting['css_phone_button_text_color'] = str_replace("#","",$this->server_data['chat_css_phone_button_text_color']);
        echo json_encode( $this->json_setting ); 
		exit;
    }
	public function actionLogo(){
		//print_r($this->image);
		$this->image['original'] = urldecode($this->image['original']);
		$ex = explode(".",$this->image['original']);
		$ex = end( $ex ); 
		header("Content-Type: image/".$ex);
		$logo = file_get_contents( dirname(__FILE__) . "/../".$this->image['original'] );
		echo $logo;
		exit;
	}
	

}
