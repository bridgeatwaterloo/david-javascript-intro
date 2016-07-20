// This code runs if geolocation is enabled
function doGeolocationLogin() {

	// This function runs when the browser has successfully obtained the user's location
	// The argument 'position' is used by the browser to pass us an object containing their position
	function gotLocation(position) {
		console.log(position.coords.latitude, position.coords.longitude);
	} // END of gotLocation()

	navigator.geolocation.getCurrentPosition(gotLocation);
} // END of doGeolocationLogin()

// This code runs if geolocation is not enabled
function doPasswordLogin() {
	
} // End of doPasswordLogin()

// Start by checking if geolocation is available
if ("geolocation" in navigator) {
  /* geolocation is available */
  doGeolocationLogin();
} else {
  /* geolocation IS NOT available */
  doPasswordLogin();
} // END of geolocation check