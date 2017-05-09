<?php

namespace app\models;

use Yii;

class User extends \yii\base\Object implements \yii\web\IdentityInterface
{
    public $id;
    public $username;
    public $password;
    public $authKey;
    public $accessToken;
    public $register_date;
    public $login_date;
    public $state;
    public $role;
    public $name;

    //const ROLE_ADMIN = 100;

    /**
     * @inheritdoc
     */

    public function getRole(){
        return $this->role;
    }

    public static function findIdentity($id)
    {
        $connection = Yii::$app->db;
        $command = $connection->createCommand( "select * from users where id = :id limit 1;" );
        $command->bindParam( ":id", $id, 2);
        $row = $command->queryOne();
        return isset( $row['id'] ) ? new static( $row ) : null;
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        $connection = Yii::$app->db;
        $command = $connection->createCommand( "select * from users where accessToken = :accessToken limit 1;" );
        $command->bindParam( ":accessToken", $token, 1);
        $row = $command->queryOne();
        return isset( $row['id'] ) ? new static( $row ) : null;

    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        $connection = Yii::$app->db;
        $command = $connection->createCommand( "select * from users where username = :login limit 1;" );
        $command->bindParam( ":login", $username, 1);
        $row = $command->queryOne();
        if( isset( $row['id'] ) && Yii::$app->user->isGuest )
            $connection->createCommand()->update('users', ['login_date' => time()], 'id = ' . $row['id'])->execute();
        return isset( $row['id'] ) ? new static( $row ) : null;
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->authKey;
    }

    public function getRolesByUser( $user_id ){
        $connection = Yii::$app->db;
        $command = $connection->createCommand( "select * from users where id = :id limit 1;" );
        $command->bindParam( ":id", $user_id, 1);
        $row = $command->queryOne();
        return isset( $row['id'] ) ? new static( $row['role'] ) : null;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->authKey === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return $this->password === $password;
    }
}
