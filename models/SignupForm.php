<?php

namespace app\models;

use Yii;
use yii\base\Model;

/**
 * LoginForm is the model behind the login form.
 *
 * @property User|null $user This property is read-only.
 *
 */
class SignupForm extends Model
{
    public $username;
    public $password;
    public $password2;
    public $name;
    public $rememberMe = true;
    public $verifyCode;
    public $login;

    private $_user = false;


    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            // username and password are both required
            [['username', 'password', 'password2', 'name'], 'required'],
            // rememberMe must be a boolean value
            ['rememberMe', 'boolean'],
            ['password', 'string', 'min' => 6, 'max' => 24],
            ['username', 'string', 'min' => 3, 'max' => 24],
            ['name', 'string', 'min' => 3, 'max' => 24],
            ['password', 'compare', 'compareAttribute' => 'password2'],
            ['verifyCode', 'captcha'],

            // password is validated by validatePassword()
            ['password', 'validatePassword'],
        ];
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


    public function validatePassword(){
        if( $this->password != $this->password2 || $this->password == '' || $this->password2 != '' ){
            //Yii::$app->session->setFlash('passwdRegistered');
            //Yii::$app->getResponse()->redirect(array('site/index'));
        }
    }

    public function registerUser(){

    }

    /**
     * Logs in a user using the provided username and password.
     * @return boolean whether the user is logged in successfully
     */
    public function signup()
    {
        $connection = Yii::$app->db;
        if( User::findByUsername( $this->username ) == true ){
            Yii::$app->session->setFlash('noUserName');
        }else{
            $command->bindParam($name1,$value1);
            $connection->createCommand()->insert('users', array(
                'username'=>$this->username,
                'password'=>$this->password,
                'name'=>$this->name,
                'register_date'=>time(),
                'state'=>0,
            ))->execute();
            Yii::$app->session->setFlash('okRegister');
            Yii::$app->response->redirect(array('site/login','okRegister'=>true));
        }
    }


}
