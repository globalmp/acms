<?php
/**
 * This example shows how to use DKIM message authentication with PHPMailer.
 * There's more to using DKIM than just this code - check out this article:
 * @link https://yomotherboard.com/how-to-setup-email-server-dkim-keys/
 * See also the DKIM code in the PHPMailer unit tests,
 * which shows how to make a key pair from PHP.
 */

require '../PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;

$mail->Priority = 1;

$mail->CharSet = 'utf-8';

$mail->ContentType = 'text/html';

//Set who the message is to be sent from
$mail->setFrom('info@appcallback.com', 'Slava Nadejdin');
//Set an alternative reply-to address
$mail->addReplyTo('info@appcallback.com', 'Slava Nadejdin');
//Set who the message is to be sent to
//$mail->addAddress('service100ballov@gmail.com', 'Slava Efimov');
$mail->addAddress('ldit@list.ru', 'Slava Efimov');
//Set the subject line
$mail->Subject = 'Отлично, мы готовы!';
//This should be the same as the domain of your From address
$mail->DKIM_domain = 'appcallback.com';
//Path to your private key file
$mail->DKIM_private = dirname ( __FILE__ ) . "/privatekey.txt";
//Set this to your own selector
$mail->DKIM_selector = '1469472430.appcallback';
//If your private key has a passphrase, set it here
$mail->DKIM_passphrase = '';
//The identity you're signing as - usually your From address
$mail->DKIM_identity = $mail->From;

$mail->Body = "

<h1>Это очень хорошо</h1>
<p>
Gmail распознает спам и подозрительные письма автоматически: система выявляет вирусы и шаблонный текст и учитывает ваши жалобы на спам и фишинг.
</p><p>
Если вы откроете одно из сообщений в папке Спам, вверху отобразится предупреждение с пояснением. Если какое-то сообщение система посчитает подозрительным, оно будет помечено предупреждением.
</p><p>
Эта информация защитит вас от опасных и мошеннических писем и поможет понять критерии выявления спама.
</p><p>
Ниже перечислены некоторые типичные причины помещения писем в Спам.
</p>
";

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
