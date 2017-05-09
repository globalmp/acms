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
use app\models\Dropdowns;
use app\models\Pages;
use app\models\Images;
use app\models\R;
use app\models\Vars_data;
use yii\web\AssetBundle;

use yii\data\Pagination;
use yii\helpers\Html;
use yii\web\View;


class PagesController extends Controller
{

    public $layout = 'main';



    public function behaviors()
    {

    }


    public function actions()
    {

    }

    /**
     * @inheritdoc
     */
	
	public function init(){
		$d = Dropdowns::find()->all();
		foreach( $d as $el )
		\Yii::$app->params['dropdown'][$el->type][$el->id] = $el->name;	
	}
	 
    public function actionError(){
        $this->layout = 'error';
        echo $this->render('blank');
    }

    
    public function actionUpdate($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
     
        $Pages = Pages::find()->where(['id'=>$id])->one();

        $Images = Images::find()->where(['route_id'=>$id,'route'=>'pages/update'])->orderBy(['position'=>SORT_ASC])->all();
     
        if ($Pages === NULL){

            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('orders/index'));

        }else if (isset($_POST['Pages']))
        {

            $data = $_POST['Pages'];
            foreach($data as $name=>$value)
           if($name != 'add_date' && $name != 'edit_date') $Pages->$name = $value;
              elseif($name == 'add_date' || $name == 'edit_date') $Pages->$name = strtotime($value);

            if ($Pages->save()){
                Yii::$app->response->redirect(array('pages/update', 'id' => $Pages->id));
                //exit;
            }

        } else echo $this->render('add', array(
            'model' => $Pages, 'images'=>$Images
        ));
    }


    public function actionDelete($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('pages/index'));
        }
        $pages = Pages::find()->where(['id'=>$id,'owner_id'=>Yii::$app->user->getId()])->one();
        if ( !@$pages['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('pages/index'));
        }else{
            $pages->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('pages/index'));
        }
    }

    public function actionRead(){
        $pages = new Pages;
            //if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('pages/error'));
            //$responce = $pages->find()->where(['id'=>Yii::$app->request->get('id')])->one();
            //echo $this->render('read',['model'=>$pages,'data'=>$responce]);
        
    }


    public function actionAdd(){
        $pages = new Pages;

        if (isset($_POST['Pages']))
        {
            $data = $_POST['Pages'];
            foreach($data as $name=>$value)
            if($name != 'add_date' && $name != 'edit_date') $pages->$name = $value;
              elseif($name != 'add_date' || $name != 'edit_date') $pages->$name = time();

            if ( $pages->save() )
                Yii::$app->response->redirect(array('pages/update', 'id' => $pages->id));
        }else echo $this->render('add',['model'=>$pages]);
    }




    public function actionIndex()
    {
        $JavaScript = " 
        ";
        $this->getView()->registerJs($JavaScript, View::POS_END);

        $where = [];
        if( @$_GET['date_start'] && @$_GET['sate_end'] ){
            $where[] = '( date > '.(int)$_GET['date_start'].' AND date < '.(int)$_GET['sate_end'].' )';
        }else{
            if( @$_GET['query'] ){
                $where[] = 'title like \'%'.$_GET['query'].'%\'';
                $where[] = 'full_story like \'%'.$_GET['query'].'%\'';
                $where[] = 'short_story like \'%'.$_GET['query'].'%\'';
            }
        }

        $pages = new Pages;
        $data = $pages->find()->where(implode(" OR ",$where))->orderBy(['id'=>SORT_DESC]);


        $countQuery = clone $data;
        $pages = new Pagination(['totalCount' => $countQuery->count(), 
            'pageSize' => 20]);
        $pages->pageSizeParam = false;
        $models = $data->offset($pages->offset)
            ->limit($pages->limit)
            ->all();
        
        
        echo $this->render('index', array(
            'data' => $models, 'pages'=>$pages
        ));


    }







/*


    public function actionIndex()
    {
        $JavaScript = " 
        ";
        $this->getView()->registerJs($JavaScript, View::POS_END);

        $pages = new Pages;
        $data = $pages->find()->all();
        echo $this->render('index', array(
            'data' => $data
        ));
    }

*/

}
