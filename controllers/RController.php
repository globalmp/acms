<?php

use yii\base\Model;
use yii\base\Event;
use yii\db\ActiveRecord;

use Yii;

class RController
{
    public static function start(){
		
		
		Event::on(ActiveRecord::className(), ActiveRecord::EVENT_AFTER_FIND, function ($event) {
			if( @$_FILES ) return false;
			$table = $event->sender->tableName();
			$id = $event->sender->id;
			if( !@\Yii::$app->params['var_used'] ){
				$els = Yii::$app->db->createCommand('select * from vars_active')->queryAll();
				if( !@$els ) \Yii::$app->params['var_used']['clear'] = true;
				else{
					foreach( $els as $el ){
						\Yii::$app->params['var_used'][$el['table_name']] = true;
					}
				}
			}
			if( \Yii::$app->params['var_used'][$table] != false ){
				$els = Yii::$app->db->createCommand('select * from vars_data where action=:action limit 1;')
				->bindValue(':action', $table."_".$id)
				->queryAll();
				foreach( $els as $el ) \Yii::$app->params['var_used'][$el['action']][] = $el['data'];
			
			}
			
				$els = Yii::$app->db->createCommand('select * from vars_data where action=:action')
				->bindValue(':action', $table."_".$id)
				->queryAll();

			foreach( $els as $el ) \Yii::$app->params['vars_used'][$table."_".$id][] = [ "", $el['data'] ];
			
		});
		
        Event::on(ActiveRecord::className(), ActiveRecord::EVENT_AFTER_UPDATE, function ($event) {
			if( @$_FILES ) return false;
			$table = $event->sender->tableName();
			$id = $event->sender->id;
			foreach( @$_POST['Vars'] as $uid => $val ){ break; }
			$protected = Yii::$app->db->createCommand('select * from vars where id=:id limit 1;')
			->bindValue(':id', $uid)
			->queryOne();
			$used = [];
			if( @$_POST['AddCategorys'] ){
				Yii::$app->db->createCommand('delete from row_categorys where action=:action')
				->bindValue(':action', $table . '_' . $id)
				->execute();
				$cats = $_POST['AddCategorys'];
				foreach( $cats as $el_ )
				if( !@$used[ $el_ ] ){
					Yii::$app->db->createCommand()->insert('row_categorys', [
								'action' => $table . '_' . $id,
								'category_id' => $el_,
								'other_id' => $id,
								'server_id' => $event->sender->server_id
							])->execute();
					$used[ $el_ ] = true;
				}
			}				
			if( @$_POST['Vars'] && $table != 'Vars' ){
				Yii::$app->db->createCommand('delete from vars_data where action=:action')
				->bindValue(':action', $table . '_' . $id)
				->execute();
				Yii::$app->db->createCommand('delete from vars_active where table_name=:table_name')
				->bindValue(':table_name', $table)
				->execute();
				Yii::$app->db->createCommand()->insert('vars_active', [ 'table_name' => $table ])
				->execute();
				\Yii::$app->params['var_used'][$table] = true;
				$vars = $_POST['Vars'];
				foreach( $vars as $el_name=>$el_value ){
					if( is_array( $el_value ) == true ){
						foreach( $el_value as $el_tmp )
						Yii::$app->db->createCommand()->insert('vars_data', [
							'action' => $table . '_' . $id,
							'var_id' => $el_name,
							'server_id' => $event->sender->server_id,
							'data' => $el_tmp,
						])->execute();
					}else{
						Yii::$app->db->createCommand()->insert('vars_data', [
							'action' => $table . '_' . $id,
							'var_id' => $el_name,
							'server_id' => $event->sender->server_id,
							'data' => $el_value,
						])->execute();	
					}
				}
			}
        });
		
        Event::on(ActiveRecord::className(), ActiveRecord::EVENT_AFTER_INSERT, function ($event) {
			$table = $event->sender->tableName();
			$id = $event->sender->id;
			if( @$_FILES ) return false;
			foreach( @$_POST['Vars'] as $uid => $val ){ break; }
			$protected = Yii::$app->db->createCommand('select * from vars where id=:id limit 1;')
			->bindValue(':id', $uid)
			->queryOne();
			$used = [];
			if( @$_POST['AddCategorys'] ){
				Yii::$app->db->createCommand('delete from row_categorys where action=:action')
				->bindValue(':action', $table . '_' . $id)
				->execute();
				$cats = $_POST['AddCategorys'];
				foreach( $cats as $el_ )
				if( !@$used[ $el_ ] ){
					Yii::$app->db->createCommand()->insert('row_categorys', [
								'action' => $table . '_' . $id,
								'category_id' => $el_,
								'other_id' => $id,
								'server_id' => $event->sender->server_id
							])->execute();
					$used[ $el_ ] = true;
				}
			}		
			if( @$_POST['Vars'] && $table != 'Vars' ){
				Yii::$app->db->createCommand('delete from vars_data where action=:action')
				->bindValue(':action', $table . '_' . $id)
				->execute();
				Yii::$app->db->createCommand('delete from vars_active where table_name=:table_name')
				->bindValue(':table_name', $table)
				->execute();
				Yii::$app->db->createCommand()->insert('vars_active', [ 'table_name' => $table ])
				->execute();
				\Yii::$app->params['var_used'][$table] = true;
				$vars = $_POST['Vars'];
				foreach( $vars as $el_name=>$el_value ){
					if( is_array( $el_value ) == true ){
						foreach( $el_value as $el_tmp )
						Yii::$app->db->createCommand()->insert('vars_data', [
							'action' => $table . '_' . $id,
							'var_id' => $el_name,
							'server_id' => $event->sender->server_id,
							'data' => $el_tmp,
						])->execute();
					}else{
						Yii::$app->db->createCommand()->insert('vars_data', [
							'action' => $table . '_' . $id,
							'var_id' => $el_name,
							'server_id' => $event->sender->server_id,
							'data' => $el_value,
						])->execute();	
					}
				}
			}
        });
		
		
    }
}
