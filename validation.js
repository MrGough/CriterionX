
class Validation
{
	
	// CONSTUCTOR 
	constructor(VALUE, LABEL, VTARGET, VID, VOPTIONS, VCOUNT)
	{
		this.VALUE = VALUE || 'data-save';
		this.LABEL = LABEL || 'data-label';
		this.VTARGET = VTARGET || 'data-vrule';
		this.VID = VID || 'data-vid';
		this.VOPTIONS = VOPTIONS || 'data-voption';
		this.VCOUNT = VCOUNT || 'data-vcount';
	}
	
	// BUILD VALIDATION ELEMENT
	builder ()
	{
		let Validation_Element = $('['+ this.VTARGET +']');
		Validation_Element.each( function(VCount)
		{
			$(this).attr('['+ this.VID +']', VCount);
		});
	}
	
	// MAIN VALIDATION CONTROLLER FUNCTION
	controller (Data, Status)
	{
		
	}
	
	// CONTAINER FOR VALIDATION RULES
	rules (Rules, Element)
	{
		required (Element)
		{
			
		}
		
		no_special_characters (Element)
		{
			
		}
		
		currency (Element)
		{
			
		}
		
		email (Element)
		{
			
		}
		
		mobile (Element)
		{
			
		}
		
		landline (Element)
		{
			
		}
		
		date_today (Element)
		{
			
		}
		
		date_before_today (Element)
		{
			
		}
		
		date_after_today (Element)
		{
			
		}
		
		date_arg (Element)
		{
			
		}
		
		date_before_arg (Element)
		{
			
		}
		
		date_after_arg (Element)
		{
			
		}
		
		date_within_arg (Element)
		{
			
		}
		
		time_now (Element)
		{
			
		}
		
		time_before_now (Element)
		{
			
		}
		
		time_after_now (Element)
		{
			
		}
		
		time_arg (Element)
		{
			
		}
		
		time_after_arg (Element)
		{
			
		}
		
		time_before_arg (Element)
		{
			
		}
		
		time_within_arg (Element)
		{
			
		}
		
		minimum (Element)
		{
			
		}
		
		maximum (Element)
		{
			
		}
		
		age_over_arg (Element)
		{
			
		}
		
		age_under_arg (Element)
		{
			
		}
		
		password (Element)
		{
			
		}
		
		match (Element)
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
	
	// BUILD VALIDATION REPORT
	report ()
	{
		
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