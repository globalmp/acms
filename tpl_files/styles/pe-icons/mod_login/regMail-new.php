<?php



$p = new py;
$file_home = dirname(__FILE__);
//$proxys_ = explode("\n",@file_get_contents($file_home."/proxy.txt"));
$proxys = explode("\n",@file_get_contents("http://proxy.adtec.com.ua/"));
//for($i=0;$i<count($proxys_);$i++)
//$proxys[] = $proxys_[$i];
//exit;
for($m=0;$m<count($proxys);$m++){


$user_agent = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11';
$cookies = dirname(__FILE__) . '/tmp/'.rand(1111,9999).'.txt';
@unlink($cookies);
$robot = curl_init();
$proxy = @$proxys[$m];
if(strlen($proxy)>5)  curl_setopt($robot, CURLOPT_PROXY, trim($proxy));
else curl_setopt($robot, CURLOPT_PROXY, false);
curl_setopt($robot, CURLOPT_USERAGENT, $user_agent);
curl_setopt($robot, CURLOPT_REFERER, "http://mail.ru/");
curl_setopt($robot, CURLOPT_TIMEOUT, 5);
curl_setopt($robot, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($robot, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($robot, CURLOPT_COOKIEFILE, $cookies);
curl_setopt($robot, CURLOPT_COOKIEJAR, $cookies);
curl_setopt($robot, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($robot, CURLOPT_HEADER, true);
curl_setopt($robot, CURLOPT_URL,"http://mail.ru/");
$html = curl_exec($robot);
curl_setopt($robot, CURLOPT_URL,"https://e.mail.ru/signup");
$html = curl_exec($robot);

$ok_1 = 0;
if(@preg_match('/id="noPhoneLink" class="bDash"/i',$html)) $ok_1 = 1;

$fd = fopen($file_home."/tmp/cap3_.html","w+");
fputs($fd,$html);
fclose($fd);

if($ok_1==0) echo "Sorry, phone(((\n";
else
if($ok_1 == 1){


echo "\nStart ->  no tel, good\n";

$domain = array('mail.ru','bk.ru','inbox.ru','list.ru','mail.ua');
$reg_pass = "n".rand(11111111,99999999);
$reg_name = "noreply-".rand(11111111,99999999);
$reg_domain = $domain[rand(0,(count($domain)-1))];
$reg_email = $reg_name."@".$reg_domain;

$html_ = sendPost("https://e.mail.ru/cgi-bin/checklogin",$cookies,$user_agent,$forcheck,'https://e.mail.ru/signup?from=main_mailpromo_reg',1);
$html_2 = sendPost("https://e.mail.ru/reg?from=main_mailpromo_reg",$cookies,$user_agent,$querys,'https://e.mail.ru/signup?from=main_mailpromo_reg',1);


$pr = new parserPrCy;
$form = current($pr->p_tags('<form id="registrationForm"',$html));
$inputs = $p->p("<input ",">",$form);
$selects = $p->p("<select ",">",$form);
$out_input = array();
$x_inputs = array();
$normal_inputs = array();

    for($i=0;$i<count($inputs);$i++){
      $inputs_name = current($pr->p('name="','"',$inputs[$i]));
      $inputs_value = current($pr->p('value="','"',$inputs[$i]));
      $inputs_class = current($pr->p('onclick="','"',$inputs[$i]));
      $out_input[$inputs_name] = $inputs_value;
      if(@preg_match("/x_/i",$inputs_name) && !@preg_match("/x_reg/i",$inputs_name)) $x_inputs[$inputs_name] = 1;
      }
     for($i=0;$i<count($selects);$i++){
      $selects_name = current($pr->p('name="','"',$selects[$i]));
      $selects_value = current($pr->p('value="','"',$selects[$i]));
      $out_input[$selects_name]=$selects_value;
      if(@preg_match("/x_/i",$selects_name) && !@preg_match("/x_reg/i",$selects_name)) $x_inputs[$selects_name] = 1;
      }
      $standart_params = getStardatParamets();
      $standart_params['RegistrationDomain'] = $reg_domain;
      
      curl_setopt($robot, CURLOPT_HEADER, 0);
      curl_setopt($robot, CURLINFO_HEADER_OUT, 0);
      curl_setopt($robot, CURLOPT_URL,'https://c.mail.ru/c/2?r='.rand(1401175661078,9401175661078));
      $capcha = curl_exec($robot);
      $fd = fopen($file_home."/tmp/captcha.png","wb+");
      fwrite($fd,$capcha);
      fclose($fd);
      if(strlen($capcha)>1000) $captcha = recognize($file_home."/tmp/captcha.png","5130b2e8196f164ea8e8e2fe49dce4c1",true, "antigate.com");
      $position_data = array('Vyacheslav','Simonov',1,$reg_name,$reg_pass,$reg_pass,"",$captcha, rand(1,27),rand(1980,1992));
      $x_count = 0;

  foreach($out_input as $name => $value){
      if($x_inputs[$name] == 1){ $out_input[$name]=$position_data[$x_count]; $x_count++; }
      else $out_input[$name] = ((@$standart_params[$name]!='')?$standart_params[$name]:$out_input[$name]);
  }
  $querys = '';
  foreach($out_input as $name => $value){
      $querys .= $name."=".$out_input[$name]."&";
  }

if(strlen($capcha)>1000)
print_r($out_input);


if(strlen($capcha)>1000)
$html_ = sendPost("https://e.mail.ru/reg?from=main_mailpromo_reg",$cookies,$user_agent,$querys,'https://e.mail.ru/signup?from=main_mailpromo_reg',1);
$fd = fopen($file_home."/tmp/cap_new.html","w+");
fputs($fd,$html_);
fclose($fd);

if(@preg_match("/ - ".$reg_name."@".$reg_domain." - /i",$html_) && strlen($capcha)>1000){
  echo "SAVE!!!";
$fdf = file_get_contents("http://proxy.adtec.com.ua/email_from_server.php?action=newEmailFromSoft&email=".$reg_name."@".$reg_domain."&passwd=".$reg_pass);
}




}
sleep(1);
}







function getStardatParamets(){

$out['BirthMonth']="9";
$out['Count']="1";
$out['LANG']="ru_RU";
$out['Mrim.Country']="24";
$out['Mrim.Region']="226";
$out['RemindPhone']="";
$out['RemindPhoneCode']="7";
$out['SelectPhoneCode']="7";
$out['Signup_utf8']="1";
$out['back']="";
$out['browserData']="screen--`availWidth`:`1366`,`availHeight`:`728`,`width`:`1366`,`height`:`768`,`colorDepth`:`24`,`pixelDepth`:`24`,`top`:`0`,`left`:`0`,`availTop`:`0`,`availLeft`:`0`,`mozOrientation`:`landscape-primary`,`onmozorientationchange`:inaccessible navigator--`mozPay`:inaccessible,`mozTCPSocket`:inaccessible,`doNotTrack`:`unspecified`,`oscpu`:`Windows NT 6.1`,`vendor`:``,`vendorSub`:``,`productSub`:`20100101`,`cookieEnabled`:`true`,`buildID`:`20150122214805`,`appCodeName`:`Mozilla`,`appName`:`Netscape`,`appVersion`:`5.0 (Windows)`,`platform`:`Win32`,`userAgent`:`Mozilla/5.0 (Windows NT 6.1; rv:35.0) Gecko/20100101 Firefox/35.0`,`product`:`Gecko`,`language`:`ru-RU`,`onLine`:`true` flash--`version`:`16.0.0`";
$out['geo_cityId']="226";
$out['geo_country']="";
$out['geo_countryId']="24";
$out['geo_place']="";
$out['geo_regionId']="999998";
$out['lang']="ru_RU";
$out['new_captcha']="1";
$out['no_mobile']="1";
$out['security_image_id']="";
$out['signup_b']="1";
$out['sms']="1";
$out['your_town']="Санкт-Петербург, Россия";
return $out;

}

function sendPost($url,$cookies,$user_agent='',$query='',$refere='https://e.mail.ru/signup?from=main_mailpromo_reg',$test=0){ global $robot;
curl_setopt($robot, CURLOPT_USERAGENT, $user_agent);
curl_setopt($robot, CURLOPT_REFERER, $refere);
curl_setopt($robot, CURLOPT_TIMEOUT, 5);
curl_setopt($robot, CURLOPT_URL, trim($url));
curl_setopt($robot, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($robot, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($robot, CURLOPT_POST, true);
curl_setopt($robot, CURLOPT_POSTFIELDS, $query);
curl_setopt($robot, CURLOPT_COOKIEFILE, $cookies);
curl_setopt($robot, CURLOPT_COOKIEJAR, $cookies);
curl_setopt($robot, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($robot, CURLOPT_HEADER, $test);
$f = curl_exec($robot);

    return $f;

}



function totranslit($var, $lower = true, $punkt = true) {
	global $langtranslit;

	if ( is_array($var) ) return "";

	if (!is_array ( $langtranslit ) OR !count( $langtranslit ) ) {

		$langtranslit = array(
		'а' => 'a', 'б' => 'b', 'в' => 'v',
		'г' => 'g', 'д' => 'd', 'е' => 'e',
		'ё' => 'e', 'ж' => 'zh', 'з' => 'z',
		'и' => 'i', 'й' => 'y', 'к' => 'k',
		'л' => 'l', 'м' => 'm', 'н' => 'n',
		'о' => 'o', 'п' => 'p', 'р' => 'r',
		'с' => 's', 'т' => 't', 'у' => 'u',
		'ф' => 'f', 'х' => 'h', 'ц' => 'c',
		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch',
		'ь' => '', 'ы' => 'y', 'ъ' => '',
		'э' => 'e', 'ю' => 'yu', 'я' => 'ya',
		"ї" => "yi", "є" => "ye",

		'А' => 'A', 'Б' => 'B', 'В' => 'V',
		'Г' => 'G', 'Д' => 'D', 'Е' => 'E',
		'Ё' => 'E', 'Ж' => 'Zh', 'З' => 'Z',
		'И' => 'I', 'Й' => 'Y', 'К' => 'K',
		'Л' => 'L', 'М' => 'M', 'Н' => 'N',
		'О' => 'O', 'П' => 'P', 'Р' => 'R',
		'С' => 'S', 'Т' => 'T', 'У' => 'U',
		'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C',
		'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sch',
		'Ь' => '', 'Ы' => 'Y', 'Ъ' => '',
		'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',
		"Ї" => "yi", "Є" => "ye",
		);

	}

	$var = str_replace( ".php", "", $var );
	$var = trim( strip_tags( $var ) );
	$var = preg_replace( "/\s+/ms", "-", $var );

	$var = strtr($var, $langtranslit);

	if ( $punkt ) $var = preg_replace( "/[^a-z0-9\_\-.]+/mi", "", $var );
	else $var = preg_replace( "/[^a-z0-9\_\-]+/mi", "", $var );

	$var = preg_replace( '#[\-]+#i', '-', $var );

	if ( $lower ) $var = strtolower( $var );

	if( strlen( $var ) > 200 ) {

		$var = substr( $var, 0, 200 );

		if( ($temp_max = strrpos( $var, '-' )) ) $var = substr( $var, 0, $temp_max );

	}

	return $var;
}


function recognize(
            $filename,
            $apikey,
            $is_verbose = true,
            $domain="antigate.com",
            $rtimeout = 5,
            $mtimeout = 120,
            $is_phrase = 0,
            $is_regsense = 0,
            $is_numeric = 0,
            $min_len = 6,
            $max_len = 6,
            $is_russian = 0
            )
{
global $message_key;
	if (!file_exists($filename))
	{
		if ($is_verbose) echo "file $filename not found\n";
		return false;
	}
    $postdata = array(
        'method'    => 'post',
        'key'       => $apikey,
        'file'      => '@'.$filename,
        'phrase'	=> $is_phrase,
        'regsense'	=> $is_regsense,
        'numeric'	=> $is_numeric,
        'min_len'	=> $min_len,
        'max_len'	=> $max_len,
	'is_russian'	=> $is_russian

    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,             "http://$domain/in.php");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,     1);
    curl_setopt($ch, CURLOPT_TIMEOUT,             60);
    curl_setopt($ch, CURLOPT_POST,                 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,         $postdata);
    $result = curl_exec($ch);
    if (curl_errno($ch))
    {
    	if ($is_verbose) echo "CURL returned error: ".curl_error($ch)."\n";
        return false;
    }
    curl_close($ch);
    if (strpos($result, "ERROR")!==false)
    {
    	if ($is_verbose) echo "SERVER RETURNED ERROR: $result\n";
        return false;
    }
    else
    {
        $ex = explode("|", $result);
        $captcha_id = $ex[1];
    	if ($is_verbose) echo "CAPTCHA SEND, GOT CAPTCHA ID $captcha_id\n";
        $waittime = 0;
        if ($is_verbose) echo "->WAITING FOR $rtimeout SECONDS";

        for($i5=0;$i5<$rtimeout;$i5++){
        	echo ".";
        	sleep(1);
        }
        echo "\n";
        while(true)
        {
            $result = file_get_contents("http://$domain/res.php?key=".$apikey.'&action=get&id='.$captcha_id);
            if (strpos($result, 'ERROR')!==false)
            {
            	if ($is_verbose) echo "SERVER RETURNNED ERROR: $result\n";
                return false;
            }
            if ($result=="CAPCHA_NOT_READY")
            {
            	if ($is_verbose) echo "CAPTCHA IS NOT READY YET\n";
            	$waittime += $rtimeout;
            	if ($waittime>$mtimeout)
            	{
            		if ($is_verbose) echo "TIME LIMIT ($mtimeout) hit\n";
            		break;
            	}
        		if ($is_verbose) echo "->WAITING FOR $rtimeout SECONDS";
            	for($i5=0;$i5<$rtimeout;$i5++){
        	echo ".";
        	sleep(1);
        }
        echo "\n";
            }
            else
            {
            	$ex = explode('|', $result);
            	if (trim($ex[0])=='OK') return trim($ex[1]);
            }
        }

        return false;
    }
}
class py{

	var $html;
	var $pu = array();
	var $link;
	var $lang;
	var $server_header;

    function gh($link_){
    	$this->server_header = get_headers($link_);
    }

	function get_c($link_){
		$this->html=implode(" ",file($link_));
		$this->pu = parse_url($link_);
		$this->link=$link_;
		$this->gh($link_);
		if(@$this->se_($this->html)) $this->lang="ru";
		elseif(@$this->se_(iconv("cp1251","UTF-8",$this->html))) $this->lang="ru";
		elseif(@$this->se_(iconv("UTF-8","cp1251",$this->html))) $this->lang="ru";
		else $this->lang="no detect";
	}
	function se_($start_content){
		return true;
	}
	function m_link($array_links){
		for($i=0;$i<count($array_links);$i++){
		if(@preg_match("/javascript/i",$array_links[$i])) $array_links[$i]="";
			$first=substr($array_links[$i],0,1);
			if($first=='.')
				if(substr($this->link,0,1)=="/") $array_links[$i] = substr($this->link,0,strlen($this->link)-1).substr($array_links[$i],1);
				else $array_links[$i] = $this->link.substr($array_links[$i],1);
			elseif($first=='/') $array_links[$i] = "http://".$this->pu['host'].$array_links[$i];
			elseif(substr($array_links[$i],0,4)!="http"){
			 if(substr($this->link,0,1)=="/") $array_links[$i] = substr($this->link,0,strlen($this->link)).$array_links[$i];
			 else $array_links[$i] = $array_links[$i];
			 }
		}          ///$array_links[$i] = substr($this->link,0,strlen($this->link)-1).substr($array_links[$i],1);
		return $array_links;
	}
	function get_links(){
		preg_match_all('|<[Aa] [^<>]*href=[\'"]([^\'"]+)[\'"][^<>]*>|si',$this->html, $matches);
		foreach ($matches[1] as $val) {
		if (!preg_match("~^[^=]+://~", $val) || preg_match("~^[^://]+://(www\.)?".$this->pu['host']."~i", $val)) { $vnut[]=$val; }
		else $vnech[]=$val;
		}
		$vnut=$this->m_link(array_unique ($vnut));
		$vnech=array_unique ($vnech);
		return array($vnut,$vnech);
	}
	function get_emails(){
		preg_match_all('{[\w-.]+@[\w-]+(\.[\w-]+)*}xs',$this->html,$emails);
		$email_out = array();
		$emails[0] = array_unique($emails[0]);
		for($i=0;$i<count($emails[0]);$i++){
		 if (@preg_match("/^(?:[a-z0-9]+(?:[-_]?[a-z0-9]+)?@[a-z0-9]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i",trim($emails[0][$i])))
		  $res = py::ce(trim($emails[0][$i]));
		  if(@$res) $email_out[]=trim($emails[0][$i]);
		}
		return $email_out;
	}
	function ce($Email){
		if (!preg_match("/^[\._a-zA-Z0-9-]+@[\.a-zA-Z0-9-]+\.[a-z]{2,6}$/i", $Email)) return false;
		list($Username, $Domain) = split("@",$Email);
		if (@getmxrr($Domain, $MXHost)) return true;
		else{
    		$f=@fsockopen($Domain, 25, $errno, $errstr, 30);
    		if($f){
     			fclose($f);
	    		return true;
	    	}else return false;
		}
	}
	function p($a,$b,$content){
		$return_array = array();
		$a_ = "_".rand(111111,999999)."_";
		$b_ = "_".rand(111111,999999)."_";
		$content = str_replace($b,$b_,str_replace($a,$a_,$content));
		if(@preg_match("/".$a_."/i",$content) && @preg_match("/".$b_."/",$content)){
			while($content!=''){
				@list($start,$end)=spliti($a_,$content,2);
				@list($out,$content)=spliti($b_,$end,2);
				$return_array[] = $out;
				if(!@preg_match("/".$a_."/i",$content) || !@preg_match("/".$b_."/",$content)) $content = '';
			}
		}else return false;
		return $return_array;
	}
	function t($text, $from, $to) {
		$html_replace = FALSE;
		$agent = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727; .NET CLR 1.1.4322)" ;
		$header [] = "Accept: text/html;" ;
		$header [] = "Accept_charset: GBK";
		$header [] = "Accept_encoding: identity";
		$header [] = "Accept_language: cn-cn";
		$header [] = "Connection: Keep-Alive";
		$ch = curl_init ();
		$url = 'http://translate.google.com/translate_a/t?client=t&text='.urlencode($text).'&sl='.$from.'&tl='.$to;
			curl_setopt ( $ch , CURLOPT_URL , $url );
			curl_setopt ( $ch , CURLOPT_RETURNTRANSFER , 1 );
			curl_setopt ( $ch , CURLOPT_VERBOSE , 1 );
			curl_setopt ( $ch , CURLOPT_USERAGENT , $agent );
			curl_setopt ( $ch , CURLOPT_HTTPHEADER , $header );
			curl_setopt ( $ch , CURLOPT_FOLLOWLOCATION , 1 );
			$tmp = curl_exec ( $ch );
			//echo $tmp;
			//print_r(json_decode($tmp, true));
			curl_close ( $ch );
		$tmp = substr ($tmp, 1, strlen ($tmp)-2);
		$pos1=strpos($tmp,"trans\":\"")+3;
		$pos2=strpos($tmp,"\"",$pos1);
		$tmp=substr($tmp,$pos1,$pos2-$pos1);
		$tmp = str_replace("1988","<br/>",$tmp);


        return $tmp;

}
}
function getShortUrl($fullUrl) {
        //формируем запрос
            $fullUrl = str_replace("http:/1","http://1",$fullUrl);


        $fullUrl = trim($fullUrl);
        //echo "OLD URL: ".$fullUrl."\n";
        $request = 'http://api.bit.ly/v3/shorten?'
            .'login=adtec'
            .'&apiKey=R_eb97fbb115e3b4a1098beee7c821833b'
            .'&longUrl='.urlencode($fullUrl)
            .'&format=json';

        //отправляем запрос
        $response = file_get_contents($request);
        $res = json_decode($response, true);
        //print_r($res);
            //echo "NEW URL: ".$res['data']['url']."\n";
        return $res['data']['url'];
    }
    function cert(){
    	$alg = rand(1,2);
    	$keys = array('Q','W','1','2','3','4','5','6','7','8','9','0','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','-');
$line = array();
for($i=0;$i<30;$i++){
$line[]=$keys[rand(0,(count($keys)-1))];
}



return implode("",$line);
    }

    function c01($url){
    	global $li0003;
    	$sovbadenie = 0;
    	for($i=0;$i<count($li);$i++){
    		if($li[$i]['link']==$url){
    			$sovbadenie=$i;
    			if($li[$i]['counter']>20)
    			$li[$i]['link']=getShortUrl($url);
    			else $li[$i]['counter']++;
    		}
    	}
    	if($sovbadenie==0){
    		$li[]['link']=getShortUrl($url);
    		$li[(count($li)-1)]['counter']=0;
    		return $li[(count($li)-1)]['link'];
    	}else{
    		return $li[$sovbadenie]['link'];
    	}
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
class parserPrCy{

  var $parSymbol = 50;
  var $approvedTag = array('td','div','section');
  var $url = '';
  var $keyWord = '';
  var $headers = array();
  var $url_info = array();
  var $content = '';
  var $page_urls = array();
  var $local_encoding = "UTF-8";
  var $allForms_ = array();
  var $clear_text = '';
  
  function clearText($text){
      $our_text = array();
    $clear_text = $this->CCC($this->content);
    $clear_text = strip_tags($clear_text);
     //$clear_text = htmlentities ($clear_text, ENT_QUOTES,'cp1251');
     $words = explode(" ",$clear_text);
     for($i=0;$i<count($words);$i++){
     // && substr_count($words[$i],"»")<=0 && substr_count($words[$i],"«")<=0
      if(strlen(trim($words[$i]))>2) $our_text[] = $words[$i];
     }
   return $our_text;
  }
  
  function parse_url_(){
    $this->url_info = parse_url($this->url);
    $this->url_info['path'] = pathinfo($this->url_info['path'],PATHINFO_DIRNAME);
  }

  function getHeader($url='',$return__ = false){
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL,((trim($url)=='')?$this->url:$url));
  curl_setopt($ch, CURLOPT_HEADER,0);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
  if(trim($url)==''){
    $this->content = @curl_exec($ch);
    //if($this->local_encoding=='UTF-8') $this->content = iconv("UTF-8","cp1251",$this->content);
    //else $this->content = iconv("cp1251","UTF-8",$this->content);
  }else $content__BUFF = @curl_exec($ch);
    if(!curl_errno($ch))
      {
        if($return__==true) return curl_getinfo($ch);
         else $this->headers = curl_getinfo($ch);
        curl_close($ch);
      } else false;
  }

  function getAllUrl($no_open=false,$in_link=array()){
  $urls_ = array();
    $cont = $this->content;
    @preg_match_all("#\s(?:href|src|url)=([\"\'])?(.*?)([\"\'])?([\s\>])#i", $cont, $matches);
    $holm__ = parse_url($this->page_urls[$i2]);
    $holm__['path'] = pathinfo($holm__['path'],PATHINFO_DIRNAME);
    for($i=0;$i<count($matches[2]);$i++){
      if(@substr($matches[2][$i],0,1)=='/' && @substr($matches[2][$i],0,2)!='//' && @substr($matches[2][$i],0,4)!='http') $urls_[] = "http://".$this->url_info['host'].$matches[2][$i];
      elseif(@substr($matches[2][$i],0,2)!='//' && @substr($matches[2][$i],0,4)!='http' && @substr($matches[2][$i],0,3)!='../') $urls_[] = "http://".$this->url_info['host'].$holm__['path']."/".$matches[2][$i];
      elseif(@substr($matches[2][$i],0,3)=='../'){
        $countr = substr_count($matches[2][$i],"../");
        $way = explode("/",$holm__['path']);
        $path = array();
        for($i4=count($way);$i4>0;$i4--){
          if((count($way)-$i4)<=$countr) unset($way[$i4]);
          else break;
        }
        $path = implode("/",$way);
        $urls_[] = "http://".$holm__['host'].$path."/".str_replace("../","",$matches[2][$i]);
      }else $urls_[] = $matches[2][$i];
    }
    //$this->page_urls = $urls_;
    //$urls_ = array();
    if($no_open==true)
    for($i2=0;$i2<count($this->page_urls);$i2++){
    if(substr($this->page_urls[$i2],(strlen($this->page_urls[$i2])-3),3)=='css'){
    $content = $this->getGet($this->page_urls[$i2]);
    $content = preg_replace("|/\*(.*)\*/|U","",$content);
    $matches = array();
    preg_match_all('|url(.*)[;\s]|U',$content, $matches);
    $matches[2] = $matches[1];
    for($i=0;$i<count($matches[2]);$i++){
      $repla = "\"'();";
      $holm__ = parse_url($this->page_urls[$i2]);
      $holm__['path'] = pathinfo($holm__['path'],PATHINFO_DIRNAME);
      for($i3=0;$i3<strlen($repla);$i3++)
      $matches[2][$i]=str_replace(substr($repla,$i3,1),"",$matches[2][$i]);
      if(@substr($matches[2][$i],0,1)=='/' && @substr($matches[2][$i],0,2)!='//' && @substr($matches[2][$i],0,4)!='http') $urls_[] = "http://".$holm__['host'].$matches[2][$i];
      elseif(@substr($matches[2][$i],0,2)!='//' && @substr($matches[2][$i],0,4)!='http' && @substr($matches[2][$i],0,3)!='../') $urls_[] = "http://".$holm__['host'].$holm__['path']."/".$matches[2][$i];
      elseif(@substr($matches[2][$i],0,3)=='../'){
        $countr = substr_count($matches[2][$i],"../");
        $way = explode("/",$holm__['path']);
        $path = array();
        for($i4=count($way);$i4>0;$i4--){
          if((count($way)-$i4)<=$countr) unset($way[$i4]);
          else break;
        }
        $path = implode("/",$way);
        $urls_[] = "http://".$holm__['host'].$path."/".str_replace("../","",$matches[2][$i]);
      }else $urls_[] = $matches[2][$i];
    }
    }
    }
    if(count($in_link)>0){
        for($i=0;$i<count($urls_);$i++){
        $key = 0;
          for($i2=0;$i2<count($in_link);$i2++)
            if(substr_count($urls_[$i],$in_link[$i2])>=1) $key++;
              if($key==count($in_link)) $page_urls[] = $urls_[$i];
              }
    }else{
      for($i=0;$i<count($urls_);$i++)
        $page_urls[] = $urls_[$i];
    }
    return $page_urls;
    //print_r($this->page_urls);
  }

  function getCentert($tag,$content){
    //  Search TD, DIV
		$content = str_replace(">",">\n",$content);
		$content = str_replace("<","\n<",$content);
		$content = str_replace("< ","<",$content);
		$content = str_replace("</ ","</",$content);
		$lines = explode("\n",$content);
		$center = (count($lines)/2);
		$out__ = 0;
		$out__2 = 0;
		for($i=$center;$i>0;$i--){
      $f_tag = current(explode(" ",substr($lines[$i],1)));
      if($f_tag == $tag){ $out__ = $i; break;}
		}
	  for($i=$center;$i<count($lines);$i++){
      $f_tag = current(explode(" ",substr($lines[$i],1)));
      if($f_tag == $tag){ $out__2 = $i; break;}
		}
		//echo $out__."=".$out__2; 

		for($i=$out__;$i>0;$i--){
		if(@preg_match("/<\/div/i",$lines[$i]))
      if(@preg_match("/<(td|div|section)/i",$lines[$i])) { 
          return array(current(explode(" ",substr($lines[$i],1))),$this->getAttr($lines[$i]),$lines[$i],ceil($i-1));
          break;
        }
		}
		
  }

  function ThisIsParagraf($lines){
    for($i=0;$i<count($lines);$i++){
      $lines_ = preg_replace("|<(.*)>(.*)</(.*)>|U","",$lines[$i]);
      if(strlen($lines_)<$this->parSymbol) unset($lines[$i]);
    }
    return $lines;
  }

  function getPost($url,$post){
    if( $curl = curl_init() ) {
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
      curl_setopt($curl, CURLOPT_POST, true);
      curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
      $content = curl_exec($curl);
      curl_close($curl);
    }
  //if($this->local_encoding=='UTF-8') $content = iconv("UTF-8","cp1251",$content);
  //else $content = iconv("cp1251","UTF-8",$content);
    return $content;
  }

  function getAttr($tag){
    $string = $tag;
    if (preg_match_all('#\s+([^=\s]+)\s*=\s*((?(?="|\') (?:"|\')([^"\']+)(?:"|\') | ([^\s]+)))#isx', $string, $matches)) {
      return $matches;
    }
  }

	function GetLinks($i,$content){
    switch ($i) {
      case 'images':
          @preg_match_all("#\s(?:src)=([\"\'])?(.*?)([\"\'])?([\s\>])#i", $content, $matches);
          @preg_match_all("/(?<=url\()[a-z.\/]*(?=\))/i", $content, $matches2);
          for($i2=0;$i2<count($matches2[2]);$i2++)
          $matches[2][] = $matches2[2][$i2];
          return $matches[2];
          break;
      case 'Links':
          @preg_match_all("#\s(?:href)=([\"\'])?(.*?)([\"\'])?([\s\>])#i", $content, $matches);
          return $matches;
          break;
    }
	}

  function getGet($url){
    if( $curl = curl_init() ) {
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
      $content = curl_exec($curl);
      curl_close($curl);
    }
  //if($this->local_encoding=='UTF-8') $content = iconv("UTF-8","cp1251",$content);
  //else $content = iconv("cp1251","UTF-8",$content);
    return $content;
  }
  
  function cut($a,$b,$content){
      $return_array = array();
      $a_ = "_".rand(111111,999999)."_";
      $b_ = "_".rand(111111,999999)."_";
      $search1 = substr_count($content,$a);
      $search2 = substr_count($content,$b);
      $content = str_replace($b,$b_,str_replace($a,$a_,$content));
      if(@preg_match("/".$a_."/i",$content) && @preg_match("/".$b_."/",$content)){
        for($i=0;$i<$search1;$i++){
          @list($start,$end)=spliti($a_,$content,2);
          @list($out,$content)=spliti($b_,$end,2);
          $content = $start.$content;
        }
      }else return false;
      return $content;
	}
	

	
	function cut_tags($a,$content,$attr=''){
		$return_array = array();
		$content = str_replace(">",">\n",$content);
		$content = str_replace("<","\n<",$content);
		$f_tag = current(explode(" ",substr($a,1)));
		$counter_tag = 0;
		$counter_tag_end = 0;
    $lines = explode("\n",$content);
    for($i=0;$i<count($lines);$i++){
    $attr__ = 1;
    if(@$attr!=false) $attr__ = $this->bitAttr($this->getAttr($lines[$i]),$attr);
      if(@preg_match("/".$f_tag."/i",$lines[$i]) && $attr__ == 1) $counter_tag++;
      else if($counter_tag>0 && @preg_match("/<".$f_tag."/i",$lines[$i])) $counter_tag++;
      else
      if($counter_tag>0 && (@preg_match("|</".$f_tag."|i",$lines[$i]) || @preg_match("|</ ".$f_tag."|i",$lines[$i]))) $counter_tag_end++;
      if($counter_tag>0 && $counter_tag>$counter_tag_end) $lines[$i]='';
      else if($counter_tag>0 && $counter_tag==$counter_tag_end){
        $counter_tag = 0;
        $counter_tag_end = 0;
      }
    }
		return implode(" ",$lines);
	}
	
	
	
	
	function bitAttr($attr1,$attr2){
    $key = 0;
    for($i2=0;$i2<count(@$attr2[0]);$i2++)
    for($i=0;$i<count(@$attr1[0]);$i++)
        if(@$attr1[0][$i]==@$attr2[0][$i2]) $key++;
    return ((count(@$attr2[0])==$key)?1:0);
	}
	function p_tags($a,$content,$attr=array(),$start=0){
      $return_array = array();
      $content = str_replace(">",">\n",$content);
      $content = str_replace("<","\n<",$content);
      $content = str_replace("< ","<",$content);
      $f_tag = current(explode(" ",substr($a,1)));
      $counter_tag = 0;
      $counter_tag_end = 0;
      $lines = explode("\n",$content);
      $mass_counter = 0;
      $in_out = array();
      $first = 0;
      for($i=$start;$i<count($lines);$i++){
         $lines[$i] = trim($lines[$i]);
         $attr__ = 1;
         if(@$attr!=false) $attr__ = $this->bitAttr($this->getAttr($lines[$i]),$attr);
        if(trim($a)==trim($lines[$i]) || @preg_match("/".$a."/i",trim($lines[$i]))) $counter_tag++;
          else if($counter_tag>0 && @preg_match("/<".$f_tag."/i",$lines[$i])) $counter_tag++;
        else
        if($counter_tag>0 && (@preg_match("|</".$f_tag."|i",$lines[$i]) || @preg_match("|</ ".$f_tag."|i",$lines[$i]))) $counter_tag_end++;
        if($counter_tag>0 && $counter_tag>$counter_tag_end)
          if($first==1) $in_out[$mass_counter] = $in_out[$mass_counter].$lines[$i]; else $first=1;
        else if($counter_tag>0 && $counter_tag==$counter_tag_end){
          $counter_tag = 0;
          $first = 0;
          $counter_tag_end = 0;
          $mass_counter++;
      }
    }
		return $in_out;
	}
	
	function p($a,$b,$content,$in_=''){
		$return_array = array();
		$a_ = "_".rand(111111,999999)."_";
		$b_ = "_".rand(111111,999999)."_";
		$content = str_replace($b,$b_,str_replace($a,$a_,$content));
		if(@preg_match("/".$a_."/i",$content) && @preg_match("/".$b_."/",$content)){
			while($content!=''){
				@list($start,$end)=spliti($a_,$content,2);
				@list($out,$content)=spliti($b_,$end,2);
				if(@preg_match("!".$in_."!i",$out)) $return_array[] = $out;
				if(!@preg_match("/".$a_."/i",$content) || !@preg_match("/".$b_."/",$content)) $content = '';
			}
		}else return false;
		return $return_array;
	}
	
	
	function chekInStop($line){
	
	$ar = array('{','docume','click(','jQuery','createE','getEl','js','(func');
	
	for($i=0;$i<count($ar);$i++)
	if(@preg_match('/'.$ar[$i].'/i',$line)) return true;
	else return false;
	
	}
	
	function CCC_($document){
	
$search = array ("'<script[^>]*?>.*?</script>'si");                    // интерпретировать как php-код

$replace = array (" ");

$document = preg_replace($search, $replace, $document);


	return $document;
	
	}
	
	
	function CCC($document){
	
	
$search = array ("'<script[^>]*?>.*?</script>'si",  // Вырезает javaScript
                 "'<[\/\!]*?[^<>]*?>'si",           // Вырезает HTML-теги
                 "'([\r\n])[\s]+'",                 // Вырезает пробельные символы
                 "'&(quot|#34);'i",                 // Заменяет HTML-сущности
                 "'&(amp|#38);'i",
                 "'&(lt|#60);'i",
                 "'&(gt|#62);'i",
                 "'&(nbsp|#160);'i",
                 "'&(iexcl|#161);'i",
                 "'&(cent|#162);'i",
                 "'&(pound|#163);'i",
                 "'&(copy|#169);'i",
                 "'&#(\d+);'e");                    // интерпретировать как php-код

$replace = array (" ",
                  " ",
                  " \\1 ",
                  " \" ",
                  " ",
                  " ",
                  " ",
                  " ",
                  chr(161),
                  chr(162),
                  chr(163),
                  chr(169),
                  "chr(\\1)");
$document = str_replace(">","> ",$document);
$document = str_replace("<"," <",$document);
$document = preg_replace($search, $replace, $document);
$rab = "'\":;,.<>{}[]!@#$%^&*~?()=+/1234567890";
for($i=0;$i<strlen($rab);$i++) $document = str_replace(substr($rab,$i,1)," ",$document);
$document = htmlentities($document,false,'utf-8');
$tow_=array('&laquo;','&raquo;','&ndash;','&copy;','laquo','raquo','&',':',';');
$document = str_replace($tow_," ",$document);

	return $document;
	}
	

	
	function getMorphy($word_one){
	
require_once(dirname(__FILE__) . '/phpmorphy/src/common.php');

// set some options
$opts = array(
'storage' => PHPMORPHY_STORAGE_FILE,
	'with_gramtab' => false,
	'predict_by_suffix' => true, 
	'predict_by_db' => true
);

$dir = dirname(__FILE__) . '/phpmorphy/dicts';

$dict_bundle = new phpMorphy_FilesBundle($dir, 'rus');

try {
	$morphy = new phpMorphy($dict_bundle, $opts);
} catch(phpMorphy_Exception $e) {
	die('Error occured while creating phpMorphy instance: ' . $e->getMessage());
}


$word_one = iconv("cp1251","utf-8",strtr( iconv("utf-8","cp1251",$word_one), 'йцукенгшщзхъфывапролджэячсмитьбюё','ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ' ));



try {

	$all_forms = $morphy->getAllForms($word_one);

	return $all_forms;

	$bulk_words = array($word_one, $word_two);
	$base_form = $morphy->getBaseForm($bulk_words);
	$all_forms = $morphy->getAllForms($bulk_words);
	$pseudo_root = $morphy->getPseudoRoot($bulk_words);
	
} catch(phpMorphy_Exception $e) {
	die('Error occured while text processing: ' . $e->getMessage());
}
	
	
	
	}
	
	function AllForms(){
  $words = explode(" ",$this->key_word);
  $out = array();
  for($i=0;$i<count($words);$i++){
    $out_ = $this->getMorphy(trim($words[$i]));
    if(count($out_)>0 && trim($out_[0])!=''){
      for($i2=0;$i2<count($out_);$i2++) $out[] = $out_[$i2];
    }else $out[] = $words[$i];
	}
	$this->allForms_ = $out;
	}
	
	function toUp($word_one){
	
	$word_one = iconv("cp1251","utf-8",strtr( iconv("utf-8","cp1251",$word_one), 'йцукенгшщзхъфывапролджэячсмитьбюё','ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ' ));

	return $word_one;
	
	}
	
	
	function toDown($word_one,$from,$to){
	

	
	$word_one = iconv($to,$from,strtr( iconv($from,$to,$word_one), 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ','йцукенгшщзхъфывапролджэячсмитьбюё' ));

	return $word_one;
	
	}
	
		function toDown2($word_one){
	
	$word_one = strtr( $word_one, 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ','йцукенгшщзхъфывапролджэячсмитьбюё' );

	return $word_one;
	
	}
	
	function getAllAlt(){
	@preg_match_all("/<img[^>]+>/is",$this->content,$res);
	$res__ = array();
	for($i=0;$i<count($res[0]);$i++){
	$buff__ = $this->getAttr($res[0][$i]);
    for($j=0;$j<count($buff__[1]);$j++)
                if(trim($buff__[1][$j])=='alt') $res__[] = trim($buff__[3][$j]);
	}
	return $res__;
	}
	
	
	function allLinks(){
	@preg_match_all("#<a(.*?)(?:href)=([\"\'])?(.*?)([\"\'])?([\s\>])#i", $this->content, $matches);
	$holm__ = parse_url($this->page_urls[$i2]);
    $holm__['path'] = pathinfo($holm__['path'],PATHINFO_DIRNAME);
    for($i=0;$i<count($matches[3]);$i++){
      if(@substr($matches[3][$i],0,1)=='/' && @substr($matches[3][$i],0,2)!='//' && @substr($matches[3][$i],0,4)!='http') $urls_[] = "http://".$this->url_info['host'].$matches[3][$i];
      elseif(@substr($matches[3][$i],0,2)!='//' && @substr($matches[3][$i],0,4)!='http' && @substr($matches[3][$i],0,3)!='../') $urls_[] = "http://".$this->url_info['host'].$holm__['path']."/".$matches[3][$i];
      elseif(@substr($matches[3][$i],0,3)=='../'){
        $countr = substr_count($matches[3][$i],"../");
        $way = explode("/",$holm__['path']);
        $path = array();
        for($i4=count($way);$i4>0;$i4--){
          if((count($way)-$i4)<=$countr) unset($way[$i4]);
          else break;
        }
        $path = implode("/",$way);
        $urls_[] = "http://".$holm__['host'].$path."/".str_replace("../","",$matches[3][$i]);
      }else $urls_[] = $matches[3][$i];
    }
	
	$out___ = array();
	for($i=0;$i<count($urls_);$i++){
    $h = $this->getHeader($urls_[$i],true);
    if(substr_count($h['content_type'],"text/html")>0 && substr_count($urls_[$i],$this->url_info['host'])>0) $out___[] = $urls_[$i];
	}
	
	return $out___;
	
	}
	
	
	function StrongsKey(){
	
	$search[] = "'<b*?>.*?</b>'si";
	$search[] = "'<strong*?>.*?</strong>'si";
	$search[] = "'<u*?>.*?</u>'si";
	$search[] = "'<i*?>.*?</i>'si";
	$search[] = "'<em*?>.*?</em>'si";
	$ccc = 0;
	$ccc_ = 0;
	for($i=0;$i<count($search);$i++){
	@preg_match_all($search[$i], $this->content, $matches);
	for($j=0;$j<count($matches[0]);$j++){
	$ccc += substr_count(strip_tags($matches[0][$j]),$pr->key_word);
	if(substr_count(strip_tags($matches[0][$j]),$pr->key_word)<=0)
	for($i3=0;$i3<count($this->allForms_);$i3++){
	$ccc_ = $ccc_ + substr_count($this->toUp(strip_tags($matches[0][$j])),$this->allForms_[$i3]);
	}
	
	
	}
	}

	return array($ccc,$ccc_);
	
	}
	
	function countUnion($text){
	
	
	$unions = "а,а вдобавок,а именно,а также,а то,благодаря тому что,благо,буде,будто,вдобавок,В результате чего,в результате того что,в связи с тем что,в силу того что,в случае если,в то время как,в том случае если,В силу чего,ввиду того что,вопреки тому что,вроде того как,Вследствие чего,вследствие того что,да вдобавок,да,еще,Да,Да,но,да и,да и то,дабы,даже,Даром что,для того чтобы,же,едва,едва,как,Едва,лишь,ежели,если,Если бы,если не,затем,чтобы,Затем,что,зато,зачем,и,и все же,и значит,А именно,и поэтому,и притом,и все-таки,и следовательно,и то,и тогда,И еще,ибо,и вдобавок,из-за того что,или,кабы,как,Как скоро,как будто,как если бы,как словно,как только,так и,как-то?,когда,когда,то,коли,к тому же,Кроме того,ли,либо,либо,лишь,Лишь бы,лишь только,между тем как,нежели,не столько,сколько,не то, только не,не только,но и,не только,а и,Не только,но даже,невзирая на то что,независимо от того что,несмотря на то что,ни,но,однако,особенно,оттого,оттого что,отчего,перед тем как,по мере того как,по причине того что,Подобно тому как,пока,покамест,покуда,пока не,после того как,поскольку,потому,потому что,почему,прежде чем,при всем том что,при условии что,притом,причем,пускай,пусть,ради того чтобы,раз,Раньше чем,с тем чтобы,с тех пор как,словно,так же,как,так как,так что,также,тем более что,Тогда как,то есть,то ли,то,тоже,только,Только бы,Только что,Только лишь,Только чуть,точно,хотя,но,хотя,чем,тем,что,чтоб";
  
	$unions = explode(",",$this->toDown2($unions));
	echo $this->toDown2($unions);
	return str_replace("  "," ",str_replace($unions,"",$this->toDown($text)));
	 
	}
	
	}
    
   
    
    
    
    
?>