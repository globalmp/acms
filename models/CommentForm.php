<?php

namespace app\models;

use Yii;
use yii\base\Model;
use app\models\Comments;
use app\models\Servers;

/**
 * LoginForm is the model behind the login form.
 *
 * @property User|null $user This property is read-only.
 *
 */
class CommentForm extends Model
{
	
	
	const SITE_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
    const CAPTCHA_RESPONSE_FIELD = 'g-recaptcha-response';
	
 	public $reCaptcha;
	//public $text;
	//public $email;
	//public $name;
	//public $date;
//\himiklab\yii2\recaptcha\ReCaptchaValidator::className(),'key'=>'6LfqRQ8UAAAAAPZle8KW7zdflMXbqDjAd_pH1sRJ'
	public function rules()
	{
	  return [
		  [['reCaptcha'], 'validatePassword'],
		  //[['text', 'name', 'email'], 'required'],
	  ];
	}

	public function validatePassword(){
		//exit;
	}
	
    /**
     * @return array customized attribute labels
     */
    public function attributeLabels()
    {
        return [
            'verifyCode' => 'Verification Code',
        ];
    }


    public function add()
    {
		

		
        $Comments = new Comments;

        if (isset($_POST['Comments']))
        {
            $data = $_POST['Comments'];
            foreach($data as $name=>$value)
            $Comments->$name = $value;
			$Comments->date = time();
			
			$data_ = Servers::find()->where(['id'=>$Comments->server_id])->one();
			$request = self::SITE_VERIFY_URL . '?' . http_build_query([
                'secret' => $data_['recaptcha_key'],
                'response' => $_POST['g-recaptcha-response'],
                'remoteip' => Yii::$app->request->userIP
            ]);

			$response = @file_get_contents($request);
		
	

			$response = json_decode($response,true);

			if( trim( $Comments->name ) == '' || trim( $Comments->text ) == '' || trim( $Comments->email ) == '' || $response['success'] != true ){
				@header("Location: " . $_SERVER['HTTP_REFERER']);
				exit;
			}else if ( $Comments->save() ) {
				@header("Location: " . $_SERVER['HTTP_REFERER']);
				exit;
			}
		}
    }


}
