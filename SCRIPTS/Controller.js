/*

	NAME: CONTROLLER
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/



$('[data-vrule]').each( function(ID)
{
	let Rules = $(this).attr('data-vrule').split(',');
	
	// DISPLAY VALIDATION RULES SELECTED
	console.log(Rules);
	
	$(this).attr('data-vid', ID);

});

$('input, textarea, button').on('change', function(e)
{
	
});


function Controller(Element)
{
	
}

function Layout(Element)
{
	
}
