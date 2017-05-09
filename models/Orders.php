<?php

namespace app\models;

use Yii;


class Orders extends \yii\db\ActiveRecord
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
                // username and password are both required
                [['title', 'descr'], 'required'],
                ['title', 'string', 'min' => 3, 'max' => 128],


                // password is validated by validatePassword()
                //['password', 'validatePassword'],
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
        return 'orders';
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
            'title' => 'Title',
            'descr' => 'Descr',
            'created' => 'Created',
            'deadline' => 'Deadline',
            'price' => 'Price',
            'tax' => 'Tax',
            'state' => 'State',
            'weight' => 'Weight',
            'owner_id' => 'Owner',
            'client_id' => 'Client ID',
        );
    }
}