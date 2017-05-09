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
use app\models\Users;
use app\models\Links;
use app\models\Clients;
use app\models\Orders;
use app\models\Dropdowns;
use app\models\R;
use app\models\Menu;
use app\models\Images;
use app\models\Categorys;
use app\models\Pages;
use app\models\Statistic;
use app\models\Logs_info;
use app\models\Servers;
use app\models\Comments;
use app\models\Subscribe;
use yii\db\ActiveRecord;



use app\models\Vars;
use app\models\Vars_data;

use yii\web\AssetBundle;

use yii\data\Pagination;
use yii\helpers\Html;
use yii\web\View;


class ServiceController extends Controller
{

    public $layout = 'main';
    public $server = 'default';
    public $skin = false;
    public $view = 'default';
    public $server_info = false;
    public $server_data = false;
    
    public function actions()
    { }
    
    
    public function init(){
		
        $this->server = $_SERVER['SERVER_NAME'];
        $this->server_info = $_SERVER;
        Yii::$app->params['server'] = $this->server;
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();

		
		
    }
    
    public function actionPlaylastlog(){
      $log_item = Logs_info::find()->orderBy(['id'=>SORT_DESC])->one();
      $server_data = Servers::find()->where(['id'=>$log_item->server_id])->one();
      $f['id'] = $log_item->id;
      $f['ip']= $log_item->ip;
      $f['server_id']= $log_item->server_id;
      $f['referer']= $log_item->referer;
      $f['user_agent']= $log_item->user_agent;
      $f['server_name']= $server_data->host;
      $f['page']= $log_item->page;
      $f['time']= date("d/m/Y H:i:s",$log_item->time);
      echo json_encode($f);
      exit;
    }
    
    
    
    public function actionError(){
        $this->layout = 'error';
        echo $this->render('blank');
    }


/*
                    [name] => IMG_20150807_213927 (1).jpg
                    [size] => 703299
                    [type] => image/jpeg
                    [url] => http://127.0.0.1/files/IMG_20150807_213927%20%281%29.jpg
                    [thumbnailUrl] => http://127.0.0.1/files/thumbnail/IMG_20150807_213927%20%281%29.jpg
                    [deleteUrl] => http://127.0.0.1/index.php?file=IMG_20150807_213927%20%281%29.jpg
                    [deleteType] => DELETE
    */

    public function actionSendmessagenow(){
        
        require(__DIR__ . '/../PHPMailer/PHPMailerAutoload.php');
        $mail = new \PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'ldit@list.ru';
        $mail->Password = 'slava070707';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->isHTML(true);
        $mail->CharSet = 'utf-8';
        $mail->ContentType = 'text/html';
        $mail->setFrom('ldit@list.ru', 'Вячеслав Надеждин');
        $mail->addAddress( @$this->server_data['email'] );
        $mail->Subject = "REQUEST FROM " . $this->server_data['host'] . ": " . ((@$this->server_data['title'])?@$this->server_data['title']:@$this->server_data['meta_title']);
        $body = [];
        $body[] = "<table>";
        $body[] = "<tr><td style=\"padding:10px;width:200px;\"><b>FROM PAGE</b></td><td><a href=\"".$_SERVER['HTTP_REFERER']."\">".$_SERVER['HTTP_REFERER']."</a></td></tr>";
          foreach( @$_POST['form'] as $name=>$value )
            $body[] = "<tr><td style=\"padding:10px;\"><b>".$name."</b></td><td>".$value."</td></tr>";
        $body[] = "</table>";    
        
        $mail->Body = implode("\n",$body);
        if (!$mail->send()) {
            header("Location: " . $_SERVER['HTTP_REFERER']);
            exit;
        } else {
            header("Location: " . $_SERVER['HTTP_REFERER']);
            exit;
        }
        
    }

    public function actionSaveposition(){

        $ids_ = $_POST['file_id'];
        for($i=0;$i<count($ids_);$i++){
            $Images = Images::find()->where(['id'=>$ids_[$i]])->one();
            $Images->position = $i;
            $Images->save();
        }

        //$positions = @$_POST['file_id'];
        //print_r($positions);
        //exit;

    }

    public function actionUpdatealt(){
        $id = Yii::$app->request->get('id');
        $Images = Images::find()->where(['id'=>$id])->one();
        if ( @$Images['id'] )
        {
            $Images->alt = Yii::$app->request->get('param');
            $Images->save();
            echo json_encode(array('id'=>$Images['id']));
        }else echo json_encode(array('error'=>'Image not found'));
    }

    public function actionFiledelete(){
        $id = Yii::$app->request->get('id');
        $Images = Images::find()->where(['id'=>$id])->one();
        if ( @$Images['id'] )
        {
            unlink(dirname(__FILE__)."/..".urldecode(@$Images['original']));
            unlink(dirname(__FILE__)."/..".urldecode(@$Images['mini']));
            $Images->delete();
            echo json_encode(array('id'=>$Images['id']));
        }else echo json_encode(array('error'=>'Image not found'));
    }

    public function actionServerupload(){
        include dirname(__FILE__) . "/../views/layouts/uploader/server/php/index.php";
        $jd = $upload_handler->json_data;
        $jd = json_decode($jd,true);
        $files = $jd['files'];
        $id = Yii::$app->request->get('id');
        //$action_ = @Yii::$app->controller->module->requestedAction->id;
		
        $clear_way = function( $url ){ return parse_url($url, PHP_URL_PATH); };
        for($i=0;$i<count($files);$i++){
            $pages = new Images;
            if( @Yii::$app->request->post('route') != '' )
            {
                $pages->route = Yii::$app->request->post('route');
                $pages->route_id = Yii::$app->request->get('id');
            }else{
                $page = Pages::find()->where(['id'=>$id])->one();
                $pages->page_id = $page->id;
                $pages->server_id = $page->server_id;
            }
            $pages->size = $files[$i]['size'];
            $pages->type = $files[$i]['type'];
            $pages->original = $clear_way( $files[$i]['url'] );
            $pages->mini = $clear_way( $files[$i]['thumbnailUrl'] );
            $pages->date = time();
            $pages->owner_id = Yii::$app->user->id;
            $pages->save();
            $files[$i]['date'] = date("d-m-Y");
            $files[$i]['id'] = $pages->id;
        }
        $jd['files'] = $files;
        echo json_encode($jd);
        exit;
    }














    private function createTree( $items=null, $first = false ){
        if( is_array(@$items) == false ) return '<ol class="dd-list"></ol>';
        $tree = '<ol class="dd-list">';
        foreach( $items as $element ){
            $tree = $tree . '
                <li class="dd-item" data-id="'.@$element['id'].'" data-name="'.@$element['name'].'"  data-link="'.@$element['link'].'">
                    <div class="dd-handle dd_h" style="cursor:normal;">
                        <span style="margin-right:20px;cursor:move;"><i class="fa fa-hand-pointer-o"> D`N`D</i></span>
                        <strong>'.@$element['name'].'</strong> <small>'.@$element['link'].'</small>
                        <a href="#" style="z-index:9999;" onClick="return delete_this_node(this);" class="delete_this_node pull-right btn btn-xs btn-danger">Удалить</a>
                        <a href="#" style="z-index:9999;margin-right:10px;" onClick="return update_this_node(this);" class="delete_this_node pull-right btn btn-xs btn-warning">Редактировать</a>
                    </div>
                    ';
            if( is_array( @$element['children'] ) == true ){
                $tree = $tree . $this->createTree( @$element['children'] );
            }
            $tree = $tree . '</li>';
        }
        $tree = $tree . '</ol>';
        return $tree;
    } 



/*  Управление категориями - НАЧАЛО  */

    public function actionDeletecategory($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/categoryindex'));
        }
        $Categorys = Categorys::find()->where(['id'=>$id])->one();
        if ( !@$Categorys['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/categoryindex'));
        }else{
            $Categorys->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/categoryindex'));
        }
    }

    public function actionUpdatecategory($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Categorys = Categorys::find()->where(['id'=>$id])->one();
        if ($Categorys === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/categoryindex'));
        }else if (isset($_POST['Categorys'])) {
            $data = $_POST['Categorys'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Categorys->$name = $value;
            if ($Categorys->save()){
                Yii::$app->response->redirect(array('service/categoryindex', 'id' => $Categorys->id));
            }
        } else echo $this->render('addcategory', array(
            'model' => $Categorys
        ));
    }

    public function actionCategoryjsonpositionsave(){
        $return_handl = true;
        $id = Yii::$app->request->get('id');
        $Categorys = Categorys::find()->where(['id'=>$id])->one();
        $data_json = Yii::$app->request->get('json_data');
        $Categorys->jsondata = $data_json;
        if ( $Categorys->save() ) $return_handl = true;
        $data_json_array = json_decode($data_json,true);
        echo json_encode(array('r'=>$return_handl,'data'=>$this->createTree( $data_json_array ),$first=true));
    }
    public function actionReadcategory(){
        $Categorys = new Categorys;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Categorys->find()->where(['id'=>Yii::$app->request->get('id')])->one();

        echo $this->render('addcategory',['model'=>$Categorys,'data'=>$responce]);
    }

    public function actionAddcategory(){
        $Categorys = new Categorys;
        if (isset($_POST['Categorys']))
        {
            $data = $_POST['Categorys'];
            foreach($data as $name=>$value)
            $Categorys->$name = $value;
            if ( $Categorys->save() )
                Yii::$app->response->redirect(array('service/updatecategory', 'id' => $Categorys->id));
        }else echo $this->render('addcategory',['model'=>$Categorys]);
    }

    public function actionCategoryindex()
    {
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $Categorys = new Categorys;
        $Categorys_data = $Categorys->find()->all();
        echo $this->render('categoryindex', array(
            'data' => $Categorys_data
        ));
    }







/*  Управление категория - КОНЕЦ */









    public function actionDeletemenu($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/menuindex'));
        }
        $menu = Menu::find()->where(['id'=>$id])->one();
        if ( !@$menu['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/menuindex'));
        }else{
            $menu->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/menuindex'));
        }
    }

    public function actionUpdatemenu($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Menu = Menu::find()->where(['id'=>$id])->one();
        if ($Menu === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/menuindex'));
        }else if (isset($_POST['Menu'])) {
            $data = $_POST['Menu'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Menu->$name = $value;
            if ($Menu->save()){
                Yii::$app->response->redirect(array('service/readmenu', 'id' => $Menu->id));
            }
        } else echo $this->render('addmenu', array(
            'model' => $Menu
        ));
    }

    public function actionMenujsonpositionsave(){
        $return_handl = true;
        $id = Yii::$app->request->get('id');
        $Menu = Menu::find()->where(['id'=>$id])->one();
        $data_json = Yii::$app->request->get('json_data');
        $Menu->jsondata = $data_json;
        if ( $Menu->save() ) $return_handl = true;
        $data_json_array = json_decode($data_json,true);
        echo json_encode(array('r'=>$return_handl,'data'=>$this->createTree( $data_json_array ),$first=true));
    }
    public function actionReadmenu(){
        $Menu = new Menu;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Menu->find()->where(['id'=>Yii::$app->request->get('id')])->one();
        $data_json_array = json_decode($responce['jsondata'],true);
        echo $this->render('readmenu',['model'=>$Menu,'data'=>$responce,'menu_editor'=>$this->createTree( $data_json_array )]);
    }

    public function actionAddmenu(){
        $Menu = new Menu;
        if (isset($_POST['Menu']))
        {
            $data = $_POST['Menu'];
            foreach($data as $name=>$value)
            $Menu->$name = $value;
            if ( $Menu->save() )
                Yii::$app->response->redirect(array('service/readmenu', 'id' => $Menu->id));
        }else echo $this->render('addmenu',['model'=>$Menu]);
    }

    public function actionMenuindex()
    {
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $Menu = new Menu;
        $Menu_data = $Menu->find()->all();
        echo $this->render('menuIndex', array(
            'data' => $Menu_data
        ));
    }






/*  Управление сайтами - КОНЕЦ */









    public function actionDeleteserver($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/serverindex'));
        }
        $Servers = Servers::find()->where(['id'=>$id])->one();
        if ( !@$Servers['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/serverindex'));
        }else{
            $Servers->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/serverindex'));
        }
    }

    public function actionUpdateserver($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Servers = Servers::find()->where(['id'=>$id])->one();
		$balance = $this->getBalance( $id );
        if ($Servers === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/menuindex'));
        }else if (isset($_POST['Servers'])) {
            $data = $_POST['Servers'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Servers->$name = $value;
            if ($Servers->save()){
                Yii::$app->response->redirect(array('service/updateserver', 'id' => $Servers->id));
            }
        } else echo $this->render('addserver', array(
            'model' => $Servers, 'balance'=>$balance
        ));
    }

    public function actionServerjsonpositionsave(){
        $return_handl = true;
        $id = Yii::$app->request->get('id');
        $Servers = Servers::find()->where(['id'=>$id])->one();
        $data_json = Yii::$app->request->get('json_data');
        $Servers->jsondata = $data_json;
        if ( $Servers->save() ) $return_handl = true;
        $data_json_array = json_decode($data_json,true);
        echo json_encode(array('r'=>$return_handl,'data'=>$this->createTree( $data_json_array ),$first=true));
    }
    public function actionReadserver(){
        $Servers = new Servers;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Servers->find()->where(['id'=>Yii::$app->request->get('id')])->one();
        $data_json_array = json_decode($responce['jsondata'],true);
        echo $this->render('readserver',['model'=>$Servers,'data'=>$responce,'menu_editor'=>$this->createTree( $data_json_array )]);
    }

    public function actionAddserver(){
        $Servers = new Servers;
        if (isset($_POST['Servers']))
        {
            $data = $_POST['Servers'];
            foreach($data as $name=>$value)
            $Servers->$name = $value;
            if ( $Servers->save() )
                Yii::$app->response->redirect(array('service/updateserver', 'id' => $Servers->id));
        }else echo $this->render('addserver',['model'=>$Servers]);
    }

    public function actionServerindex()
    {
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $Servers = new Servers;
        $Servers_data = $Servers->find()->all();
        echo $this->render('serverIndex', array(
            'data' => $Servers_data
        ));
    }










/*  Управление PUSH сообщениями - КОНЕЦ */









    public function actionDeletesubscribe($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/serverindex'));
        }
        $Servers = Servers::find()->where(['id'=>$id])->one();
        if ( !@$Servers['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/serverindex'));
        }else{
            $Servers->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/serverindex'));
        }
    }

    public function actionUpdatesubscribe($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Servers = Servers::find()->where(['id'=>$id])->one();
        if ($Servers === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/menuindex'));
        }else if (isset($_POST['Servers'])) {
            $data = $_POST['Servers'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Servers->$name = $value;
            if ($Servers->save()){
                Yii::$app->response->redirect(array('service/updateserver', 'id' => $Servers->id));
            }
        } else echo $this->render('addserver', array(
            'model' => $Servers
        ));
    }

    public function actionSubscribejsonpositionsave(){
        $return_handl = true;
        $id = Yii::$app->request->get('id');
        $Servers = Servers::find()->where(['id'=>$id])->one();
        $data_json = Yii::$app->request->get('json_data');
        $Servers->jsondata = $data_json;
        if ( $Servers->save() ) $return_handl = true;
        $data_json_array = json_decode($data_json,true);
        echo json_encode(array('r'=>$return_handl,'data'=>$this->createTree( $data_json_array ),$first=true));
    }
    public function actionReadsubscribe(){
        $Servers = new Servers;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Servers->find()->where(['id'=>Yii::$app->request->get('id')])->one();
        $data_json_array = json_decode($responce['jsondata'],true);
        echo $this->render('readserver',['model'=>$Servers,'data'=>$responce,'menu_editor'=>$this->createTree( $data_json_array )]);
    }

    public function actionAddsubscribe(){
        $Servers = new Servers;
        if (isset($_POST['Servers']))
        {
            $data = $_POST['Servers'];
            foreach($data as $name=>$value)
            $Servers->$name = $value;
            if ( $Servers->save() )
                Yii::$app->response->redirect(array('service/updateserver', 'id' => $Servers->id));
        }else echo $this->render('addserver',['model'=>$Servers]);
    }

    public function actionSubscribeindex()
    {
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $subscribe = new Subscribe;
        $subscribe_data = $subscribe->find()->all();
        echo $this->render('subscribeindex', array(
            'data' => @$subscribe_data
        ));
    }













/*  Управление пользователями - НАЧАЛО  */

    public function actionDeleteuser($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/userindex'));
        }
        $Categorys = Users::find()->where(['id'=>$id])->one();
        if ( !@$Categorys['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/userindex'));
        }else{
            $Categorys->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/userindex'));
        }
    }

    public function actionUpdateuser($id=NULL)
    {
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Categorys = Users::find()->where(['id'=>$id])->one();
        if ($Categorys === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/userindex'));
        }else if (isset($_POST['Users'])) {
            $data = $_POST['Users'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Categorys->$name = $value;
            if ($Categorys->save()){
                Yii::$app->response->redirect(array('service/adduser', 'id' => $Categorys->id));
            }
        } else {
            echo $this->render('adduser', array(
                'model' => $Categorys
            ));
        }
    }


    public function actionReaduser(){
        $Categorys = new User;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Categorys->find()->where(['id'=>Yii::$app->request->get('id')])->one();

        echo $this->render('addcategory',['model'=>$Categorys,'data'=>$responce]);
    }

    public function actionAdduser(){
        $user = new Users;
        if (isset($_POST['Users']))
        {
            $data = $_POST['Users'];
            foreach($data as $name=>$value)
            $user->$name = $value;
            if ( $user->save() )
                Yii::$app->response->redirect(array('service/updateuser', 'id' => $user->id));
        }else echo $this->render('adduser',['model'=>$user]);
    }

    public function actionUserindex()
    {
        
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $Categorys = new Users;
        $Categorys_data = $Categorys->find()->all();
        echo $this->render('userindex', array(
            'data' => $Categorys_data
        ));
    }







/*  Управление пользователями - КОНЕЦ */









/*  Управление переменными - НАЧАЛО  */

    public function actionDeletevars($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/userindex'));
        }
        $Categorys = Vars::find()->where(['id'=>$id])->one();
        if ( !@$Categorys['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/varsindex'));
        }else{
            $Categorys->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/varsindex'));
        }
    }

    public function actionUpdatevars($id=NULL)
    {
		
		$tables_ = Yii::$app->db->createCommand('SHOW TABLES')->queryAll();
		$tables = [];
		foreach( $tables_ as $tables_row ){
			$tmp = current( $tables_row );
			$tables[] = ['name'=>$tmp,'id'=>$tmp];
		}
		
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Vars = Vars::find()->where(['id'=>$id])->one();
        if ($Vars === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/userindex'));
        }else if (isset($_POST['Vars'])) {
            $data = $_POST['Vars'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Vars->$name = $value;
            if ($Vars->save()){
                Yii::$app->response->redirect(array('service/updatevars', 'id' => $Vars->id));
            }
        } else {
            echo $this->render('addvars', array(
                'model' => $Vars, 'tables' => $tables
            ));
        }
    }


    public function actionReadvars(){
        $Categorys = new User;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Categorys->find()->where(['id'=>Yii::$app->request->get('id')])->one();

        echo $this->render('addcategory',['model'=>$Categorys,'data'=>$responce]);
    }

    public function actionAddvars(){
        $Vars= new Vars;
		
		$tables_ = Yii::$app->db->createCommand('SHOW TABLES')->queryAll();
		$tables = [];
		foreach( $tables_ as $tables_row ){
			$tmp = current( $tables_row );
			$tables[] = ['name'=>$tmp,'id'=>$tmp];
		}
		
        if (isset($_POST['Vars']))
        {
            $data = $_POST['Vars'];
            foreach($data as $name=>$value)
            $Vars->$name = $value;
            if ( $Vars->save() )
                Yii::$app->response->redirect(array('service/updatevars', 'id' => $Vars->id));
        }else echo $this->render('addvars',['model'=>$Vars,'tables'=>$tables]);
    }

    public function actionVarsindex()
    {
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $Vars = new Vars;
        $Vars_data = $Vars->find()->all();
        echo $this->render('varsindex', array(
            'data' => $Vars_data
        ));
    }







/*  Управление переменными - КОНЕЦ */





/*  Управление комментарии - НАЧАЛО  */

    public function actionDeletecomments($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/commentsIndex'));
        }
        $Comments = Comments::find()->where(['id'=>$id])->one();
        if ( !@$Comments['id'] )
        {
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/commentsIndex'));
        }else{
            $Comments->delete();
            Yii::$app->session->setFlash('PostDeleted');
            Yii::$app->getResponse()->redirect(array('service/commentsIndex'));
        }
    }

    public function actionUpdatecomments($id=NULL)
    {
		
		$tables_ = Yii::$app->db->createCommand('SHOW TABLES')->queryAll();
		$tables = [];
		foreach( $tables_ as $tables_row ){
			$tmp = current( $tables_row );
			$tables[] = ['name'=>$tmp,'id'=>$tmp];
		}
		
        if ($id === NULL)
            throw new HttpException(404, 'Not Found');
        $Comments = Comments::find()->where(['id'=>$id])->one();
        if ($Comments === NULL){
            Yii::$app->session->setFlash('PostDeletedError');
            Yii::$app->getResponse()->redirect(array('service/commentsindex'));
        }else if (isset($_POST['Comments'])) {
            $data = $_POST['Comments'];
            //$Menu->jsondata = $Menu->jsondata;
            foreach($data as $name=>$value)
            $Comments->$name = $value;
            if ($Comments->save()){
                Yii::$app->response->redirect(array('service/updatecomments', 'id' => $Comments->id));
            }
        } else {
            echo $this->render('addcomments', array(
                'model' => $Comments, 'tables' => $tables
            ));
        }
    }


    public function actionReadcomments(){
        $Categorys = new Comments;
        if( !@Yii::$app->request->get('id', false) ) Yii::$app->response->redirect(array('service/error'));
        $responce = $Categorys->find()->where(['id'=>Yii::$app->request->get('id')])->one();

        echo $this->render('addcategory',['model'=>$Categorys,'data'=>$responce]);
    }

    public function actionAddcomments(){
		
		$tables_ = Yii::$app->db->createCommand('SHOW TABLES')->queryAll();
		$tables = [];
		foreach( $tables_ as $tables_row ){
			$tmp = current( $tables_row );
			$tables[] = ['name'=>$tmp,'id'=>$tmp];
		}
		
        $Comments = new Comments;
        if (isset($_POST['Comments']))
        {
            $data = $_POST['Comments'];
            foreach($data as $name=>$value)
            $Comments->$name = $value;
            if ( $Comments->save() )
                Yii::$app->response->redirect(array('service/updatecomments', 'id' => $Comments->id));
        }else echo $this->render('addcomments',['model'=>$Comments,'tables'=>$tables ]);
    }

    public function actionCommentsindex()
    { 
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        $Comments = new Comments;
		$where = [];
		if( @$_GET['date_start'] && @$_GET['sate_end'] ){
			$where[] = '( date > '.(int)$_GET['date_start'].' AND date < '.(int)$_GET['sate_end'].' )';
		}else{
			if( @$_GET['server_id'] ) $where[] = 'server_id = '.(int)$_GET['server_id'];
			if( @$_GET['name'] ) $where[] = 'name = \''.$_GET['name'].'\'';
			if( @$_GET['email'] ) $where[] = 'email = \''.$_GET['email'].'\'';
			if( @$_GET['query'] ) $where[] = 'text like \'%'.$_GET['query'].'%\'';
		}
        $Comments = $Comments->find()->where(implode(" ",$where))->orderBy(['id'=>SORT_DESC]);
		
		$countQuery = clone $Comments;
        $pages = new Pagination(['totalCount' => $countQuery->count(), 
            'pageSize' => 20]);
        $pages->pageSizeParam = false;
        $models = $Comments->offset($pages->offset)
            ->limit($pages->limit)
            ->all();
		
		
        echo $this->render('commentsIndex', array(
            'data' => $models, 'pages'=>$pages
        ));
    }







/*  Управление комментарии - КОНЕЦ */





function getBalance( $id = false ){
	
	if( $id == false ) return 0;
	
	$s = Servers::find()->where(['id'=>$id])->one();
	
	if( $s->chat_sms == 1 && trim( $s->chat_sms_login ) != '' && trim( $s->chat_sms_passwd ) != '' ){
		$user = $s->chat_sms_login; // тут ваш логин в международном формате без знака +. Пример: 380501234567
		$password = $s->chat_sms_passwd; // Ваш пароль

		$myXML 	 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
		$myXML 	.= "<request>"."\n";
		$myXML 	.= "<operation>GETBALANCE</operation>"."\n";
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

		// вывод результата в браузер для удобства чтения обрамлен в textarea
		return $response;
	} else return 0;
}


    public function actionStatistic()
    {
		
		$Statistic = new Statistic;
        //if( (int)$_GET['server_id'] <= 0 ) $Statistic_data = $Statistic->find()->limit(14)->all();
		
		$Statistic_data = $Statistic->find()->where('server_id='.(int)$_GET['server_id'])->orderBy(['id'=>SORT_DESC])->limit(2)->all();

		$Statistic_one = $Statistic->find()->where('server_id='.(int)$_GET['server_id'])->orderBy(['id'=>SORT_DESC])->one();
		
		$json_data = json_decode($Statistic_one['data'],true);
		
			$cats = [];
		
			$one_day = [];
		
			foreach( $Statistic_data as $el ){
				$data = json_decode( $el['data'], true );
				$u = $data['ga:users'];
				preg_match_all("/([0-9]{4})([0-9]{2})([0-9]{2})/si",$el['date'],$d);
				//$c = 0;
				//for( $i=0; $i<count($u['ga:pagePath']); $i++ ){
				//	$c = $c + $u['ga:pagePath'][$i][1];
				//}
				$users[] = $u['total'];
				if( !@$one_day[0] ) $one_day[0] = $u['total'];
				$cats[] = "'".$d[2][0]."/".$d[3][0]."'";
			}
			
			foreach( $Statistic_data as $el ){
				$data = json_decode( $el['data'], true );
				$u = $data['ga:pageviews'];
				preg_match_all("/([0-9]{4})([0-9]{2})([0-9]{2})/si",$el['date'],$d);
				$c = 0;
				//for( $i=0; $i<count($u['ga:pagePath']); $i++ ){
				//	$c = $c + $u['ga:pagePath'][$i][1];
				//}
				$views[] = $u['total'];
				if( !@$one_day[1] ) $one_day[1] = $u['total'];
			}
		
			$JavaScript = "

			
				$(function () {
					
				
					$('select').on('change', function (evt) {
						window.location='?server_id=' + this.value;
					});				
					
					
				Highcharts.chart('container', {
					chart: {
						type: 'column',
						//backgroundColor: '#393b45',
						color: '#ffffff'
					},
					title: {
						text: 'Отчеты по посещениям за последнии 14 дней',
						color: '#ffffff'
					},
					subtitle: {
						text: 'Источник: Yandex Метрика',
						color: '#ffffff'
					},
					xAxis: {
						categories: [
							".implode(",",$cats)."
						],
						crosshair: true,
						color: '#ffffff'
					},
					yAxis: {
						min: 0,
						title: {
							text: ''
						},
						color: '#ffffff'
					},
					tooltip: {
						headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',
						pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' +
							'<td style=\"padding:0\"><b>{point.y:.1f}</b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					series: [{
						name: 'Посетители',
						data: [".implode(",",$users)."]

					}, {
						name: 'Просмотры',
						data: [".implode(",",$views)."]

					}]
				});
			});
			
			
			";

			
			$this->getView()->registerJs($JavaScript, View::POS_END);

        echo $this->render('statisticindex', array(
            'data' => $Statistic_data,'json'=>$json_data,'views'=>$one_day[1],'users'=>$one_day[0] 
        ));
    }




    public function actionDev()
    { 
        $JavaScript = " ";
        $this->getView()->registerJs($JavaScript, View::POS_END);
        echo $this->render('devindex');
    }





}
