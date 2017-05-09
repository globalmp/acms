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


class OrdersController extends Controller
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
     
        $orders = Orders::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
     
        if ($orders === NULL){

            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/index'));

        }else if (isset($_POST['Orders']))
        {

            $orders->title = @$_POST['Orders']['title'];
            $orders->descr = @$_POST['Orders']['descr'];
            $orders->created = strtotime( @$_POST['Orders']['created'] );
            $orders->deadline = strtotime( @$_POST['Orders']['deadline'] );
            $orders->price = @$_POST['Orders']['price'];
            $orders->tax = @$_POST['Orders']['tax'];
            $orders->state = @$_POST['Orders']['state'];
            $orders->goods_id = @$_POST['Orders']['goods_id'];
            $orders->weight = @$_POST['Orders']['weight'];
            $orders->owner_id = Yii::$app->user->getId();

            if ($orders->save())
                Yii::$app->response->redirect(array('orders/read', 'id' => $orders->id));

        } else echo $this->render('add', array(
            'model' => $orders
        ));
    }

    public function actionDeleteprovider($id=NULL)
    {
        if ($id === NULL || Yii::$app->request->get('link_id'))
        {
            Yii::$app->session->setFlash('ProviderDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'2'));
        }
        $Links = Links::find()->where(['id'=>Yii::$app->request->get('link_id'),'user_id'=>Yii::$app->user->getId()])->one();
        if ( !@$Links['id'] )
        {
            Yii::$app->session->setFlash('ProviderDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'2'));
        }else{
            $Links->delete();
            Yii::$app->session->setFlash('ProviderDeleted');
            Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'2'));
        }
        Yii::$app->session->setFlash('w2');
    }

    public function actionDeleteresponsible($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('ResponsiblesDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'3'));
        }
        $Links = Links::find()->where(['id'=>Yii::$app->request->get('link_id'),'user_id'=>Yii::$app->user->getId()])->one();
        if ( !@$Links['id'] )
        {
            Yii::$app->session->setFlash('ResponsiblesDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'3'));
        }else{
            $Links->delete();
            Yii::$app->session->setFlash('ResponsiblesDeletedA1');
            Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'3'));
        }
        Yii::$app->session->setFlash('w2');
    }

    public function actionDelete($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/index'));
        }
        $orders = Orders::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
        if ( !@$orders['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/index'));
        }else{
            $orders->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('orders/index'));
        }
    }

    public function actionRead(){
        $orders = new Orders;
        $links = new Links;
        if (isset($_POST['Providers']))
        {
            $links->comment = @$_POST['Providers']['comment'];
            $links->param_str_1 = @$_POST['Providers']['param_str_1'];
            $links->param_str_2 = @$_POST['Providers']['param_str_2'];
            $links->other_id = @$_POST['Providers']['other_id'];
            $links->product_id = @$_POST['Providers']['product_id'];
            $links->row_id = @Yii::$app->request->get('id');
            $links->action = 'orders/read';
            $links->type = 'provider';
            $links->user_id = Yii::$app->user->getId();
            if ($links->save()){
                Yii::$app->session->setFlash('ProviderAdded');
                Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'2'));
            }
        }elseif (isset($_POST['Responsibles'])) {
            $links->comment = @$_POST['Responsibles']['comment'];
            $links->other_id = @$_POST['Responsibles']['other_id'];
            $links->row_id = @Yii::$app->request->get('id');
            $links->action = 'orders/read';
            $links->type = 'responsible';
            $links->user_id = Yii::$app->user->getId();
            if ($links->save()){
                Yii::$app->session->setFlash('ResponsibleAdded');
                Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'3'));
            }
        }elseif (isset($_POST['Message'])) {
            $links->comment = @$_POST['Message']['comment'];
            $links->row_id = @Yii::$app->request->get('id');
            $links->action = 'orders/read';
            $links->created = time();
            $links->type = 'messages';
            $links->user_id = Yii::$app->user->getId();
            if ($links->save()){
                Yii::$app->session->setFlash('MessageAdded');
                Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id'),'openTab'=>'4'));
            }
        }elseif ( isset($_POST['Client']) ){
            $orders_to_client = Orders::find()->where(['id'=>Yii::$app->request->get('id'),'owner_id'=>Yii::$app->user->getId()])->one();
            if( !@$orders_to_client ){
                Yii::$app->session->setFlash('PostDeletedError');
            }else{
                $orders_to_client->client_id = @$_POST['Client']['id'];
                if ( $orders_to_client->save() ){
                    Yii::$app->session->setFlash('ClientAdded');
                    Yii::$app->getResponse()->redirect(array('orders/read','id'=>Yii::$app->request->get('id')));
                }
            }
        }else{
            if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('site/error'));
            $responce = $orders->find()->where(['id'=>Yii::$app->request->get('id')])->one();
            $client = Clients::find()->where(['id'=>$responce['client_id']])->one();
            $providers = $links->find()->where(['action'=>'orders/read','type'=>'provider','row_id'=>@Yii::$app->request->get('id')])->all();
            $responsibles = $links->find()->where(['action'=>'orders/read','type'=>'responsible','row_id'=>@Yii::$app->request->get('id')])->all();
            $messages = $links->find()->where(['action'=>'orders/read','type'=>'messages','row_id'=>@Yii::$app->request->get('id')])->all();
            echo $this->render('read',['model'=>$orders,'data'=>$responce,'messages'=>$messages,'responsibles'=>$responsibles,'providers'=>$providers,'client'=>$client]);
        }
    }


    public function actionAdd(){
        $orders = new Orders;

        if (isset($_POST['Orders']))
        {
            $orders->title = @$_POST['Orders']['title'];
            $orders->descr = @$_POST['Orders']['descr'];
            $orders->created = strtotime( @$_POST['Orders']['created'] );
            $orders->deadline = strtotime( @$_POST['Orders']['deadline'] );
            $orders->price = @$_POST['Orders']['price'];
            $orders->tax = @$_POST['Orders']['tax'];
            $orders->state = @$_POST['Orders']['state'];
            $orders->goods_id = @$_POST['Orders']['goods_id'];
            $orders->weight = @$_POST['Orders']['weight'];
            $orders->owner_id = Yii::$app->user->getId();
            //print_r( $_POST );
            //exit;
            if ( $orders->save() )
                Yii::$app->response->redirect(array('orders/read', 'id' => $orders->id));
        }else echo $this->render('add',['model'=>$orders]);
    }
    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $JavaScript = " 
        ";
        $this->getView()->registerJs($JavaScript, View::POS_END);

        $orders = new Orders;
        $data = $orders->find()->all();
        echo $this->render('index', array(
            'data' => $data
        ));
    }
}
