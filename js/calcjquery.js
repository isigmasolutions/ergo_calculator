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
    jQuery( "#ctl00_ContentPlaceHolder1_DropDownDet" ).change(function() {

          getvaluesonload('GETContaminant' , '#ctl00_ContentPlaceHolder1_DropDownCont' , 'NULL');

      });

//// On Contaminant change
    jQuery( "#ctl00_ContentPlaceHolder1_DropDownCont" ).change(function() {

          var getDetectorType = jQuery('#ctl00_ContentPlaceHolder1_DropDownDet').val();
          var GETContaminantID = jQuery(this).val();

          getvaluesonload('GETSourceDiameter(cm)' , '#ctl00_ContentPlaceHolder1_DropDownDiam' , getDetectorType , GETContaminantID);

      });

//// On Source Diameter (cm):  change
    jQuery( "#ctl00_ContentPlaceHolder1_DropDownDiam" ).change(function() {

          var getDetectorType = jQuery('#ctl00_ContentPlaceHolder1_DropDownDet').val();
          var GETContaminantID = jQuery('#ctl00_ContentPlaceHolder1_DropDownCont').val();

          getvaluesonload('DetectorHeight(cm)' , '#ctl00_ContentPlaceHolder1_DropDownHeight' , getDetectorType , GETContaminantID);

      });

//// Call function on load
getvaluesonload('GETDetectorType' , '#ctl00_ContentPlaceHolder1_DropDownDet' , 'NULL' , 'NULL');
//getvaluesonload('Contaminant');

  })