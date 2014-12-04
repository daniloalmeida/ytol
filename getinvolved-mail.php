<?php
	$to_resp = "responsible@ytolinternational.com";
	$to_comm = "communication@ytolinternational.com";
	
	$from = $_REQUEST['new-mail'];
	$name = $_REQUEST['new-name'];
	$gender = $_REQUEST['new-gender'];
	$dob = "DATE OF BIRTH: ".$_REQUEST['new-dob-day']."/".$_REQUEST['new-dob-month']."/".$_REQUEST['new-dob-year'];
	$mstatus = $_REQUEST['new-martial-status'];
	
	$country = $_REQUEST['new-country'];
	$state = $_REQUEST['new-state'];
	$city = $_REQUEST['new-city'];
	$address = $_REQUEST['new-address'];
	$phone = $_REQUEST['new-phone'];
	$cel = $_REQUEST['new-cel'];
	$skype = $_REQUEST['new-skype'];
	
	$subject = "[YTOL International Website] - Get Involved Form: ".$name;
	$message = "From: ".$name." <".$from.">\n"."Gender: ".$gender."\n"."Date of Birth: ".$dob."\n"."Martial Status: ".$mstatus."\n"."----------------------------\n"."Country: ".$country."\n"."State: ".$state."\n"."Address: ".$address."\n"."Phone: ".$phone."\n"."Cel: ".$cel."\n"."Skype: ".$skype."\n";
	
	$headers = "From: ".$name." <".$from.">";
	mail($to_resp,$subject,$message,$headers);
	mail($to_comm,$subject,$message,$headers);
	
	header( 'Location: /site/get-involved.html#msgtrue');
?>