<?php  
	header("Content-Description: File Transfer");
	header("Content-Disposition: attachment; filename=something.png");
	header("Content-Type: image/png");
	$img=str_replace('data:image/png;base64', ' ', $_POST['imageData']);
	$img=str_replace(' ', '+', $img);
	echo base64_decode($img);
	exit;
	