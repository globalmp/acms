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
use app\models\Servers;
use app\models\Categorys;
use app\models\Comments;
use app\models\Pages;
use app\models\Menu;
use app\models\Images;
use app\models\Logs_info;
use app\models\R;

use app\models\Vars;
use app\models\Vars_data;

use app\models\OG;

use yii\data\Pagination;
use yii\helpers\Html;
use yii\web\View;

class GsController extends Controller
{
    /**
     * @inheritdoc
     */

    public $layout = 'main';
    public $server = 'default';
    public $skin = false;
    public $view = 'default';
    public $server_info = false;
    public $server_data = false;
 
	public $cats = [];
	public $slug = false;
	public $captcha;

 
	public function actions()
	{

	}	

	
    public function init(){
        $this->server = $_SERVER['SERVER_NAME'];
        $this->server_info = $_SERVER;
        Yii::$app->params['server'] = $this->server;
        $dir = dirname(__FILE__) . '/';
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();
		// Переадресация с HTTP на HTTPS - если включена
		if( $_SERVER['SERVER_PORT'] != '443' && $this->server_data['https'] == 1 )
		{
			header('Location: https://'.$this->server_data['host'] . $_SERVER['REQUEST_URI']);
		}
		// Переадресация с HTTP на HTTPS - если включена
        if( $this->server_data['layout'] == 'default' || $this->server_data['layout'] == '' ){
            $this->view = $this->server;
            Yii::$app->params['skin'] = "/views/gs/".$this->server;
        }else{
            $this->view = $this->server_data['layout'];
            Yii::$app->params['skin'] = "/views/gs/".$this->server_data['layout'];
        }
        if( is_dir( $dir . "../views/gs/" . $this->view ) == false )
        {
            Yii::$app->getResponse()->redirect(array('error'));
        } else $this->layout = "../gs/" . $this->view . '/main';
		//Загрузка глобальных переменных
		$vars = Vars::find()->where(" (`server_id` = ".$this->server_data['id']." or `server_id` = 0 ) ")->all();
	    $vars_ready = Vars_data::find()->where(" (`server_id` = ".$this->server_data['id']." or `server_id` = 0 ) ")->all();
		$ready_tmp = [];
		foreach( $vars_ready as $el_val ) if( trim( $el_val->data ) != '' ) $ready_tmp[ $el_val->var_id ] = $el_val->data;
		foreach( $vars as $el_name => $el_val ){
			Yii::$app->params['vars'][ ( ( $el_val->alt ) ? $el_val->alt : $el_val->id ) ] = (( $ready_tmp[ $el_val->id ] )? $ready_tmp[ $el_val->id ] : $el_val->def );
			Yii::$app->params['vars_be_id'][ $el_val->id ] = (( $ready_tmp[ $el_val->id ] )? $ready_tmp[ $el_val->id ] : $el_val->def );
		
		}
		
		
		$Phone = '';
		if( $this->server_data['chat'] == 1 && @\Yii::$app->params['setPhone'] == false ){
			@\Yii::$app->params['setPhone'] = true;
			$Phone = '
			
			<script type=\'text/javascript\' src=\'/round_phone/phone.js?'.rand(111,999).'\'></script>
							<script type="text/javascript">//<![CDATA[
								var newton_callback_id="b224ebed14c51a9d8c1b1cae5be43db7";
							//]]></script>
							
							';
		}
 
		$JavaScript = @$this->server_data['metrika_code'];
        \Yii::$app->view->injectToBodyEnd = $JavaScript . $Phone;

		
		//Конец загрузки глобальных переменных
	}

    private function recordLog( $text ){
      $log_data = new Logs_info;
      //print_r($log_data);
      $log_data->ip = @$this->server_info['REMOTE_ADDR'];
      $log_data->server_id = @$this->server_data['id'];
      $log_data->referer = @$this->server_info['HTTP_REFERER'];
      $log_data->user_agent = @$this->server_info['HTTP_USER_AGENT'];
      $log_data->page = @$text;
      $log_data->time = time();
      
      if( $log_data->save() ){
              
      }
    }

	
    
    public function actionSslvalidation(){
      @header("Content-type: text/plain");
      $id = @Yii::$app->request->get('slug', false);
      echo $id;
      exit;
    }


    public function actionManifest(){
      @header("Content-type: text/json; charset=utf-8");

      $param_ = [];
      $param_['name'] = @$this->server_data['title'];
      $param_['short_name'] = @$this->server_data['meta_description'];
      $param_['icons'] = ['src'=>"/icon-192x192.png",'sizes'=>"192x192",'type'=>"image/png"];
      $param_['start_url'] = '/index.html?homescreen=1';
      $param_['display'] = 'standalone';
      $param_['gcm_sender_id'] = @$this->server_data['google_id'];
      $param_['gcm_user_visible_only'] = true;

      echo json_encode($param_);

      exit;
    }


    public function actionServiceworker(){
    
        @header("Content-type: text/javascript; charset=utf-8");
          echo file_get_contents("http://" . $this->server_data['host'] . "/PUSH/service-worker.js");
        exit;
    
    }


    public function actionRobots(){
    
      $this->recordLog( "/robots.txt");
      
      @header("Content-type: text/plain; charset=utf-8");
        echo "User-Agent: *\n";
        echo "Disallow: /admincp\n";
        echo "Disallow: /pages/*\n";
        echo "Disallow: /service/*\n";
        echo "Host: ".$this->server_data['host']."\n";
        echo "Sitemap: http://".$this->server_data['host']."/sitemap.xml\n";
      exit;
    }
    
    public function actionFavicon(){
      @header("Content-type: image/ico");
        if( is_file( dirname(__FILE__). "/../views/gs/".$this->server_data['host']."/favicon.ico" ) == true )
          echo file_get_contents( dirname(__FILE__). "/../views/gs/".$this->server_data['host']."/favicon.ico");
      exit;
    }

    public function actionSitemap(){
    
      $this->recordLog( "/sitemap.xml");
    
      @header("Content-type: text/xml; charset=utf-8");
      $page_data = Pages::find()->where(['server_id'=>$this->server_data['id']])->limit(1000)->all();
      $xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
        <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
        <url>
        <loc>http://".$this->server_data['host']."/</loc>
        <lastmod>".date("Y-m-d")."</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>";
      foreach($page_data as $page){
        $xml .= "<url>
        <loc>http://".$this->server_data['host']."/page/".((@$page->alt!='')?$page->alt:$page->id)."</loc>
        <lastmod>".date("Y-m-d",$page->add_date)."</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
        </url>";
      }
      $xml .= "</urlset>";
      echo $xml;
      exit;
    }

    /* НАЧАЛО РАБОТА С КАТЕГОРИЯМИ */
    public function actionCategory(){
        $id = @Yii::$app->request->get('slug', false);
		if( $this->slug != false ){
			$id = $this->slug;
		}
        //$this->recordLog( "/category/".$id );
        if( $id == false ) $id = 0;
        elseif( is_int( (int) $id ) == true && (int) $id > 0 ){
            $id = $id;
        }else{
            $one_data = Categorys::find()->where(['alt'=>$id,'server_id'=>$this->server_data['id']])->one();
            if( @$one_data['id'] > 0 ) $id = @$one_data['id'];
            else $id = 0;
            unset( $one_data );
        }
        if( @$id == NULL ){
            $to_output = ['id'=>$this->server];
        }
		$to_output = [];

        $category_data = Categorys::find()->where(['id'=>$id,'server_id'=>$this->server_data['id']])->one();
        if( !@$category_data ) return $this->render( $this->view . '/error' );
        $child_array = $this->children_category( $id, (($id>0)?array($id=>$id):array()) );
        $ll = [];
		foreach( $child_array as $val ) if( !@$ll[$val] ){ 
			$to_output2[] = "pages.category_id = " . $val; 
			$to_output[] = "row_categorys.category_id = " . $val; 
			$ll[$val] = true; 
		}

		$Pages_data = Pages::find()
			->select('pages.*')
			->leftJoin('row_categorys', implode( " OR ", $to_output ))
			->where('pages.id = row_categorys.other_id' . ((count($to_output2)>0)?" OR ".implode(" OR ",$to_output2):"") );


		
        $countQuery = clone $Pages_data;

        $pages = new Pagination(['totalCount' => $countQuery->count(), 'pageSize' => 20]);
        $pages->pageSizeParam = false;
        $models = $Pages_data->offset($pages->offset)
            ->limit($pages->limit)
            ->all();
			
        echo $this->render( $this->view . '/' . ((@$category_data['template']!='' && @$category_data['template']!='default')?@$category_data['template']:"category"), 
            array( 'category'=>$category_data, 'cats'=>$this->cats, 'models' => $models, 'pages' => $pages ) );
    }

    private function children_category( $id = 0, $arr = NULL ){
        $Categorys = new Categorys;
        $categorys_data = $Categorys->find()->where( ['parent_id'=>$id, 'server_id'=>$this->server_data['id']] )->all();
        foreach( $categorys_data as $el ){
            $arr[ $el->id ] = $el->id;
            $arr = $this->children_category( $el->id, $arr );
        }
        return $arr;
    }
    /* КОНЕЦ РАБОТА С КАТЕГОРИЯМИ */

    public function actionError(){
        @header("HTTP/1.1 404 Not Found");
        echo $this->render( $this->view . '/error' );
        exit;
    }

    public function actionPage()
    {
        $id = @Yii::$app->request->get('slug', false);
        
        $id = urldecode($id);

        $this->recordLog( "/page/".$id );

        if( $id == false ) 
            Yii::$app->getResponse()->redirect(array('error'));
        elseif( is_int( (int) $id ) == true && (int) $id > 0 )
            $page_data = Pages::find()->where(['id'=>$id,'server_id'=>$this->server_data['id']])->one();
        else $page_data = Pages::find()->where(['alt'=>urldecode($id),'server_id'=>$this->server_data['id']])->one();
        if( is_int( (int) $id ) == true && (int) $id > 0 && trim( @$page_data->alt ) != '' ){
          header("HTTP/1.1 301 Moved Permanently");
          header("Location: /page/" . trim( $page_data->alt ));
          exit();
        }
        
        
        \Yii::$app->view->registerMetaTag(['name' => 'keywords', 'content' => @$page_data->meta_keywords]);
        \Yii::$app->view->registerMetaTag(['name' => 'description', 'content' => @$page_data->meta_description ]);

        \Yii::$app->view->registerMetaTag(['property' => 'og:title', 'content' => ((!@$page_data->meta_title)?$page_data->title:$page_data->meta_title)]);
        \Yii::$app->view->registerMetaTag(['property' => 'og:description', 'content' => @$page_data->meta_description ]);
        
        $images = Images::find()->where(['page_id'=>$page_data->id])->orderBy(['position'=>SORT_ASC])->all();

        foreach( $images as $img )
          $images_array[] = $img->original;
        
        \Yii::$app->view->registerMetaTag(['property' => 'og:image', 'content' => ((@$images_array[0])?'http://' . $this->server_data['host'] .  $images_array[0]:"") ]);
        
        \Yii::$app->view->registerMetaTag(['property' => 'og:type', 'content' => 'website']);
        \Yii::$app->view->registerMetaTag(['property' => 'og:url', 'content' => 'http://' . $this->server_data['host'] . "/page/" . $page_data->id ]);
            
        
        if( !@$page_data )
            Yii::$app->getResponse()->redirect(array('error'));
        else{
            $page_data->views = $page_data->views + 1;
            if( $page_data->update() )
                return $this->render( $this->view.'/'.((@$page_data['template']!='' && @$page_data['template']!='default')?@$page_data['template']:"page"), ['model'=> $page_data] );
            else Yii::$app->getResponse()->redirect(array('error'));
        }
    }

    public function actionHome()
    {

    \Yii::$app->view->registerMetaTag(['name' => 'keywords', 'content' => @$this->server_data['meta_keywords']]);
    \Yii::$app->view->registerMetaTag(['name' => 'description', 'content' => @$this->server_data['meta_description'] ]);

    \Yii::$app->view->registerMetaTag(['property' => 'og:title', 'content' => ((!@$this->server_data['meta_title'])?$this->server_data['title']:$this->server_data['meta_title'])]);
    \Yii::$app->view->registerMetaTag(['property' => 'og:description', 'content' => @$this->server_data['meta_description'] ]);
    
    $images = Images::find()->where(['route_id'=>@$this->server_data['id'],'route'=>'service/updateserver'])->orderBy(['position'=>SORT_ASC])->all();
    foreach( $images as $img )
      $images_array[] = $img->original;
    
    \Yii::$app->view->registerMetaTag(['property' => 'og:image', 'content' => ((@$images_array[0])?'http://' . $this->server_data['host'] .  $images_array[0]:"") ]);
    
    \Yii::$app->view->registerMetaTag(['property' => 'og:type', 'content' => 'website']);
    \Yii::$app->view->registerMetaTag(['property' => 'og:url', 'content' => 'http://' . $this->server_data['host']]);

        $this->recordLog( "/" );
        return $this->render( $this->view.'/index', ['model'=>$this->server_data] );
    }

    public function actionIndex()
    {
    
    
    
        return $this->render( $this->view.'/index' );
    }
	
	
	public function actionSelector(){
      $slug = @Yii::$app->request->get('slug', false);
		if (strpos($slug,"/") !== false) {
			$way = explode("/",$slug);
			$end_symbol = end( $way );
			$type = false;
			if( trim( $end_symbol ) != '' ){
				$slug = $end_symbol;
				$type = 'page';
				$this->slug = $slug;
			} else if( trim( $way[(count($way)-2)] ) != '' ){
				$slug = trim( $way[(count($way)-2)] );
				$type = 'category';
				$this->slug = $slug;
			} else {
				
				header('HTTP/1.0 404 Not Found');
				echo $this->render( $this->view . '/error' );
				exit;
			}
      
			$cats = [];
			if( $type )
			switch ($type) {
				case 'page':
					for($i=0;$i<(count($way)-1);$i++){
						if( trim( $way[$i] ) != '' ){
							$way[$i] = \addslashes($way[$i]);
							$sql = '(
							alt = \''.$way[$i].'\'
							or 
							id = \''.$way[$i].'\' ) 
							and 
							server_id = \''.$this->server_data['id'].'\'';
							$cats[] = Categorys::find()->where( $sql )->one();
						}
					}
					break;
				case 'category':
					for($i=0;$i<(count($way)-2);$i++){
						if( trim( $way[$i] ) != '' ){
							$way[$i] = \addslashes($way[$i]);
							$sql = '(
							alt = \''.$way[$i].'\'
							or 
							id = \''.$way[$i].'\' ) 
							and 
							server_id = \''.$this->server_data['id'].'\'';
							$cats[] = Categorys::find()->where( $sql )->one();
						}
					}
					break;
			}
			$this->cats = $cats;
			
		}
		  if( $slug == false ){
			  Yii::$app->getResponse()->redirect(array('error'));
			  exit;
		  }
							$sql = '(
							alt = \''.$slug.'\'
							or 
							id = \''.$slug.'\' ) 
							and 
							server_id = \''.$this->server_data['id'].'\'';

        $Category = Categorys::find()->where($sql)->one();
		$Pages = Pages::find()->where(['alt'=>$slug, 'server_id'=>$this->server_data['id']])->orderBy(['add_date'=>SORT_DESC])->one();
	  if( @$Category->id ){
			$this->actionCategory();
	  }else if( @$Pages->id ){
		    $page_data = $Pages;
		    \Yii::$app->view->registerMetaTag(['name' => 'keywords', 'content' => @$page_data->meta_keywords]);
			\Yii::$app->view->registerMetaTag(['name' => 'description', 'content' => @$page_data->meta_description ]);
			\Yii::$app->view->registerMetaTag(['property' => 'og:title', 'content' => ((!@$page_data->meta_title)?$page_data->title:$page_data->meta_title)]);
			\Yii::$app->view->registerMetaTag(['property' => 'og:description', 'content' => @$page_data->meta_description ]);
			$images = Images::find()->where(['page_id'=>$page_data->id])->orderBy(['position'=>SORT_ASC])->all();
			foreach( $images as $img )
			  $images_array[] = $img->original;
			\Yii::$app->view->registerMetaTag(['property' => 'og:image', 'content' => ((@$images_array[0])?'http://' . $this->server_data['host'] .  $images_array[0]:"") ]);
			\Yii::$app->view->registerMetaTag(['property' => 'og:type', 'content' => 'website']);
			\Yii::$app->view->registerMetaTag(['property' => 'og:url', 'content' => 'http://' . $this->server_data['host'] . "/page/" . $page_data->id ]);
			if( !@$page_data )
				Yii::$app->getResponse()->redirect(array('error'));
			else{
				$page_data->views = $page_data->views + 1;
				if( $page_data->update() )
					return $this->render( $this->view.'/'.((@$page_data['template']!='' && @$page_data['template']!='default')?@$page_data['template']:"page"), ['cats'=>$this->cats,'model'=> $page_data] );
				else Yii::$app->getResponse()->redirect(array('error'));
			}
	  }else{
		  header('HTTP/1.0 404 Not Found');
		  echo $this->render( $this->view . '/error' );
		  exit;
	  }
      echo $id;
      exit;
    }
	

}
