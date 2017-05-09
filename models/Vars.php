<?php

namespace app\models;

use Yii;


class Vars extends \yii\db\ActiveRecord
{

/*
    public $id;
    public $title;
    public $descr;
    public $created;
    public $deadline;
    public $price;
    public $tax;
    public $state;
    public $owner_id;
*/
    /**
     * @return array the validation rules.
     */
        public function rules()
        {
            return [

            ];
        }

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Comments the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }
 
    /**
     * @return string the associated database table name
     */
    public static function tableName()
    {
        return 'vars';
    }
 
    public static function findIdentity($id)
    {
        $connection = Yii::$app->db;
        $command = $connection->createCommand( "select * from vars where id = :id limit 1;" );
        $command->bindParam( ":id", $id, 2);
        $row = $command->queryOne();
        return isset( $row['id'] ) ? new static( $row ) : null;
    }

    /**
     * @return array primary key of the table
     **/     
    public static function primaryKey()
    {
        return array('id');
    }
 
    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'row_id' => 'Row ID',
            'other_id' => 'other_id',
            'action' => 'action',
            'comment' => 'comment',
            'user_id' => 'user_id',
        );
    }
}