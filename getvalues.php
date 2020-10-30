<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db.php';

	if($_REQUEST['action'] === 'GETDetectorType'){

		if ($result = $mysqli -> query("SELECT * FROM `Detectors` where `active` = 'True'")) {
		  $result -> num_rows;
		  // Free result set
		  //echo json_encode($result -> fetch_assoc());
		  			echo '<option value="no">--Select Detector--</option>';
		    while ($row = $result->fetch_assoc()) {
			        echo "<option value=".$row['ID'].">".$row['Name_']."</option>";
			    }
		}
exit;
	}

	if($_REQUEST['action'] === 'GETContaminant'){

		if ($result = $mysqli -> query("SELECT * FROM `Contaminants` where `active` = 'True'")) {
		  $result -> num_rows;
		  // Free result set
		  //echo json_encode($result -> fetch_assoc());
		  			echo '<option selected="selected" value="no">--Select Contaminant--</option>';
		    while ($row = $result->fetch_assoc()) {
			        echo "<option value=".$row['ID'].">".$row['Name_']."</option>";
			    }
		}
exit;
	}


	if($_REQUEST['action'] === 'GETSourceDiameter(cm)'){

		$SELECTEDDetectorType = $_REQUEST['SELECTEDDetectorType'];
		$getselectedContaminantID = $_REQUEST['getselectedContaminantID'];

		if ($result = $mysqli -> query("Select `source_diameter` from `mcnp_results` where `ContaminantID` = $getselectedContaminantID AND `DetectorID` = $SELECTEDDetectorType GROUP BY `source_diameter`")) {
		  $result -> num_rows;
		  // Free result set
		  //echo json_encode($result -> fetch_assoc());
		  			echo '<option selected="selected" value="no">--Select Source Size--</option>';
		    while ($row = $result->fetch_assoc()) {
			        echo "<option value=".$row['source_diameter'].">".$row['source_diameter']."</option>";
			    }
		}
exit;
	}


	if($_REQUEST['action'] === 'DetectorHeight(cm)'){

		$SELECTEDDetectorType = $_REQUEST['SELECTEDDetectorType'];
		$getselectedContaminantID = $_REQUEST['getselectedContaminantID'];

		if ($result = $mysqli -> query("Select `detector_height` from `mcnp_results` where `ContaminantID` = $getselectedContaminantID AND `DetectorID` = $SELECTEDDetectorType GROUP BY `detector_height`")) {
		  $result -> num_rows;
		  // Free result set
		  //echo json_encode($result -> fetch_assoc());
		  			echo '<option selected="selected" value="no">--Select Source Size--</option>';
		    while ($row = $result->fetch_assoc()) {
			        echo "<option value=".$row['detector_height'].">".$row['detector_height']."</option>";
			    }
		}
exit;
	}

if($_REQUEST['action'] === 'calculationquery'){
		$DropDownDet = $_REQUEST['DropDownDet'];
		$DropDownCont = $_REQUEST['DropDownCont'];
		$DropDownHeight = $_REQUEST['DropDownHeight'];
		$diameter_ = $_REQUEST['diameter_'];

		$result = $mysqli -> query("SELECT `mcnp_results`.`offset_x`, `mcnp_results`.`offset_y`, `mcnp_results`.`result_`, `Contaminants`.`gamma_eff` 
FROM `mcnp_results` 
LEFT JOIN `Contaminants` ON `mcnp_results`.`ContaminantID` = `Contaminants`.`ID` 
WHERE (`mcnp_results`.`DetectorID` = $DropDownDet) 
AND ((`mcnp_results`.`ContaminantID`)=$DropDownCont) 
AND ((`mcnp_results`.`source_diameter`)=$diameter_) 
AND ((`mcnp_results`.`detector_height`)=$DropDownHeight)
AND (`mcnp_results`.`offset_y` = 0) 
ORDER BY `mcnp_results`.`offset_x`");

		while ($row = $result->fetch_assoc()) {
			      $array[] = $row;
			    }
	echo json_encode($array);		    

exit;
}

?>