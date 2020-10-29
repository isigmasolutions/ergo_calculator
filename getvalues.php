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


?>