<?php 
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

	$to = "info@dolimex.com"; //Correo

	// Recoger los datos del formulario
	$nombre = $_POST['nombre'];
	$telefono = $_POST['telefono'];
	$correo = $_POST['correo'];
	$asunto = $_POST['asunto'];
	$mensaje = nl2br($_POST['mensaje']); 

	if ($nombre == "" || $telefono == "" || $correo == "" || $mensaje == "" ):
		echo '<div class="alert text-center alert-danger alert-dismissible res" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<p><strong>Alerta</strong> Todos los campos son requeridos vuelva a intentar.</p>
			</div>';
	else:

		$mail->From = $correo;
		$mail->FromName = $nombre;
		$mail->Subject =$asunto;
		$mail->addAddress($to);
		$mail->isHtml(true);
		$mail->Body = '<strong>'.$nombre.'</strong> Lo contacto desde su pagiana Web <br><p>'.$mensaje.'<br> Telefono: <strong>'.$telefono.'</strong> <br> Correo: <strong> '.$correo.'</strong> </p>'; 
		$mail->CharSet = 'UTF-8';
		$mail->send();

		echo '<div class="alert  text-center alert-info alert-dismissible res" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<p><strong>Alerta</strong> Su mensaje fue enviado</p>
			</div>';
	endif;

 ?>