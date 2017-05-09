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
use app\models\Products;
use app\models\Orders;
use app\models\R;
use yii\web\AssetBundle;

use yii\helpers\Html;
use yii\web\View;


class AjaxDataController extends Controller
{


    

    public function actionSaveGood(){
        return $this->render('SaveGood', ['response' => date('H:i:s')]);
    }

    public function actionUpdate($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
     
        $Products = Products::find()->where(['id'=>$id])->one();
     
        if ($Products === NULL){

            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('products/index'));

        }else if (isset($_POST['Products']))
        {
            $data = $_POST['Products'];
            foreach($data as $name=>$value)
            $Products->$name = $value;
            //if(!@$Providers->owner_id) $Providers->owner_id = Yii::$app->user->getId();

            if ($Products->save())
                Yii::$app->response->redirect(array('products/read', 'id' => $Products->id));

        } else echo $this->render('add', array(
            'model' => $Products
        ));
    }

    public function actionDelete($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('ProviderDeletedError');
            Yii::$app->getResponse()->redirect(array('products/index'));
        }
        $Products = Products::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
        if ( !@$Products['id'] )
        {
            Yii::$app->session->setFlash('ProviderDeletedError');
            Yii::$app->getResponse()->redirect(array('products/index'));
        }else{
            $Products->delete();
            Yii::$app->session->setFlash('ProviderDeleted');
            Yii::$app->getResponse()->redirect(array('products/index'));
        }
    }

    public function actionRead(){
        $Products = new Products;
        $links = new Links;
        if (isset($_POST['Message'])) {
            $links->comment = @$_POST['Message']['comment'];
            $links->row_id = @Yii::$app->request->get('id');
            $links->action = 'products/read';
            $links->created = time();
            $links->type = 'messages';
            $links->user_id = Yii::$app->user->getId();
            if ($links->save()){
                Yii::$app->session->setFlash('MessageAdded');
                Yii::$app->getResponse()->redirect(array('products/read','id'=>Yii::$app->request->get('id'),'openTab'=>'4'));
            }
        }else{
            $messages = $links->find()->where(['action'=>'products/read','type'=>'messages','row_id'=>@Yii::$app->request->get('id')])->all();
            if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('site/error'));
            $Products__ = Products::find()->where(['id'=>Yii::$app->request->get('id'),'owner_id'=>Yii::$app->user->getId()])->one();
            echo $this->render('read',['model'=>$Products,'data'=>$Products__,'messages'=>$messages]);
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
        $Products = new Products;

        if (isset($_POST['Products']))
        {
            $data = $_POST['Products'];
            foreach($data as $name=>$value)
            $Products->$name = $value;
            //if(!@$Providers->owner_id) $Providers->owner_id = Yii::$app->user->getId();

            if ( $Products->save() )
                Yii::$app->response->redirect(array('products/read', 'id' => $Products->id));
        }else echo $this->render('add',['model'=>$Products]);
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $Products = new Products;
        $data = $Products->find()->all();
        echo $this->render('index', array(
            'data' => $data
        ));
    }
}
