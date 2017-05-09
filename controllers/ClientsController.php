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
use app\models\Clients;
use app\models\Orders;
use app\models\R;
use yii\web\AssetBundle;

use yii\helpers\Html;
use yii\web\View;


class ClientsController extends Controller
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
     
        $clients = Clients::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
     
        if ($clients === NULL){

            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/index'));

        }else if (isset($_POST['Clients']))
        {
            $clients->title = @$_POST['Clients']['title'];
            $clients->name = @$_POST['Clients']['name'];
            $clients->descr = @$_POST['Clients']['descr'];
            $clients->email = @$_POST['Clients']['email'];
            $clients->phone = @$_POST['Clients']['phone'];
            $clients->adress = @$_POST['Clients']['adress'];
            $clients->keywords = @$_POST['Clients']['keywords'];
            $clients->owner_id = @$_POST['Clients']['owner_id'];
            $clients->state = @$_POST['Clients']['state'];
            $clients->created = strtotime( @$_POST['Clients']['created'] );

            if ($clients->save())
                Yii::$app->response->redirect(array('clients/read', 'id' => $clients->id));

        } else echo $this->render('add', array(
            'model' => $clients
        ));
    }

    public function actionDelete($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('ClientDeletedError');
            Yii::$app->getResponse()->redirect(array('clients/index'));
        }
        $client = Clients::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
        if ( !@$client['id'] )
        {
            Yii::$app->session->setFlash('ClientDeletedError');
            Yii::$app->getResponse()->redirect(array('clients/index'));
        }else{
            $client->delete();
            Yii::$app->session->setFlash('ClientDeleted');
            Yii::$app->getResponse()->redirect(array('clients/index'));
        }
    }

    public function actionRead(){
        $clients = new Clients;
        $links = new Links;
        if (isset($_POST['Message'])) {
            $links->comment = @$_POST['Message']['comment'];
            $links->row_id = @Yii::$app->request->get('id');
            $links->action = 'clients/read';
            $links->created = time();
            $links->type = 'messages';
            $links->user_id = Yii::$app->user->getId();
            if ($links->save()){
                Yii::$app->session->setFlash('MessageAdded');
                Yii::$app->getResponse()->redirect(array('clients/read','id'=>Yii::$app->request->get('id'),'openTab'=>'4'));
            }
        }else{
            $messages = $links->find()->where(['action'=>'clients/read','type'=>'messages','row_id'=>@Yii::$app->request->get('id')])->all();
            if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('site/error'));
            $client = Clients::find()->where(['id'=>Yii::$app->request->get('id'),'owner_id'=>Yii::$app->user->getId()])->one();
            echo $this->render('read',['model'=>$clients,'data'=>$client,'messages'=>$messages]);
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
        $clients = new Clients;

        if (isset($_POST['Clients']))
        {

            $clients->title = @$_POST['Clients']['title'];
            $clients->name = @$_POST['Clients']['name'];
            $clients->descr = @$_POST['Clients']['descr'];
            $clients->email = @$_POST['Clients']['email'];
            $clients->phone = @$_POST['Clients']['phone'];
            $clients->adress = @$_POST['Clients']['adress'];
            $clients->keywords = @$_POST['Clients']['keywords'];
            $clients->owner_id = @$_POST['Clients']['owner_id'];
            $clients->state = @$_POST['Clients']['state'];
            $clients->created = strtotime( @$_POST['Clients']['created'] );

            $clients->owner_id = Yii::$app->user->getId();
            if ( $clients->save() )
                Yii::$app->response->redirect(array('clients/read', 'id' => $clients->id));
        }else echo $this->render('add',['model'=>$clients]);
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $clients = new Clients;
        $data = $clients->find()->all();
        echo $this->render('index', array(
            'data' => $data
        ));
    }
}
