<!DOCTYPE html>
<html lang="en">

<head>
<!-- CSS -->
 <link href="css/bootstrap.css" rel="stylesheet">
<!-- jQuery and JS bundle w/ Popper.js -->
 <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.js"></script>
  
</head>
<body class="calculatorbody">

<div class="container">
	  <div class="row calculatorrow">

	  	<div style=" background-color: #C0C0C0;width: 100%;padding: 3%;">

<span style="font-size: 16pt; color: #FFFFFF; font-weight: bolder;">Scan MDC Calculator</span></div>

<span style="font-size: 10pt; color: #000000;padding: 3%;">This utility calculates scan MDCs for select contaminant radionuclides in 
soil for 1-second scaler counts with NaI detectors based on probabilistic MCNPX modeling of detection efficiency 
along with related modifications to the MARSSIM method (see Resource links below for supporting technical 
information).</span>

	  	<div class="col-md-6 calculatorleftside calculatorcommon">
			    <form>
				  <div class="form-group">
				    <label for="TextBoxBG">Gross Background (cpm):</label>
				    <input name="TextBoxBG" type="text" value="" id="TextBoxBG">
				  </div>
				  <div class="form-group">
				    <label for="DropDownDet">Detector Type:</label>
				    <select name="DropDownDet" id="DropDownDet" >					

						</select>
				  </div>
				  <div class="form-group">				    
				    <label class="form-check-label" for="DropDownCont">Contaminant:</label>
				    	<select name="DropDownCont" id="DropDownCont">

						</select>
				  </div>


				  <div class="form-group">				    
				    <label class="form-check-label" for="DropDownDiam">Source Diameter (cm):</label>
				    	<select name="DropDownDiam"  id="DropDownDiam" >

							</select>
				  </div>

				  <div class="form-group">				    
				    <label class="form-check-label" for="DropDownHeight">Detector Height (cm):</label>
				    	<select name="DropDownHeight" id="DropDownHeight" >

								</select>
				    	
				  </div>

				   <div class="form-group">
				    <label for="TextScan">Scanning Speed (m/second):</label>
				    <input name="TextScan" type="text" value="0.5" id="TextScan">
				  </div>

				  <div class="form-group">				    
				    <label class="form-check-label" for="DropDownFP">False Positive Proportion:</label>
				    	<select name="DropDownFP" id="DropDownFP" style="width:100%;">
							<option selected="selected" value="0.05">0.05</option>
							<option value="0.10">0.10</option>
							<option value="0.15">0.15</option>
							<option value="0.20">0.20</option>
							<option value="0.25">0.25</option>
							<option value="0.30">0.30</option>
							<option value="0.35">0.35</option>
							<option value="0.40">0.40</option>
							<option value="0.45">0.45</option>
							<option value="0.50">0.50</option>
							<option value="0.55">0.55</option>
							<option value="0.60">0.60</option>

						</select>
				    	
				  </div>


				  <div class="form-group">				    
				    <label class="form-check-label" for="DropDownTP">True Positive Proportion:</label>
				    	<select name="DropDownTP" id="DropDownTP" style="width:100%;">
							<option value="0.60">0.60</option>
							<option value="0.65">0.65</option>
							<option value="0.70">0.70</option>
							<option value="0.75">0.75</option>
							<option value="0.80">0.80</option>
							<option value="0.85">0.85</option>
							<option value="0.90">0.90</option>
							<option selected="selected" value="0.95">0.95</option>

						</select>
				    	
				  </div>

				  <button id="calculatebutton" type="button" class="btn btn-primary">Calculate</button>
			</form>
		</div>
		<div class="col-md-6 calculatorrightside calculatorcommon" id="LabelMDCCnts">Section 2</div>
	  </div>
  </div>

<style type="text/css">
	.calculatorbody{background: #ccc;}
	.calculatorrow{background: #fff;}
	.calculatorleftside{border: 1px solid;}
	.calculatorcommon{padding: 2%;}
	.modalgif {
position:   fixed;
z-index:    1000;
top:        0;
left:       0;
height:     100%;
width:      100%;
background: rgba( 255, 255, 255, .8 ) 
            url('images/loading.gif') 
            50% 50% 
            no-repeat;
opacity: 0.80;
-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity = 80);
filter: alpha(opacity = 80)}

body.loading {
    overflow: hidden;   
}

</style>
 <script src="js/calcjquery.js"></script>
  </body>
  </html>