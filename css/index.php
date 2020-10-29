<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Bare - Start Bootstrap Template</title>

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.css" rel="stylesheet">
<style>
body{font-size:14px;
font-family: Helvetica, sans-serif;
}

.tablesection tbody tr td {
    font-weight: 700 !important;
}
.tablesection .table thead th {
    font-size: 18px!important;
}
.panel1 h1 {
    font-size: 34px;
    background: #e7833a;
    color: #fff;
    text-transform: uppercase;
    padding: 25px 0;
    margin-bottom: 45px;
}
.table thead th {
    vertical-align: top;
    line-height: 1.2em;
}
.panel1 .row {
    margin: 0;
}
.p1-right{position:relative}
.p1-right:before {
    content: "";
    background: #a9abae;
    height: 100%;
    width: 1px;
    position: absolute;
    left: -20px;
}
.form-group label {
    font-size: 17px;
    font-weight: 700;
}
.panel2 {
    background: #eeedf5;
    padding: 50px 20px;
}
table.table input {
	font-weight: 500;
    width: 100%;
	 background: #f2f3f2;
    padding: 5px 10px;
	border:none
}
.form-control {
	font-weight: 500;
    color: #000;
    background: #f2f3f2;
    border: none;
    border-radius: 0;
}
.panel2 .row {
    margin-bottom: 40px;
}
.panel1 h3 {
    color: #2d358b;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 24px;
}
.head-box {
    min-height: 114px;
}
.p1-left .row {
    margin-bottom: 12px;
}
.table thead th {
    vertical-align: top;
}
.results {
   width: 100%;
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: bold;
    color: #2c348d;
    margin-bottom: 50px;
    position: relative;
    z-index: 0;
}
.results span {
    display: inline-block;
    padding: 0 30px;
    background: #eeedf5;
    z-index: 999999;
}
.results:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background: #2c348d;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
.asideBorder:before {
    position: absolute;
    width: 2px;
    height: 100%;
    background: #b0b0b4;
    content: "";
    right: 0;
}
.asideBorder {
    position: relative;
}
</style>
</head>

<body>

<div class="defaultvalues">
	<div class="form-group"><label>Mileage_Rate	$0.58	per mile (2019)	IRS</label>
	<input type="text" name="" value="0.58" id="Mileage_Rate">
	</div>
	<div class="form-group"><label>Time_Value_Leisure	$36.10	per hour (local travel)	DOT</label>
	<input type="text" name="" value="36.10" id="Time_Value_Leisure">
	</div>
	<div class="form-group"><label>Time_Value_Business	$63.20	per hour (local travel)	DOT</label>
	<input type="text" name="" value="63.20" id="Time_Value_Business">
	</div>
	<div class="form-group"><label>Time_Value_Mixed	$47.10	per hour (local travel)	DOT</label>
	<input type="text" name="" value="47.10" id="Time_Value_Mixed">
	</div>
	<div class="form-group"><label>AUS_Extra_Time	0.5	hours	GRA</label>
	<input type="text" name="" value="0.5" id="AUS_Extra_Time">
	</div>
	<div class="form-group"><label>SAT_Extra_Time	0.5	hours	GRA</label>
	<input type="text" name="" value="0.5" id="SAT_Extra_Time">
	</div>
	<div class="form-group"><label>LRD_Parking_Rate	$5.00	per day (economy)	LRD</label>
	<input type="text" name="" value="5" id="LRD_Parking_Rate">
	</div>
	<div class="form-group"><label>SAT_Parking_Rate	$7.00	per day (economy)	SAT</label>
	<input type="text" name="" value="7" id="SAT_Parking_Rate">
	</div>
	<div class="form-group"><label>AUS_Parking_Rate	$8.00	per day (economy)	AUS</label>
	<input type="text" name="" value="8" id="AUS_Parking_Rate">
	</div>
</div>

<input type="hidden" id="zzzzip_val">
<input type="hidden" id="trip_purpose_val">  
<input type="hidden" id="numberofperson">  
<input type="hidden" id="numberoftipdays"> 

<input type="hidden" id="LRDRoundtripAirfareCosthidden"> 
<input type="hidden" id="AUSRoundtripAirfareCosthidden"> 
<input type="hidden" id="SATRoundtripAirfareCosthidden">

<input type="hidden" id="LRDHourshidden"> 
<input type="hidden" id="AUSHourshidden"> 
<input type="hidden" id="SATHourshidden"> 

<input type="hidden" id="LRDMinuteshidden"> 
<input type="hidden" id="AUSMinuteshidden"> 
<input type="hidden" id="SATMinuteshidden"> 


  <!-- Page Content -->
  <div class="container">
  <div class="panel1">
  <h1 style="text-align: center;"> LRD True Cost Calculator</h1>
  
  <div class="row">
  
  <div class="col-md-6">
  <div class="text-center1 p1-left">
  <div class="head-box">
  <h3>1. select from drop-down menu</h3>
  </div>
      	<div class="form-group row">
        <div class="col-md-8">
      	<label>Zip Code Where You Live</label>
        </div>
        <div class="col-md-4">
        <select class="form-control" name="zip" id="zip">
<option value="Select">Select</option>
<option selected="selected" value="78014">78014</option>
<option value="78017">78017</option>
<option value="78019">78019</option>
<option value="78040">78040</option>
<option value="78041">78041</option>
<option value="78043">78043</option>
<option value="78044">78044</option>
<option value="78045">78045</option>
<option value="78046">78046</option>
<option value="78067">78067</option>
<option value="78072">78072</option>
<option value="78076">78076</option>
<option value="78341">78341</option>
<option value="78344">78344</option>
<option value="78349">78349</option>
<option value="78357">78357</option>
<option value="78361">78361</option>
<option value="78369">78369</option>
<option value="78371">78371</option>
<option value="78376">78376</option>
<option value="78384">78384</option>
<option value="78545">78545</option>
<option value="78584">78584</option>
<option value="78585">78585</option>
<option value="78827">78827</option>
<option value="78830">78830</option>
<option value="78834">78834</option>
<option value="78836">78836</option>
<option value="78860">78860</option>
</select>
</div>
</div>

<div class="form-group row">
<div class="col-md-8">
<label>Trip Purpose</label>
</div>
<div class="col-md-4">
<select class="form-control" name="trip_purpose" id="trip_purpose">
<option value="Select">Select</option>
<option selected="selected" value="63.20">Business</option>
<option value="36.10">Leisure</option>
<option value="47.10">Business & Leisure</option>
</select>
</div>
</div>

<?php 
  for($i =1 ; $i<=10; $i++)
  { $sss = ($i == 2) ? 'selected="selected"' : $sss = '';
    $options .= '<option '.$sss.' value='.$i.'>'.$i.'</option>';
  }
?>

<div class="form-group row">
<div class="col-md-8">
<label>Number of People in Your Party</label>
</div>
<div class="col-md-4">
<select class="form-control" name="partysize" id="partysize">
	<option value="Select">Select</option>
 <?php  echo $options; ?>
</select>
</div>
</div>
<?php 

for($i =1 ; $i<=21; $i++)
{ $aaaa = ($i == 5) ? 'selected="selected"' : $aaaa = '';
  $optionsl .= '<option '.$aaaa.' value='.$i.'>'.$i.'</option>';
}
?>
<div class="form-group row">
<div class="col-md-8">
<label>Trip Length in Days</label>
</div>
<div class="col-md-4">
<select class="form-control" name="trip_length" id="trip_length">
	<option value="Select">Select</option>
 <?php echo $optionsl; ?>
</select>
</div>
</div>

  </div>
  </div>
  
  <div class="col-md-6">
  <div class="p1-right">
		<div class="headline">
			<h3>2. Enter One-Way Flight Time</h3>
          <p>Time from when you leave the departure airport until you arrive at your destination</p>
		</div>

		<div class="tablesection">
				<table class="table">
    <thead>
      <tr>
        <th>Departure Airport</th>
        <th>Roundtrip Airfare Cost</th>
        <th>Hours</th>
        <th>Minutes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>LRD</td>
        <td><input type="text" name="" value="387" id="LRDRoundtripAirfareCost"></td>
        <td><input type="text" name="" value="5" id="LRDHours"></td>
        <td><input type="text" name="" value="31" id="LRDMinutes"></td>
      </tr>      
      <tr class="success">
        <td>AUS</td>
         <td><input type="text" name="" value="217" id="AUSRoundtripAirfareCost"></td>
        <td><input type="text" name="" value="2" id="AUSHours"></td>
        <td><input type="text" name="" value="50" id="AUSMinutes"></td>
      </tr>
      <tr class="danger">
        <td>SAT</td>
         <td><input type="text" name="" value="244" id="SATRoundtripAirfareCost"></td>
        <td><input type="text" name="" value="2" id="SATHours"></td>
        <td><input type="text" name="" value="55" id="SATMinutes"></td>
      </tr>
    </tbody>
  </table>
		</div>
	</div>
  </div>
  
  </div>
  


</div>
<br>
<div class="panel2">
<div class="results"><span>Results</span></div>
<div class="row">

	<div class="chartsection asideBorder col-md-6">
		<div class="tabelBgCtrl" id="resizable" style="height: 370px;border:1px solid gray;">
		<div id="chartContainer1" style="height: 100%; width: 100%;"></div>
	</div>
	</div>

	<div class="chartsection col-md-6">
		<div id="chartContainernew" style="height: 300px; width: 100%;"></div>
		<div class="costWrap">
		<div class="timeValue">Time Value</div>
		<div class="dollarCost">Dollar Cost</div>
		</div>
	</div>
</div>
<div class="row">
<div class="col-sm-12">
<p>
*Traveling from LRD rather than AUS increases airfare, mileage, and parking costs by $65 and it decreases travel time (driving + airport time + flying) each way by 1.1 hours. The travel time decrease is worth $94 when valued at the DOT value of time; when combined with other costs, traveling from LRD saves $29.</p>
<p>**Traveling from LRD rather than SAT increases airfare, mileage and parking costs by $95 and decreases travel time (driving + airport time + flying) each way by 0.2 hours. The travel time decrease is worth $34 when valued at the DOT value of time; when combined with other costs, traveling from LRD costs $61 more.</p>
<p><strong> Assumptions: </strong> </p>
<uL><li>
 Mileage cost is based on 2019 IRS mileage rate of $0.58 per mile </li>
<li>
Distance and travel time are calculated using Google Maps during light traffic conditions from the center of the selected zip code to each airport </li>
<li>
Value of travel time is valued at DOT value of travel time savings for air and high-speed rail intercity travel — $36.10 per hour for personal travel; $63.20 per hour for business travel; $47.10 per hour for personal & business travel</li>
<li>
 AUS and SAT travel time includes 30 additional minutes to take shuttle bus from economy parking lot, clear security, and walk to gate relative to LRD</li>
<li>
 Parking cost is for economy lot  </li></uL>
 </div>
	</div>
    </div>
    </div>
    
  </div>
<script>
window.onload = function () {

// Construct options first and then pass it as a parameter
//function chart1(p1 , p2){
//alert(p1);

var dps = [
			{ y: 10 , label: 'AUS', indexLabel: '$'+10,  color: "#2c348d",  x: 0}, 
             { y: 6 , label: 'SAT', indexLabel: '$'+6,  color: "#e9833a", x: 1 }
		]

console.log(dps);
var options1 = {
	animationEnabled: true,
	title: {
		text: "LRD Dollar Cost + Time Value Relative to ",
		fontColor: "#2c358d", 
		fontSize: 25,
		fontFamily: "Helvetica, sans-serif",
		fontWeight: "bold"
	},
	axisY: {
			prefix : "$"                   
	},
	data: [{
		type: "column", //change it to line, area, bar, pie, etc
		//legendText: "Try Resizing with the handle to the bottom right",
		indexLabelPlacement: "inside",
        indexLabelFontColor: "white",
        indexLabelFontWeight: 600,
        indexLabelFontFamily: "Verdana",
		showInLegend: true,		
		dataPoints: dps
		}]
};

$("#resizable").resizable({
	create: function (event, ui) {
		//Create chart.
		$("#chartContainer1").CanvasJSChart(options1);
	},
	resize: function (event, ui) {
		//Update chart size according to its container size.
		$("#chartContainer1").CanvasJSChart().render();
	}
});

//}

//function chart2(p1 , p2 , p3 , p4){

var dps3 =  [
			{ y: 21, label: "SAT Time Value", indexLabel: "$21", color: "grey" },
			{ y: 25, label: "SAT Dollar Cost", indexLabel: "$25", color: "darkgrey"  },
			{ y: 33, label: "AUS Time Value",  indexLabel: "$33", color: "grey"  },
			{ y: 36, label: "AUS Dollar Cost", indexLabel: "$36", color: "darkgrey"  }
		
		]
console.log(dps3);
//Better to construct options first and then pass it as a parameter
var options222 = {
	animationEnabled: true,
	title: {
		text: "LRD Cost Relative to",                
		fontColor: "#2c358d", 
		fontSize: 25,
		fontFamily: "Helvetica, sans-serif",
		fontWeight: "bold"
	},	
	axisY: {
		tickThickness: 0,
		prefix : "$",
		fontWeight: "bold",
		lineThickness: 0                
	},
	axisX: {
		
		labelFontSize: 18,
		fontWeight: "bold",
		labelFontColor: "#000"				
	},
	data: [{
		indexLabelFontSize: 11,
		indexLabelPlacement: "inside",
		indexLabelFontColor: "white",
		indexLabelFontWeight: 600,
		indexLabelFontFamily: "Verdana",
		color: "#62C9C3",
		type: "bar",		
		dataPoints: dps3
	}]
};

$("#chartContainernew").CanvasJSChart(options222);
}

//}
</script>
  <!-- Bootstrap core JavaScript -->
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="js/calc.js"></script>

<!-- <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script> -->
<script src="https://canvasjs.com/assets/script/jquery-ui.1.11.2.min.js"></script>
<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>

<style type="text/css">
	.defaultvalues {
	display: none;
}
	/*.text-center1 label {
	float: left;
	width: 25%;
	margin-top: 2%;
}
.text-center1 select {
	float: left;
	width: 51%;
	margin-top: 2%;
}*/

.chartsection.col-md-6 {
	float: left;
}
</style>





</body>

</html>