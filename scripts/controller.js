/*

	NAME: CONTROLLER
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/



/*
	EXAMPLE CALLS:

	// CALL METHOD ONE
	const X = new Validation();
				X.builder();

	// CALL METHOD TWO
	const Email = new Validation( $(this) ).required().email().format();

	// CALL METHOD THREE
	new Validation($(this)).required().no_special_chars().match();
	
*/

$('[data-vrule]').each( function(ID)
{});

$('input, textarea, button').on('change', function(e)
{});


// CONTROL ELEMENTS ON PAGE
function Controller(Element)
{}

// GENERATE FORM LAYOUTS
function Layout(Element)
{}
