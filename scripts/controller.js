/*

	NAME: CONTROLLER
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/



$('[data-vrule]').each( function(ID)
{
	const X = new Validation($(this));
		console.log(X.run());
	
	const V = new Validation();
		// V.builder($(this));
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
