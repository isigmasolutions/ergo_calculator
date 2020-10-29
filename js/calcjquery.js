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

        var proportions = new DataTable();
        proportions.Columns.Add(new DataColumn("tp1"));
        proportions.Columns.Add(new DataColumn("tp2"));
        proportions.Columns.Add(new DataColumn("tp3"));
        proportions.Columns.Add(new DataColumn("tp4"));
        proportions.Columns.Add(new DataColumn("tp5"));
        proportions.Columns.Add(new DataColumn("tp6"));
        proportions.Columns.Add(new DataColumn("tp7"));
        proportions.Columns.Add(new DataColumn("tp8"));

        /*proportions.Rows.Add(new object[] { 1.9d, 2.02d, 2.16d, 2.32d, 2.48d, 2.68d, 2.92d, 3.28d });
        proportions.Rows.Add(new object[] { 1.54d, 1.66d, 1.8d, 1.96d, 2.12d, 2.32d, 2.56d, 2.92d });
        proportions.Rows.Add(new object[] { 1.3d, 1.52d, 1.56d, 1.72d, 1.88d, 2.08d, 2.32d, 2.68d });
        proportions.Rows.Add(new object[] { 1.1d, 1.22d, 1.36d, 1.52d, 1.68d, 1.88d, 2.12d, 2.48d });
        proportions.Rows.Add(new object[] { 0.93d, 1.06d, 1.2d, 1.35d, 1.52d, 1.72d, 1.96d, 2.32d });
        proportions.Rows.Add(new object[] { 0.78d, 0.91d, 1.05d, 1.2d, 1.36d, 1.56d, 1.8d, 2.16d });
        proportions.Rows.Add(new object[] { 0.64d, 0.77d, 0.91d, 1.06d, 1.22d, 1.42d, 1.66d, 2.02d });
        proportions.Rows.Add(new object[] { 0.51d, 0.64d, 0.78d, 0.93d, 1.1d, 1.3d, 1.54d, 1.9d });
        proportions.Rows.Add(new object[] { 0.38d, 0.52d, 0.66d, 0.8d, 0.97d, 1.17d, 1.41d, 1.77d });
        proportions.Rows.Add(new object[] { 0.26d, 0.38d, 0.52d, 0.68d, 0.84d, 1.04d, 1.28d, 1.64d });
        proportions.Rows.Add(new object[] { 0.12d, 0.26d, 0.4d, 0.54d, 0.71d, 0.91d, 1.15d, 1.51d });
        proportions.Rows.Add(new object[] { 0.0d, 0.13d, 0.27d, 0.42d, 0.58d, 0.82d, 1.02d, 1.38d });

        int FP = DropDownFP.SelectedIndex;
        int TP = DropDownTP.SelectedIndex;
        float BKG = Convert.ToInt32(TextBoxBG.Text);
        float dprime = proportions.Rows(FP).Item(TP);
        int oi = 1;
        float min_counts = (float)(1.645d * Math.Sqrt(BKG * 60f));
        float min_counts_mdc = (float)(dprime * Math.Sqrt(BKG * 60f));
        float MDC = 0f;
        int speed = Math.Round(Convert.ToSingle(TextScan.Text) * 100f, 0);
        if (speed < 10 | speed > 150)
        {
            LabelMDC.Text = "The speed must be between 0.1 - 1.5 m/s";
            return;
        }
        else if (speed % 10 != 0)
        {
            LabelMDC.Text = "The speed must be in multiples of 0.1";
            return;
        }

        string diameter_ = DropDownDiam.SelectedValue.ToString();
        if (DropDownDiam.SelectedValue == "Infinite")
        {
            diameter_ = "1400";
        }

        float volume = (float)(Math.Pow(Convert.ToInt32(diameter_) / 2d, 2d) * Math.PI * 15d);

        Labeldprime.Text = "Index of Sensitivity (d'): " + dprime.ToString();
        LabelMDCCnts.Text = "MDCR Above BKG (" + TextBoxBG.Text + "): " + min_counts_mdc.ToString("N0");
        string qry_ = "SELECT mcnp_results.offset_x, mcnp_results.offset_y, mcnp_results.result_, Contaminants.gamma_eff " + "FROM mcnp_results LEFT JOIN Contaminants ON mcnp_results.ContaminantID = Contaminants.ID " + ("WHERE (((mcnp_results.DetectorID)=" + DropDownDet.SelectedValue + ") AND ((mcnp_results.ContaminantID)=" + DropDownCont.SelectedValue + ") AND ((mcnp_results.source_diameter)=" + diameter_ + ") AND ((mcnp_results.detector_height)=" + DropDownHeight.SelectedValue + ")) AND (mcnp_results.offset_y = 0) ORDER BY mcnp_results.offset_x");

STEP 19 STARTS HERE

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