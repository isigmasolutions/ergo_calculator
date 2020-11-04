jQuery(document).ready(function(){

  function getvaluesonload(getdatatype , appenid , depend1 , depend2){

    var getSELECTEDDetectorType  = (depend1) ? depend1 : '';
    var getselectedContaminantID  = (depend2) ? depend2 : '';
  jQuery.ajax({
      type: "POST",
      //async: false,
      beforeSend: function(action) { 
                jQuery('body').addClass("loading");  
                jQuery('body').append('<div class="modalgif"></div>');
              },
        complete: function() { 
          jQuery('body').removeClass("loading"); 
          jQuery('.modalgif').remove();
        },
      url: 'getvalues.php',
      data: {'action':getdatatype,'SELECTEDDetectorType' : getSELECTEDDetectorType, 'getselectedContaminantID' : getselectedContaminantID},
      success: function(data){ 
        jQuery(appenid).html(data);
        //alert(data);
        
      }
  }); 
}

    function getcalculateddate(DropDownDet , DropDownCont , DropDownHeight , diameter_){

    
  jQuery.ajax({
      type: "POST",
      //async: false,
      beforeSend: function(action) { 
                jQuery('body').addClass("loading");  
                jQuery('body').append('<div class="modalgif"></div>');
              },
        complete: function() { 
          jQuery('body').removeClass("loading"); 
          jQuery('.modalgif').remove();
        },
      url: 'getvalues.php',
      data: {'action':'calculationquery','DropDownDet' : DropDownDet, 'DropDownCont' : DropDownCont , 'DropDownHeight': DropDownHeight ,'diameter_':diameter_},
      success: function(data){ 
        //jQuery(appenid).html(data);
         callbackvalue(data);
        
      }
  });


  }

//// On  Detector Type:  change
    jQuery( "#DropDownDet" ).change(function() {

          getvaluesonload('GETContaminant' , '#DropDownCont' , 'NULL');

      });

//// On Contaminant change
    jQuery( "#DropDownCont" ).change(function() {

          var getDetectorType = jQuery('#DropDownDet').val();
          var GETContaminantID = jQuery(this).val();

          getvaluesonload('GETSourceDiameter(cm)' , '#DropDownDiam' , getDetectorType , GETContaminantID);

      });

//// On Source Diameter (cm):  change
    jQuery( "#DropDownDiam" ).change(function() {

          var getDetectorType = jQuery('#DropDownDet').val();
          var GETContaminantID = jQuery('#DropDownCont').val();

          getvaluesonload('DetectorHeight(cm)' , '#DropDownHeight' , getDetectorType , GETContaminantID);

      });

//// Call function on load
getvaluesonload('GETDetectorType' , '#DropDownDet' , 'NULL' , 'NULL');
//getvaluesonload('Contaminant');





///////// Button Click function 


    jQuery( "#calculatebutton" ).on('click' , function() { 

        var DropDownDetselect = jQuery('#DropDownDet').val();
          
        if (jQuery('#TextBoxBG').val() == '' || jQuery('#TextScan').val() == '')
        { 
            jQuery('#LabelMDCCnts').text("BG and Observation Interval fields may not be blank");
            return false;
        }

        if (jQuery('#TextBoxBG').val() || jQuery('#TextScan').val())
        {
            var a = jQuery('#TextBoxBG').val();
            var b = jQuery('#TextScan').val();
            if(jQuery.isNumeric(a) == false || jQuery.isNumeric(b) == false){
              jQuery('#LabelMDCCnts').text( "BG and Observation Interval fields must be numeric" );
              return false;
            }
            
            
        }

        if (DropDownDetselect == 'no')
        { 
            jQuery('#LabelMDCCnts').text("Detector must be selected");
            return false;
        }

        if (jQuery('#DropDownCont').val() == 'no' || jQuery('#DropDownCont').val() == 0)
        {
            jQuery('#LabelMDCCnts').text("Contaminant must be selected");
            return false;
        }

        if (jQuery('#DropDownDiam').val() == 'no' || jQuery('#DropDownDiam').val() == 0)
        {
            jQuery('#LabelMDCCnts').text("Source Diameter must be selected");
            return false;
        }

        if (jQuery('#DropDownHeight').val() == 'no' || jQuery('#DropDownHeight').val() == 0)
        {
            jQuery('#LabelMDCCnts').text("Detector Height must be selected");
            return false;
        }

        var proportions = [];//new DataTable();
        // proportions.Columns.Add(new DataColumn("tp1"));
        // proportions.Columns.Add(new DataColumn("tp2"));
        // proportions.Columns.Add(new DataColumn("tp3"));
        // proportions.Columns.Add(new DataColumn("tp4"));
        // proportions.Columns.Add(new DataColumn("tp5"));
        // proportions.Columns.Add(new DataColumn("tp6"));
        // proportions.Columns.Add(new DataColumn("tp7"));
        // proportions.Columns.Add(new DataColumn("tp8"));

        proportions.push([ 1.9, 2.02, 2.16, 2.32, 2.48, 2.68, 2.92, 3.28 ]);
        proportions.push([ 1.54, 1.66, 1.8, 1.96, 2.12, 2.32, 2.56, 2.92 ]);
        proportions.push([ 1.3, 1.52, 1.56, 1.72, 1.88, 2.08, 2.32, 2.68 ]);
        proportions.push([ 1.1, 1.22, 1.36, 1.52, 1.68, 1.88, 2.12, 2.48 ]);
        proportions.push([ 0.93, 1.06, 1.2, 1.35, 1.52, 1.72, 1.96, 2.32 ]);
        proportions.push([ 0.78, 0.91, 1.05, 1.2, 1.36, 1.56, 1.8, 2.16]);
        proportions.push([ 0.64, 0.77, 0.91, 1.06, 1.22, 1.42, 1.66, 2.02 ]);
        proportions.push([ 0.51, 0.64, 0.78, 0.93, 1.1, 1.3, 1.54, 1.9]);
        proportions.push([ 0.38, 0.52, 0.66, 0.8, 0.97, 1.17, 1.41, 1.77 ]);
        proportions.push([ 0.26, 0.38, 0.52, 0.68, 0.84, 1.04, 1.28, 1.64 ]);
        proportions.push([ 0.12, 0.26, 0.4, 0.54, 0.71, 0.91, 1.15, 1.51 ]);
        proportions.push([ 0.0, 0.13, 0.27, 0.42, 0.58, 0.82, 1.02, 1.38 ]);

        //parseFloat(

        var FP = jQuery('#DropDownFP').prop('selectedIndex');        
        var TP = jQuery('#DropDownTP').prop('selectedIndex');
      
        //alert(proportions[FP][TP]);
        var BKG = parseInt(jQuery('#TextBoxBG').val());
        var dprime = proportions[FP][TP];
        var oi = 1;
        var min_counts = parseFloat((1.645 * Math.sqrt(BKG * 60)));
        var min_counts_mdc = parseFloat( (dprime * Math.sqrt(BKG * 60)));
        var MDC = 0;
        var speed = Math.round(jQuery('#TextScan').val() * 100, 0);
      //alert(speed);
        if (speed < 10 || speed > 150)
        {
            jQuery('#LabelMDC').text("The speed must be between 0.1 - 1.5 m/s");
            return;
        }
        else if (speed % 10 != 0)
        {
            jQuery('#LabelMDC').text("The speed must be in multiples of 0.1");
            return;
        }

        var diameter_ = jQuery('#DropDownDiam').val();

        if (diameter_ == "Infinite")
        {
            diameter_ = "1400";
        }

        var  volume = (Math.pow(parseInt(diameter_) / 2, 2) * Math.PI * 15).toFixed(2);
      

        jQuery('#Labeldprime').html("Index of Sensitivity (d'): " + dprime);
        jQuery('#LabelMDCCnts').html("MDCR Above BKG (" + jQuery('#TextBoxBG').val() + "): " + Math.round(min_counts_mdc));
        //var qry_ = "SELECT mcnp_results.offset_x, mcnp_results.offset_y, mcnp_results.result_, Contaminants.gamma_eff FROM mcnp_results LEFT JOIN Contaminants ON mcnp_results.ContaminantID = Contaminants.ID WHERE ((mcnp_results.DetectorID)=" + jQuery('#DropDownDet').val() + ") AND ((mcnp_results.ContaminantID)=" + jQuery('#DropDownCont').val() + ") AND ((mcnp_results.source_diameter)=" +  diameter_ + ") AND ((mcnp_results.detector_height)=" + jQuery('#DropDownHeight'.val() + ")) AND (mcnp_results.offset_y = 0) ORDER BY mcnp_results.offset_x";
        
      // var  dt_ = getcalculateddate(jQuery('#DropDownDet').val() , jQuery('#DropDownCont').val() , jQuery('#DropDownHeight').val() , diameter_);
       var dt_ = '';
        
            var dt_ = null;
            var DropDownDet =  jQuery('#DropDownDet').val();
            var DropDownCont = jQuery('#DropDownCont').val();
            var DropDownHeight = jQuery('#DropDownHeight').val();
            //var diameter_1 = 
             jQuery.ajax({
                  'async': false,
                  type: "POST",
                  'global': false,
                  //async: false,
                  beforeSend: function(action) { 
                            jQuery('body').addClass("loading");  
                            jQuery('body').append('<div class="modalgif"></div>');
                          },
                    complete: function() { 
                      jQuery('body').removeClass("loading"); 
                      jQuery('.modalgif').remove();
                    },
                  url: 'getvalues.php',
                  data: {'action':'calculationquery','DropDownDet' : DropDownDet, 'DropDownCont' : DropDownCont , 'DropDownHeight': DropDownHeight ,'diameter_':diameter_},
                  success: function(data){ 
                    //jQuery(appenid).html(data);
                      dt_ = data;
                    
                  }
              })
       

       // alert('yes=>'+ tmp);

///STEP 19 STARTS HERE

        //DataTable dt_ = GetData(qry_).Tables[0]; //GetData is a generic function to populate a datatable from a query of the database.
        //dt_.Columns.Add(new DataColumn("mdc", typeof(double)));
//alert(dt_.length);
        var i = (speed * oi / 10);
        if (diameter_ != "1400" && i >= dt_.length)
        {
            jQuery('#LabelMDC').html("There is insufficient data to calculate the MDC concentration. Reduce the observation interval or scanning speed and try again.");
            return false;
        }
//alert(i);
        var vals_ =  i + 1;
        var  mdc_ = 0;
        if (diameter_ == "1400")
        {
            if (dt_.length == 1)
            {
                dt_[0]["mdc"] = CalculateMDC(min_counts_mdc, dt_[0]["result_"], volume, dt_[0]["gamma_eff"], 1.6);
                mdc_ = dt_[0]["mdc"];
            }
        }
        else
        {
            var z = 0;
            for (var j = 1; j < dt_.length; j++)
            {
                var  y1 = dt_[j - 1]["result_"];
                var  y2 = dt_[j]["result_"];
                var  x1 = dt_[j - 1]["offset_x"];
                var  x2 = dt_[j]["offset_x"];
                var  m = (y2 - y1) / (x2 - x1);
                vals_[z] = ((m * x2 / 2 - m * x2 + y2) * x2 - (m * x1 / 2 - m * x2 + y2) * x1);
                z += 1;
                if (z > i)
                {
                    break;
                }
            }

            //var observations_ = new List<double>();
            var observations_ = [];
            for (var p = i - 1; p >= 0; p -= 1)
               // observations_.Add(vals_[p]);
                observations_.push(vals_[p]);
            for (var p = 0; p <= i - 1; p++)
                observations_.push(vals_[p]);

            var  tot = 0;
            var  sum = 0;
            var v = 0;
            for (var k = 0; k <= 0; k++) 
            {
                sum = 0;
                for (var j = v; j <= v + i - 1; j++)
                    sum = (sum + observations_[j]);
                v += 1;
                dt_[k]["mdc"] = CalculateMDC(min_counts_mdc, sum / speed, volume, dt_[0]["gamma_eff"], 1.6);
                tot += dt_[k]["mdc"];
            }

            mdc_ = (tot / v);
        }

         height_ = jQuery('#DropDownHeight').val();
        if (diameter_ == "1400")
        {
            jQuery('#LabelVol').html("Source Volume: Infinite Plane");
            jQuery('#LabelSource').html("Source: Infinite Plane");
        }
        else
        {
            jQuery('#LabelVol').html("Source Volume: " + volume + "  cm&#179");
            jQuery('#LabelSource').html("Source: " + jQuery('#DropDownCont option:selected').text() + " " + jQuery('#DropDownDiam').val() + " cm diameter x 15 cm depth");
        }

        if (mdc_ == 0)
        {
            jQuery('#LabelMDC').html("Contaminant Scan MDC: The value could not be calculated");
        }
        else
        {
            jQuery('#LabelMDC').html("Contaminant Scan MDC: " + Math.round(mdc_, 1) + " pCi/g (" + Math.round(mdc_ * 37, 1) + " Bq/kg)");
        }
        
        var mycacl = (height_ / 2.54).toFixed(1);
        jQuery('#LabelDetector').html("Detector: " + jQuery('#DropDownDet option:selected').text() + " at " + height_ + " cm (" + mycacl + " in.) above soil");
        jQuery('#LabelScan').html("Scanning Parameters: " + (speed / 100) + " m/s (" + (speed * 0.0328084).toFixed(1) + " ft/s), 1 s counting interval");



 function CalculateMDC( counts_, eff_, sourcevol, gamma_eff, density)
        {
            return counts_ / (2.22 * eff_ * gamma_eff * density * sourcevol);
        }

 });

  });