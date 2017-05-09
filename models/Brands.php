<?php

namespace app\models;

use Yii;


class Brands extends \yii\db\ActiveRecord
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
        return 'brands';
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
            'username' => 'username',
            'password' => 'password',
            'name' => 'name',
            'register_date' => 'register_date',
            'login_date' => 'login_date',
            'state' => 'state',
            'role' => 'role',
        );
    }
}