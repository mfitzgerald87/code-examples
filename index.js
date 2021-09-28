var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3977969823987090/3830389960',
        interstitial: null
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-3977969823987090/6783856365',
        interstitial: null
    };
}
 else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-3977969823987090/8169531166',
        interstitial: null
    };
} 


function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

document.addEventListener('deviceready', initApp, false);

var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
    onDeviceReady: function() {
        console.log("device ready, start making you custom calls!");

		   if (localStorage.chkbx && localStorage.chkbx != '') {
                    $('#remember_me').attr('checked', 'checked');
                    $('#email').val(localStorage.usrname);
                    $('#password').val(localStorage.pass);
					
                } else {
                    $('#remember_me').removeAttr('checked');
                    $('#email').val('');
                    $('#password').val('');
					
                }
 
               
			
        // Start adding your code here....
	
	$( "#popupBasicReset" ).bind({
   popupafterclose: function(event, ui) { 
    $.mobile.changePage("index.html", {allowSamePageTransition : true, reloadPage : true});
   }
});
$( "#popupBasicRegistered" ).bind({
   popupafterclose: function(event, ui) { 
     $.mobile.back();
   }
});
		$('#loginform').submit(function(){
			loginData = $(this).serialize();
		//console.log(loginData);
			$.ajax({
									 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); },
				type: 'POST',
				data: loginData,
				dataType: 'JSON',
				url: 'http://www.creativesunrise.com/submissiontracker/index/login.php',
				cache: false,
				success: function(data){
			
				  if(data.success == 'yes') {
				  if (data.remember == 'remember-me') {
                        // save username and password
                        localStorage.usrname = data.email;
                        localStorage.pass = data.passworded;
                        localStorage.chkbx = data.remember;
                    } 
				  $.mobile.changePage("account/html/dashboard.html");
				   
            }
            else if(data.success == 'no') {
                  $( "#popupBasic" ).html(data.message).popup( "open" );
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

	//	
	$('#registerform').submit(function(){
			var loginData = $(this).serialize();
			
			$.ajax({
									 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); },
				type: 'POST',
				data: loginData,
				dataType: 'JSON',
				url: 'http://www.creativesunrise.com/submissiontracker/index/register.php',
				cache: false,
				success: function(data){
					console.log(data);
				  if(data.success == true) {
				   if(data.passworderror == false) {
					$( "#popupBasicRegistered" ).html('<font color=\"#2980B9\" style=\"margin:10px; font-size:20px;\">Thank you for registering - You may now log in.</font>').popup( "open" );
				   	} else {
						 $( "#popupBasicPasswordError" ).html('<font color=\"red\" style=\"margin:10px; font-size:20px;\">Error: Your passwords did not match.</font>').popup( "open" );	
						}
				   
            }
            else if(data.success == false) {
                  $( "#popupBasic2" ).html('<font color=\"red\" style=\"margin:10px; font-size:20px;\">Error: That email or username already exists.</font>').popup( "open" );
				 
            }
			else {
				
			}
				},
				error: function(){
					console.log(data);
					/* var Errorsubmit = true; */
				$( "#popupBasic2" ).html(data.message).popup( "open" );
				}
				});
				return false;
				});	
	
	//	
	
	//	
	$('#passwordform').submit(function(){
			var loginData = $(this).serialize();
			
			$.ajax({
									 beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg(); },
				type: 'POST',
				data: loginData,
				dataType: 'JSON',
				url: 'http://www.creativesunrise.com/submissiontracker/index/resetpassword.php',
				cache: false,
				success: function(data){
					console.log(data);
				  if(data.success == 'yes') {
					 $( "#popupBasicReset" ).html('<font color=\"#2980B9\" style=\"margin:10px; font-size:20px;\">Thank you. Please check your email to obtain your new temporary password, log in, and change your password.</font>').popup( "open" );
				   
				   
            }
            else if(data.success == 'no') {
                $( "#popupBasicResetFail" ).html('<font color=\"red\" style=\"margin:10px; font-size:20px;\">Error: Invalid e-mail address.</font>').popup( "open" );
				 
            }
			else {
				
			}
				},
				error: function(){
					console.log(data);
					/* var Errorsubmit = true; */
				$( "#popupBasic2" ).html(data.message).popup( "open" );
				}
				});
				return false;
				});	
	//	
	
	
				
			
    }	
};
 $(document).on('click', "#remember_me", function() {
 
                    if ($('#remember_me').is(':checked')) {
                    } else {
                        localStorage.usrname = '';
                        localStorage.pass = '';
                        localStorage.chkbx = '';
                    }
                });
           ;