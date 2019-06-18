
class Validation
{
	
	// CONSTUCTOR 
	constructor(VALUE, LABEL, VTARGET, VID)
	{
		this.VALUE = VALUE || 'data-save';
		this.LABEL = LABEL || 'data-label';
		this.VTARGET = VTARGET || 'data-vrule';
		this.VID = VID || 'data-vid';
	}
	
	// BUILD VALIDATION ELEMENT
	builder ()
	{
		let Validation_Element = $('['+ this.VTARGET +']');
		Validation_Element.each( function(Counter)
		{
			$(this).attr('['+ this.VID +']', Counter);
		});
	}
	
	// MAIN VALIDATION CONTROLLER FUNCTION
	controller (Data, Status)
	{
		
	}
	
	// CONTAINER FOR VALIDATION RULES
	rules (Rules, Element)
	{
		// VALIDATE AS REQUIRED FIELD
		required (Element)
		{
			
		}
		
		// VALIDATE AS EMAIL
		email (Element)
		{
			
		}
		
		// 
		phone_mobile (Element)
		{
			
		}
		
		//
		phone_landline (Element)
		{
			
		}
		
		//
		postcode (Element)
		{
			
		}
		
		//
		day_before_now (Element)
		{
			
		}
		
		//
		day_after_now (Element)
		{
			
		}
	}
	
	// VALIDATION STATUS CODES (ERROR, WARNING, SUCCESS)
	statuscode (Code)
	{
		switch (Code)
		{
			case 0:
			return 'Invalid';
			break;
			
			case 1:
			return 'Required';
			break;
			
			case 2:
			return 'Missing Information';
			break;
			
			default:
			return 'Error';
			break;
		}
	}
	
	// ---- VALIDATION STATUS ACTIONS ---- //
	
	// BUILD ERROR ELEMENT
	error (Identifer, Code)
	{
		let Target = $('['+ this.VID +'="'+ Identifer +'"]');
		let Target_Label = Target.parent().parent().children('span:nth-of-type(1)').children('label');
		let Error_Code = StatusCode(Code);
		
		// APPEND VALIDATION ERROR CLASS
		Target.parent().parent().addClass('ValError');
		Target_Label.append("<b style='font-size: 12px;'> ("+ Error_Code +") </b>");
	}
	
	// BUILD WARNING ELEMENT
	warning(Identifer, Code)
	{
		let Target = $('['+ this.VID +'="'+ Identifer +'"]');
		let Target_Label = Target.parent().parent().children('span:nth-of-type(1)').children('label');
		let Error_Code = StatusCode(Code);
		
		// APPEND VALIDATION WARNING CLASS
		Target.parent().parent().addClass('ValWarning');
		Target_Label.append("<b style='font-size: 12px;'> ("+ Error_Code +") </b>");
	}
	
	// CLEAN ELEMENT OF VALIDATION STATUS'
	clean(Identifer)
	{
		let Target = $('['+ this.VID +'="'+ Identifer +'"]');
		let Target_Label = Target.parent().parent().children('span:nth-of-type(1)').children('label');
	
		// REMOVE STATUS CLASSES
		Target.parent().parent().removeClass('ValError');
		Target.parent().parent().removeClass('ValWarning');
		Target.parent().parent().removeClass('ValSuccess');
		
		// CORRECT ANY ELEMENT LABEL
		Target_Label.text(Target_label.attr( this.LABEL ));
	}
	
}