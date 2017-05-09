<?php

namespace app\models;

use Yii;
use yii\base\Model;
use app\models\Users;
use yii\base\Event;
use yii\db\ActiveRecord;

/**
 * LoginForm is the model behind the login form.
 *
 * @property User|null $user This property is read-only.
 *
 */
class R extends Model
{

    public static $superadmin = 'admin';
    public static $roles = ['site/contact'=>'[admin]','orders/index'=>'*'];
    public static $exclusion = ['site/index'=>true,'site/login'=>true,'site/signup'=>true];

    public function model(){
        exit;
        Event::on(ActiveRecord::className(), ActiveRecord::EVENT_AFTER_INSERT, function ($event) {
            Yii::trace(get_class($event->sender) . ' добавлен');
        });
    }

    public static function check(){
        if( !Yii::$app->user->isGuest == false ) return false;
        $user_role = Yii::$app->user->identity->getRole();
        if( self::$superadmin == $user_role ) return true;
        $current_info = \Yii::$app->request->resolve();
        $route = $current_info[0];
        $roles = self::$roles;
        if( @self::$exclusion[ $route ] == true || @$roles[ $route ] == '*' ||
            ( isset( $roles[ $route ] ) && @preg_match( "/\\[" . trim( $user_role ) . "\\]/i", $roles[ $route ] ) ) 
            ) return true;
        else \Yii::$app->response->redirect(['site/index','access'=>false]);
    }


}
