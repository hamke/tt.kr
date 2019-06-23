<?php
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // Always set content-type when sending HTML email
    // $headers = "MIME-Version: 1.0" . "\r\n";
    // $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // $headers .= "From: <".$email.">" . "\r\n";
    $mail->isSMTP();
  	// $mail->Host = 'smtp.googlemail.com';  //gmail SMTP server
    $mail->Host = 'email-smtp.us-west-2.amazonaws.com';  //AWS SES SMTP server
  	$mail->SMTPAuth = true;
    // $mail->Username = '461630455276-43pun1j939mke9tvapeqo6ftbpajm1d1.apps.googleusercontent.com';   //username
  	// $mail->Password = '8r6bCZ0HfvNxtNyGWWw9FRyq';   //password
  	$mail->Username = 'AKIAJLZY2XF3QBTXEJ2Q';   //username
  	$mail->Password = 'AiVm9+i6cW2OqTHx6UXdiPYZ58wY6zDmOxcNauo2pHFh';   //password
    // $mail->SMTPSecure = 'ssl';
    $mail->SMTPSecure = 'tls';
  	// $mail->Port = 465;                    //smtp port
  	$mail->Port = 587;                    //smtp port
    $mail->CharSet = 'UTF-8';
    // $mail->SMTPDebug = 2;                 // 통신 내용 보기

    $mail->setFrom('hello@ttmkt.com', 'TrendTalk(hello@ttmkt.com)');
  	$mail->addAddress('the235style@yahoo.com', 'Customer(the235style@yahoo.com)');

    $mail->isHTML(true);

    $mail->Subject = '메시지가 도착했습니다 (www.trendtalk.kr/courses/1)';
    $mail->Body    = '<p>내용은 아래와 같습니다 :</p>'.
                     '<hr>'.
                     '<p>◼︎ 이름 : '.$name.'</p>'.
                     '<p>◼︎ 이메일 : '.$email.'</p>'.
                     '<p>◼︎ 메시지 : '.$message.'</p>'.
                     '<hr>';

  //  //Read an HTML message body from an external file, convert referenced images to embedded,
  //  //convert HTML into a basic plain-text alternative body
  //  $mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
  //  //Replace the plain text body with one created manually
  //  $mail->AltBody = 'This is a plain-text message body';
  //  //Attach an image file
  //  $mail->addAttachment('images/phpmailer_mini.png');
  //  $mail->addAttachment(__DIR__ . '/attachment1.png');
  //  $mail->addAttachment(__DIR__ . '/attachment2.jpg');

    if (!$mail->send()) {
        echo '<span style="color:red; font-weight:bold;">메시지 등록에 오류가 발생하였습니다. 관리자에게 문의해 주세요.</span>';
        // echo '오류 상세: ' . $mail->ErrorInfo;
    } else {
        echo '<center><span style="color:green; font-weight:bold;">메시지 등록이 완료되었습니다.</span></center>';
    }
} catch (Exception $e) {
    echo '<span style="color:red; font-weight:bold;">메시지 등록에 오류가 발생하였습니다. 관리자에게 문의해 주세요.</span>';
    // echo '오류 상세: ' . $mail->ErrorInfo;
}
?>
