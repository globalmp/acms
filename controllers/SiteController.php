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
use app\models\R;

class SiteController extends Controller
{
    /**
     * @inheritdoc
     */

    public $layout = 'main';


    public function behaviors()
    {
        //R::check();
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout','index'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],[
                        'actions' => ['index'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }





    public function init(){

        Yii::$app->params['server'] = $_SERVER['SERVER_NAME'];
        
    }




    public function actions()
    {
        return [
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
                'backColor'=>0x3c3e47, //цвет фона капчи
                'testLimit'=>2, //сколько раз капча не меняется
                'transparent'=>false,
                'foreColor'=>0xFFFFFF, //цвет символов
            ],
        ];
    }

    /**
     * @inheritdoc
     */


    public function actionSubscribe(){
        $this->layout = 'subscribe';
        echo $this->render('blank');
        exit;
    }


    public function actionError(){
        $this->layout = 'error';
        @header("HTTP/1.1 404 Not Found");
        //$error=Yii::$app->errorHandler->error;
        //echo $this->render('error', $error);
        echo $this->render('blank');
        exit;
    }

    /**
     * Displays homepage.
     *
     * @return string
     */

    public function actionDashboard()
    {   
        $this->layout = 'main';
        return $this->render('index');
    }

    public function actionIndex()
    {
        //return $this->render('index');
        Yii::$app->getResponse()->redirect(array('/home'));
    }

        /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionSignup()
    {
        $this->layout = 'signup';
        $model = new SignupForm();
        if (!Yii::$app->user->isGuest) {
            Yii::$app->session->setFlash('readyRegistered');
            $this->goHome();
        } else {
            if ($model->load(Yii::$app->request->post()) && $model->signup()) {
                return $this->goBack();
            }
            return $this->render('signup', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Login action.
     *
     * @return string
     */
    public function actionLogin()
    {

        $this->layout = 'signup';

        if (!Yii::$app->user->isGuest) {
            return Yii::$app->getResponse()->redirect(array('site/dashboard'));
            exit;
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return Yii::$app->getResponse()->redirect(array('site/dashboard'));
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return string
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return string
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }
}
