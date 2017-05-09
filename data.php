<?PHP
header("Location: /");
exit;
$strLink = "";
$row = 1;
if (($handle = fopen( dirname(__FILE__) . "/COULE.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
        //if( $row > 30000 ) exit;
        $num = count($data);
        //echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        //for ($c=0; $c < $num; $c++) {
            $strLink = $strLink . $data[11] . "<br />\n";
        //}
    }
    fclose($handle);
}


echo <<<END
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Партнерские ссылки</title>
</head>
<body>
END;
echo $strLink;
echo '</body></html>';


?>
