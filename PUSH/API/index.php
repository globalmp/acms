<?php

// Это пример обработки приходящих данных,
// нельзя его использовать "как есть" на рабочем сервере,
// он небезопасен и не проверяет данные от пользователя
// и не обрабатывает ошибки
// НЕ НАДО ТАК ;)

$type = $_POST['type'];
$endpoint = $_POST['url'];
$endpoint_parsed = parse_url($endpoint);
$subscriber_id = explode('/', $endpoint_parsed['path']);
$subscriber_id = end($subscriber_id);


switch($type) {

  // Добавляем нового подписчика
  case 'add':
    $find_browser = false;
    $urls = array(
      'chrome' => 'https://android.googleapis.com/', 
      'firefox' => 'https://updates.push.services.mozilla.com/'
    );
    foreach ($urls as $browser => $url) {
      if(strpos($endpoint, $url) !== false) {
        $find_browser = $browser;
        break;
      }
    }

    if($find_browser) {
      $subscribers = json_decode(file_get_contents(dirname(__FILE__).'/subscribers.json'), true);
      if(!in_array($subscriber_id, $subscribers[$find_browser])) {
        $subscribers[$find_browser][] = $subscriber_id;
        $json = json_encode($subscribers);
        if($fh = fopen(dirname(__FILE__).'/subscribers.json', 'w+')) {
          fwrite($fh, $json);
          fclose($fh);
          echo '{"response": "OK", "id": "'.$subscriber_id.'"}';
        }
      }
    }
    break;

    // Сообщение для подписчика
    case 'push':
      $data['notification'] = array(
        "title" => "У вас новое сообщение!",
        "message" => "19:00 от Push-Test\nНу и как работают эти уведомления?",
        "tag" => "some-tag",
        "icon" => "/icon-192x192.png",
        "data" => "/?utm_source=push-api"
      );
      header('Content-Type: application/json');
      echo json_encode($data);
      break;
}