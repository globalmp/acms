<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\SignupForm;
use app\models\ContactForm;
use app\models\User;
use app\models\Links;
use app\models\Providers;
use app\models\Orders;
use app\models\R;
use yii\web\AssetBundle;

use yii\helpers\Html;
use yii\web\View;


class ProvidersController extends Controller
{
    /**
     * @inheritdoc
     */

    public $layout = 'main';


    public function behaviors()
    {
        R::check();
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

    public function actions()
    {

    }

    /**
     * @inheritdoc
     */
    public function actionError(){
        $this->layout = 'error';
        echo $this->render('blank');
    }

    
    public function actionUpdate($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
     
        $Providers = Providers::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
     
        if ($Providers === NULL){

            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('providers/index'));

        }else if (isset($_POST['Providers']))
        {
            $Providers->title = @$_POST['Providers']['title'];
            $Providers->name = @$_POST['Providers']['name'];
            $Providers->descr = @$_POST['Providers']['descr'];
            $Providers->email = @$_POST['Providers']['email'];
            $Providers->phone = @$_POST['Providers']['phone'];
            $Providers->adress = @$_POST['Providers']['adress'];
            $Providers->keywords = @$_POST['Providers']['keywords'];
            $Providers->owner_id = @$_POST['Providers']['owner_id'];
            $Providers->state = @$_POST['Providers']['state'];
            $Providers->created = strtotime( @$_POST['Providers']['created'] );

            if ($Providers->save())
                Yii::$app->response->redirect(array('providers/read', 'id' => $Providers->id));

        } else echo $this->render('add', array(
            'model' => $Providers
        ));
    }

    public function actionDelete($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('ProviderDeletedError');
            Yii::$app->getResponse()->redirect(array('providers/index'));
        }
        $Providers = Providers::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
        if ( !@$Providers['id'] )
        {
            Yii::$app->session->setFlash('ProviderDeletedError');
            Yii::$app->getResponse()->redirect(array('providers/index'));
        }else{
            $Providers->delete();
            Yii::$app->session->setFlash('ProviderDeleted');
            Yii::$app->getResponse()->redirect(array('providers/index'));
        }
    }

    public function actionRead(){
        $Providers = new Providers;
        $links = new Links;
        if (isset($_POST['Message'])) {
            $links->comment = @$_POST['Message']['comment'];
            $links->row_id = @Yii::$app->request->get('id');
            $links->action = 'providers/read';
            $links->created = time();
            $links->type = 'messages';
            $links->user_id = Yii::$app->user->getId();
            if ($links->save()){
                Yii::$app->session->setFlash('MessageAdded');
                Yii::$app->getResponse()->redirect(array('providers/read','id'=>Yii::$app->request->get('id'),'openTab'=>'4'));
            }
        }else{
            $messages = $links->find()->where(['action'=>'providers/read','type'=>'messages','row_id'=>@Yii::$app->request->get('id')])->all();
            if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('site/error'));
            $provider = Providers::find()->where(['id'=>Yii::$app->request->get('id'),'owner_id'=>Yii::$app->user->getId()])->one();
            echo $this->render('read',['model'=>$Providers,'data'=>$provider,'messages'=>$messages]);
        }
    }

/*
1   id
2   title
3   name
4   descr
5   email
6   phone
7   adress
8   keywords  
9   owner_id
10  state
11  created
*/

    public function actionAdd(){
        $Providers = new Providers;

        if (isset($_POST['Providers']))
        {

            $Providers->title = @$_POST['Providers']['title'];
            $Providers->name = @$_POST['Providers']['name'];
            $Providers->descr = @$_POST['Providers']['descr'];
            $Providers->email = @$_POST['Providers']['email'];
            $Providers->phone = @$_POST['Providers']['phone'];
            $Providers->adress = @$_POST['Providers']['adress'];
            $Providers->keywords = @$_POST['Providers']['keywords'];
            $Providers->owner_id = @$_POST['Providers']['owner_id'];
            $Providers->state = @$_POST['Providers']['state'];
            $Providers->created = strtotime( @$_POST['Providers']['created'] );

            $Providers->owner_id = Yii::$app->user->getId();
            if ( $Providers->save() )
                Yii::$app->response->redirect(array('providers/read', 'id' => $Providers->id));
        }else echo $this->render('add',['model'=>$Providers]);
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $Providers = new Providers;
        $data = $Providers->find()->all();
        echo $this->render('index', array(
            'data' => $data
        ));
    }
}
