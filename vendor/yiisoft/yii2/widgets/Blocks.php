<?php


namespace yii\widgets;

use Yii;
use yii\base\Component;
use yii\base\ErrorHandler;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\base\Model;
use yii\web\JsExpression;
use yii\base\Widget;
use app\models\Servers;
use app\models\Categorys;
use app\models\Comments;
use app\models\CommentForm;
use app\models\Pages;
use app\models\Images;
use app\models\MenuWidget;
use app\models\R;
use yii\data\Pagination;
use yii\widgets\Menu;


class Blocks extends Widget
{
    public $type;
    public $param;
    public $tpl;
    public $server;
    public $server_data;
    public $id;
    public $good_info;
    public $action;
    public $slug;
    public $limit=5;
    public $message;

	public $table = 'def';
	
	public $input;
	
	public $form = '';
	public $list = '';
	
	
    public $current_url;
    public $current_url_from_api;

	
	public $reCaptcha;
	
    public function init()
    {
        parent::init();
        $this->current_url = $_SERVER['REQUEST_URI'];
        $action___ = @Yii::$app->controller->module->requestedAction->id;
        $slug___ = @Yii::$app->request->get('slug', false);
        $this->current_url_from_api = $action___ . ((@$slug___)?"/".urldecode($slug___):"");
        $block_widget = false;
        $this->server = $_SERVER['SERVER_NAME'];
        Yii::$app->params['server'] = $this->server;
        $dir = dirname(__FILE__) . '/';
        $this->server_data = Servers::find()->where(['host'=>$this->server])->one();
        if( !@$this->tpl ) $this->tpl = '';
		
        if( ( @$this->action != false ) ){
            $action_ = @Yii::$app->controller->module->requestedAction->id;
            $slug_ = @Yii::$app->request->get('slug', false);
			if( @$this->action == 'all' ) $block_widget = false;
            else if( @$this->action != $action_ && trim( @$this->slug ) == '' ) $block_widget = true;
            else if( @$this->action != $action_ && trim( @$this->slug ) != $slug_ ) $block_widget = true;
        }

        if( $block_widget != true ){
            if ( @$this->type == "menu" ) 
                $this->message = $this->buildMenu( @$this->param );
            elseif ( @$this->type == "categorys" ) 
                $this->message = $this->buildCategorys( @$this->param );
			elseif ( @$this->type == "comments" ) 
                $this->message = $this->buildComments__( @$this->table, @$this->param );
            elseif ( @$this->type == "content" ) 
                $this->message = $this->buildContent();
            elseif ( @$this->type == "page" ) 
                $this->message = $this->buildPage( @$this->param, @$this->tpl, ((is_array(@$this->good_info)==true)?@$this->good_info:false) );
            elseif ( @$this->type == "categorypages" ) 
                $this->message = $this->CategoryPages( @$this->param, @$this->tpl, $this->limit );
            elseif ( @$this->type == "widget" ) 
                $this->message = $this->buildWidget( @$this->param );
            else $this->message = "Init widget error: no type";
        }
    }

    public function run()
    {
        return $this->message;
    }

	private function buildComments__( $action=NULL, $id=NULL ){
		if( $action == NULL || $id=NULL ) return "";
		
		$Comments = new Comments;
        if (isset($_POST['Comments']))
        {
            $model_add = new CommentForm();

			if ( $model_add->add() ) {
                return $this->goBack();
            }
		}
		


		\Yii::$app->view->injectToBodyEnd = \Yii::$app->view->injectToBodyEnd . "
		<script>
			function recaptchaCallback(){
                $('button[name=add-button]').prop('disabled', false);
            }
		</script> 
		";
		$comments = Comments::find()->where(['action'=>$this->table,'parent_id'=>0,'row_id'=>$this->param])->orderBy(['date'=>SORT_DESC]); //->all();

		
		
		


		
		
        $countQuery = clone $comments;
		
        $pages = new Pagination(['totalCount' => $countQuery->count(), 
            'pageSize' => 10]);
			
        $pages->pageSizeParam = false;
        $models = $comments->offset($pages->offset)
            ->limit($pages->limit)
            ->all();
		
		
		
		
		
		$form_html = \Yii::$app->view->renderFile( "@app/" . Yii::$app->params['skin'].'/' . ((!@$this->tpl)?'blank.php':@$this->tpl), 
		[
			'model'=>(new Comments),
			'comments'=>$models,
			'server'=>$this->server_data,
			'row_id'=>@$this->param,
			'action'=>@$this->table,
			'pages'=>$pages
		] );


        
		return $form_html;
	}
	
    private function CategoryPages( $id = NULL, $tpl = false, $limit = 5 ){

       $pages = Pages::find()->where(['category_id'=>$id])->limit([$limit])->all();

          foreach( $pages as $page_data ){
        
            $images = Images::find()->where(['page_id'=>$page_data->id])->orderBy(['position'=>SORT_ASC])->all();
            foreach( $images as $img ){
              $img = "<img src=\"".$img->original."\" class=\"widget_img\" alt=\"".html_entity_decode($page_data['title'])."\">";
              $tpl = str_replace( "{image_1}",$img, $tpl);
            }
            $tpl = str_replace( "{date}", date("d/m/Y",$page_data['add_date']), $tpl);
            $tpl = str_replace( "{title}", html_entity_decode($page_data['title']), $tpl);
            $tpl = str_replace( "{short_story}", $page_data['short_story'], $tpl);
            $tpl = str_replace( "{full_story}", html_entity_decode($page_data['full_story']), $tpl);
            $tpl = str_replace( "{link}", 
                "/page/" . (($page_data['alt'])?$page_data['alt']:$page_data['id']), 
                $tpl);
            if( $good_info != false ) $tpl = $this->goodForm( $tpl, $good_info );
            return $tpl;
            
          }
          

    }


    private function buildPage( $id = NULL, $tpl = false, $good_info = false ){
        if( is_int( (int) $id ) == true && (int) $id > 0 )
            $page_data = Pages::find()->where(['id'=>$id,'server_id'=>$this->server_data['id']])->one();
        else $page_data = Pages::find()->where(['alt'=>$id,'server_id'=>$this->server_data['id']])->one();
        if(!@$page_data) return "PAGE " . $id . " NOT FOUND";
        elseif( $tpl != false && trim( $tpl ) != '' ){
        
            $images = Images::find()->where(['page_id'=>$page_data->id])->orderBy(['position'=>SORT_ASC])->all();

            foreach( $images as $img ){
              $img = "<img src=\"".$img->original."\" class=\"widget_img\" alt=\"".html_entity_decode($page_data['title'])."\">";
              $tpl = str_replace( "{image_1}",$img, $tpl);
            }
        
            $tpl = str_replace( "{title}", html_entity_decode($page_data['title']), $tpl);
            $tpl = str_replace( "{short_story}", $page_data['short_story'], $tpl);
            $tpl = str_replace( "{full_story}", html_entity_decode($page_data['full_story']), $tpl);
            $tpl = str_replace( "{link}", 
                "/page/" . (($page_data['alt'])?$page_data['alt']:$page_data['id']), 
                $tpl);
            if( $good_info != false ) $tpl = $this->goodForm( $tpl, $good_info );
            return $tpl;
        } else { 
            return html_entity_decode(@$page_data['full_story']);
        }
    }

    private function goodForm( $tpl, $good_info ){
        return $tpl;
    } 

/*СТРОИМ КАТЕГОРИИ*/

    private function c__($id, $data_array=false){
        $out_array = array();
        $category_data = Categorys::find()
        ->where(['parent_id'=>$id,'server_id'=>$this->server_data['id']])
        ->orderBy(['position'=>SORT_ASC])
        ->all();
        $i = 0;
        foreach( $category_data as $cat ){
            $out_array[$i]['label'] = $cat[ 'title' ];
            $out_array[$i]['url'] = ((trim(@$cat['alt'])!='')?trim(@$cat['alt']):$cat['id']); 
            $out_array[$i]['items'] = $this->c__( $cat['id'] );
        }
        return $out_array;
    }
    private function buildCategorys( $data_array = null ){
        if( $data_array === null ) return "Build category - no name";
        $category_data = Categorys::find()
        ->where(['parent_id'=>$data_array['id'],'server_id'=>$this->server_data['id']])
        ->orderBy(['position'=>SORT_ASC])
        ->all();
        $category = array();
        $i = 0;
        foreach( $category_data as $cat ){
            $category[$i]['label'] = $cat[ 'title' ];
            $category[$i]['url'] = ((trim(@$cat['alt'])!='')?trim(@$cat['alt']):$cat['id']); 
            $category[$i]['items'] = $this->c__( $cat['id'], $data_array );
        }
        return Menu::widget([
            'options' => @$data_array['options'],
            'submenuTemplate' => @$data_array['submenuTemplate'],
            'activeCssClass'=>@$data_array['activeCssClass'],
            'items' => $category
                ]);
    } 

/*СТРОИМ КАТЕГОРИИ*/


    private function m__($arr = false, $data_array=false){
        $out_array = array();
        for($i=0;$i<count( $arr );$i++){
            $out_array[$i]['label'] = $arr[ $i ][ 'name' ];
            $out_array[$i]['url'] = $arr[ $i ][ 'link' ];
            if( urldecode( $this->current_url ) == $out_array[$i]['url'] ||
                $this->current_url_from_api == $out_array[$i]['url']
             ) 
                $out_array[$i]['options'] = array('class'=>@$data_array['activeCssClass']);
            if( @$arr[$i]['children'] ) $out_array[$i]['items'] = $this->m__( @$arr[$i]['children'] );
        }
        return $out_array;
    }
    private function buildMenu( $data_array = null ){
        if( $data_array === null ) return "Build menu - no name";
        $menu_data = MenuWidget::find()->where(['id'=>$data_array['id'],'server_id'=>$this->server_data['id']])->one();
        $jsondata = json_decode($menu_data['jsondata'],true);
		for($i=0;$i<count($jsondata);$i++){
			$jsondata[$i]['link'] = $jsondata[$i]['link'];
			if( is_array( $jsondata[$i]['children'] ) == true ){
				$l = $jsondata[$i]['children'];
				for($i2=0;$i2<count($l);$i2++){
					$jsondata[$i]['children'][$i2]['link'] = $jsondata[$i]['children'][$i2]['link'];
				}
			}
		}
		//print_r($jsondata);
		//exit;
        $menu = $this->m__( $jsondata, $data_array );
        return Menu::widget([
            'options' => @$data_array['options'],
            'submenuTemplate' => @$data_array['submenuTemplate'],
            'activeCssClass'=>@$data_array['activeCssClass'],
            'items' => $menu
                ]);
    } 

}