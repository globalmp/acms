<?php

define('MY_KEY', 'AIzaSyDdeDP7wQvJJhF4yY6j48NGpMt9wUt1KNM');
define('TIME_TO_LIVE', 300);

















































$subscribers = json_decode(file_get_contents('subscribers.json'), true);

foreach ($subscribers as $browser => $subscribers_list) {
  foreach ($subscribers_list as $subscriber_id) {
    $result = send_push_message($browser, $subscriber_id);
    echo $subscriber_id."===".$browser."====".$result;
  }
}

function send_push_message($browser, $subscriber_id) {
  $ch = curl_init();
  switch($browser) {
    
    case 'chrome':
      curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
      curl_setopt($ch, CURLOPT_POST, true);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false );
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: key='.MY_KEY, 'Content-Type: application/json'));
      curl_setopt($ch, CURLOPT_POSTFIELDS, 
        json_encode(array(
          //'registration_ids' => array($subscriber_id),
          'to' => $subscriber_id,
          'data' => array('message' => 'send',"score"=> "4x8","time"=> "15:16.2342"),
          'time_to_live' => TIME_TO_LIVE,
          'collapse_key' => 'score_update'
        ))
      );
      break;

    case 'firefox':
      curl_setopt($ch, CURLOPT_URL, 'https://updates.push.services.mozilla.com/push/v5/'.$subscriber_id);
      curl_setopt($ch, CURLOPT_PUT, true);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('TTL: '.TIME_TO_LIVE));
      break;

  }
  $result = curl_exec($ch);
  //echo $result."--------";
  curl_close($ch);
  return $result;
}