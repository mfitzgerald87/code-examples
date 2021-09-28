
// on page load lets do stuff
$(document).on('pageshow', '#add-submission' ,function(){  
$( "#popupBasicSubmission" ).bind({
   popupafterclose: function(event, ui) { 
    $.mobile.changePage("../../account/html/dashboard.html", {allowSamePageTransition : true, reloadPage : true});
   }
});
	
//$('#header').load('/helpinghands/www/includes/header.html').trigger("create");
//
// grabs default techniques and populates dropdown 
			$.ajax({    //create an ajax request to load_page.php
															 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); }, //Hide spinner
					type: 'POST',
					data: loginData,
					dataType: 'JSON',
					url: 'http://www.creativesunrise.com/submissiontracker/submissions/techniquelist.php',
					success: function(data){ //Get and populate the list of CUSTOM techniques
					 var markup = '';
					   markup += '<option value="" select="selected">- Select Technique -</option>';
var customtechniquearraylength = data.customtechniques.length;
  if(customtechniquearraylength > 0){
	  markup += '<optgroup label="Custom Techniques">';
	  
        for(var i = 0; i < customtechniquearraylength; i++) {
            markup += '<option value="' + data.customtechniquesid[i] + '">' + data.customtechniques[i] + '</option>';
        }
 markup += '</optgroup>';
  }
				
				
//Get and populate the list of DEFAULT techniques					 
 var defaulttechniquearraylength = data.defaulttechniques.length;
	 var temporarycatid = data.defaulttechniquecatid[0];
	  markup += '<optgroup label="' + data.defaulttechniquecatname[0] + '">';
		for(var i = 0; i < defaulttechniquearraylength; i++) {
			if (temporarycatid != data.defaulttechniquecatid[i])  { 
		 markup += '</optgroup>';
			 markup += '<optgroup label="' + data.defaulttechniquecatname[i] + '">';
			 temporarycatid = 0;
			}
			 if (temporarycatid != data.defaulttechniquecatid[i])  { 
			  temporarycatid = data.defaulttechniquecatid[i];
			 }
            markup += '<option value="' + data.defaulttechniquesid[i] + '">' + data.defaulttechniques[i] + '</option>';
        }
			 markup += '</optgroup>';	
			$('#technique').html(markup);
			var myselect = $('#technique')
							    myselect[0].selectedIndex = 0;
   								 myselect.selectmenu("refresh");
						}
			 });
			
			
// grabs default positions and populates dropdown 
			$.ajax({    //create an ajax request to load_page.php
															 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); },
					type: 'POST',
					data: loginData,
					dataType: 'JSON',
					url: 'http://www.creativesunrise.com/submissiontracker/submissions/positionlist.php',
					success: function(data){ //Get and populate the list of CUSTOM positions
					 var markup = '';
					markup += '<option value="" select="selected">- Select Position -</option>';
var custompositionarraylength = data.custompositions.length;
  if(custompositionarraylength > 0){
	  markup += '<optgroup label="Custom positions">';
	  
        for(var i = 0; i < custompositionarraylength; i++) {
            markup += '<option value="' + data.custompositionid[i] + '">' + data.custompositions[i] + '</option>';
        }
 markup += '</optgroup>';
  }////Get and populate the list of DEFAULT positions	
 var defaultpositionarraylength = data.defaultpositions.length;
 markup += '<optgroup label="Standard positions">';
		for(var i = 0; i < defaultpositionarraylength; i++) {
	
            markup += '<option value="' + data.defaultpositionid[i] + '">' + data.defaultpositions[i] + '</option>';
        }
			 markup += '</optgroup>';	
			$('#position').html(markup);
			var myselect = $('#position')
							    myselect[0].selectedIndex = 0;
   								 myselect.selectmenu("refresh");
						}
					 });
			
// grabs campaigns and populates dropdown 
			$.ajax({    //create an ajax request to load_page.php
													 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); },
					type: 'POST',
					data: loginData,
					dataType: 'JSON',
					url: 'http://www.creativesunrise.com/submissiontracker/submissions/campaignlist.php',
					success: function(data){ ////Get and populate the list of CUSTOM campaigns	
var campaignlist = '';
var campaignarraylength = data.campaigns.length;
  if(campaignarraylength > 0){
	  
        for(var i = 0; i < campaignarraylength; i++) {
            campaignlist += '<input type="checkbox" name="campaign' + data.campaignid[i] + '" value="yes" class="custom">' + data.campaigns[i] + '<br>';
        }
  }
			$('#campaigns').html(campaignlist);
						}
			 });// post the form data
			
		// fill in the datepicker	
		var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
		
	    $("#date").val(today);  	
		
		
		// submit the form
			
		$('#addsubmissionform').submit(function(){
			submissionData = $(this).serialize() + '&' + loginData;
		// combine submissions data and global login data
			$.ajax({
														 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); },
					type: 'POST',
				data: submissionData,
				dataType: 'JSON',
				url: 'http://www.creativesunrise.com/submissiontracker/submissions/addsubmission.php',
				cache: false,
				success: function(data){
				  if(data.success == true) {
					 $( "#popupBasicSubmission" ).html('<font color=\"#2980B9\" style=\"margin:10px; font-size:20px;\">Submission Added!</font>').popup( "open" );
                 
					 
	   
            }
            else if(data.success == false) {
                  $.mobile.changePage("../../account/html/dashboard.html");
            }
				},
				error: function(){
					console.log(data);
					/* var Errorsubmit = true; */
				$( "#popupBasic" ).html(data.message).popup( "open" );
				}
				});
				return false;
				});	
	
//close class totally
 });	
