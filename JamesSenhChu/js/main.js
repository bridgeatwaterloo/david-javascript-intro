// Target all elements with a class of 'view' with jquery $('view') then running the .hide method
showView('.view-checkin');

function showView(viewName) {
$('.view').hide();
$(viewName).show();
}

// Define a function called processCheckin
$('.submit-checkin').click(processCheckin);
	
function processCheckin() {
	alert("Oi mate you just click that sexy button");
	showView('.view-set-username');
}

// Define a function called processForm
$('.form-set-username').on('submit', processForm);

function processForm() {
	// Acquire the username entered by the user
	var username = $('input').val();
	// Load question view using showView
	showView('.view-question');
	// Replacing the content of <span class="username">@username</span> with our variable
	$('.username').html(username);
	return false;
}

// Define a function called processYes
$('.btn-success').click(processYes);

function processYes() {
	alert("Damn why you so sexy.");
	showView('.view-default');
	}

// Define a function called processNo	
$('.btn-danger').click(processNo);

function processNo() {
	alert("Don't worry, we'll get you there soon enough ( ͡° ͜ʖ ͡°)")
	showView('.view-default');
	}
