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
        return data;
        
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

        var  volume = (Math.pow(parseInt(diameter_) / 2, 2) * Math.PI * 15);
        //alert(volume);

        jQuery('#Labeldprime').html("Index of Sensitivity (d'): " + dprime);
        jQuery('#LabelMDCCnts').html("MDCR Above BKG (" + jQuery('#TextBoxBG').val() + "): " + Math.round(min_counts_mdc));
        //var qry_ = "SELECT mcnp_results.offset_x, mcnp_results.offset_y, mcnp_results.result_, Contaminants.gamma_eff FROM mcnp_results LEFT JOIN Contaminants ON mcnp_results.ContaminantID = Contaminants.ID WHERE ((mcnp_results.DetectorID)=" + jQuery('#DropDownDet').val() + ") AND ((mcnp_results.ContaminantID)=" + jQuery('#DropDownCont').val() + ") AND ((mcnp_results.source_diameter)=" +  diameter_ + ") AND ((mcnp_results.detector_height)=" + jQuery('#DropDownHeight'.val() + ")) AND (mcnp_results.offset_y = 0) ORDER BY mcnp_results.offset_x";
        
       //var  dt_ = getcalculateddate(jQuery('#DropDownDet').val() , jQuery('#DropDownCont').val() , jQuery('#DropDownHeight').val() , diameter_);
      // alert(dt_);
/*
///STEP 19 STARTS HERE

        DataTable dt_ = GetData(qry_).Tables[0]; //GetData is a generic function to populate a datatable from a query of the database.
        dt_.Columns.Add(new DataColumn("mdc", typeof(double)));

        int i = (int)(speed * oi / 10d);
        if (diameter_ != "1400" && i >= dt_.Rows.Count)
        {
            LabelMDC.Text = "There is insufficient data to calculate the MDC concentration. Reduce the observation interval or scanning speed and try again.";
            return;
        }

        var vals_ = new float[i + 1];
        float mdc_ = 0f;
        if (diameter_ == "1400")
        {
            if (dt_.Rows.Count == 1)
            {
                dt_.Rows[0]["mdc"] = CalculateMDC(min_counts_mdc, dt_.Rows[0]["result_"], volume, dt_.Rows[0]["gamma_eff"], 1.6d);
                mdc_ = Convert.ToSingle(dt_.Rows[0]["mdc"]);
            }
        }
        else
        {
            int z = 0;
            for (int j = 1; j < dt_.Rows.Count; j++)
            {
                double y1 = dt_.Rows[j – 1]["result_"];
                double y2 = dt_.Rows[j]["result_"];
                double x1 = dt_.Rows[j – 1]["offset_x"];
                double x2 = dt_.Rows[j]["offset_x"];
                double m = (y2 - y1) / (x2 - x1);
                vals_[z] = (float)((m * x2 / 2d - m * x2 + y2) * x2 - (m * x1 / 2d - m * x2 + y2) * x1);
                z += 1;
                if (z > i)
                {
                    break;
                }
            }

            var observations_ = new List<double>();
            for (int p = i - 1; p >= 0; p -= 1)
                observations_.Add(vals_[p]);
            for (int p = 0; p <= i - 1; p++)
                observations_.Add(vals_[p]);

            double tot = 0d;
            float sum = 0f;
            int v = 0;
            for (int k = 0; k <= 0; k++) 
            {
                sum = 0f;
                for (int j = v; j <= v + i - 1; j++)
                    sum = (float)(sum + observations_[j]);
                v += 1;
                dt_.Rows[k]["mdc"] = CalculateMDC(min_counts_mdc, sum / speed, volume, dt_.Rows[0]["gamma_eff"], 1.6d);
                tot += dt_.Rows[k]["mdc"];
            }

            mdc_ = (float)(tot / v);
        }

        int height_ = Convert.ToInt32(DropDownHeight.SelectedValue.ToString);
        if (diameter_ == "1400")
        {
            LabelVol.Text = "Source Volume: Infinite Plane";
            LabelSource.Text = "Source: Infinite Plane";
        }
        else
        {
            LabelVol.Text = "Source Volume: " + volume.ToString() + "  cm&#179";
            LabelSource.Text = "Source: " + DropDownCont.SelectedItem.ToString() + " " + DropDownDiam.SelectedItem.ToString() + " cm diameter x 15 cm depth";
        }

        if (mdc_ == 0f)
        {
            LabelMDC.Text = "The value could not be calculated";
        }
        else
        {
            LabelMDC.Text = "Contaminant Scan MDC: " + Math.Round(mdc_, 1).ToString() + " pCi/g (" + Math.Round(mdc_ * 37f, 1).ToString() + " Bq/kg)";
        }

        LabelDetector.Text = "Detector: " + DropDownDet.SelectedItem.ToString() + " at " + height_.ToString() + " cm (" + Math.Round(height_ / 2.54d, 1).ToString() + " in.) above soil";
        LabelScan.Text = "Scanning Parameters: " + (speed / 100d).ToString() + " m/s (" + Math.Round(speed * 0.0328084d, 1).ToString() + " ft/s), 1 s counting interval";

*/

 });

  });