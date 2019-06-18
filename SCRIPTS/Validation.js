/*

	NAME: VALIDATION CLASS
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/

class Validation
{
	constructor (ELEMENT, $)
	{
		this.Value = $(ELEMENT).val();
		this.Element = $;
		this.Test = ELEMENT;
		
		return this;
		
		/*
		this.Value = VALUE || 'data-value';
		this.VRule = VRULE || 'data-vrule';
		this.Label = LABEL || 'data-label';
		this.VID = VID || 'data-vid';
		this.VOptions = VOPTIONS || 'data-voptions';
		*/
	}

	builder ()
	{
		const VELEM = this.Element('[data-vrule]');
		const $ = this.Element;
		
		return $;
		
		
		/*
		const VELEM = $('['+ this.VRule +']');
		VELEM.each(function (VID){ $(this).attr(this.VID, VID); });
		return this.Label;
		*/
	}
}