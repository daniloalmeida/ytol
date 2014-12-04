<?php
	$to_resp = "responsible@ytolinternational.com";
	$to_comm = "communication@ytolinternational.com";
	
	$from = $_REQUEST['new-mail'];
	$name = $_REQUEST['new-name'];
	$subject = "[YTOL International Website] - Contact Form ".$_REQUEST['contact-subject'];
	$message = "From: ".$name." <".$from."><br />".$_REQUEST['contact-msg'];
	
	$headers = "From: ".$name." <".$from.">";
	mail($to_resp,$subject,$message,$headers);
	mail($to_comm,$subject,$message,$headers);
	
	//header( 'Location: /ytol/new-release/contact.html#msgtrue' ) ;
	header( 'Location: /site/contact.html#msgtrue' ) ;
	
	//echo "Mail Sent.";
?>