// When the user clicks the button
$('.submit-checkin').click(processCheckin);

function processCheckin() {
// Start by checking if geolocation is available
if ("geolocation" in navigator) {
  /* geolocation is available */
  console.log('getting geolocation...');
  navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});
} else {
  /* geolocation IS NOT available */
	} // END of geolocation check
}