<?php

    sleep(1);

	$name = $_POST['name'];
	$data = array();

	if( $name == 'nik' ) {
		$data['age'] = 27;
		$data['work'] = 'developer';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;