<?php 

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$phone = $_POST['phone'];
$question1 = $_POST['question1'];
$question2 = $_POST['question2'];
$question3 = $_POST['question3'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'daos147@gmail.com';                 // Наш логин
$mail->Password = 'daos830312daos';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('migotoni@gmail.com', 'Migotoni Landing Page');   // От кого письмо 
$mail->addAddress('daos147@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Фамилия: ' . $fname . ' <br>
	Имя: ' . $lname . ' <br>
	Номер телефона: ' . $phone . '<br>
	Вопрос-1' . $question1 . '<br>
	Вопрос-2' . $question2 . '<br>
	Вопрос-3' . $question3 . '<br>
	E-mail: ' . $email . '';
	

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>

