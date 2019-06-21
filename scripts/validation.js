/*

	NAME: [ CRITERION-X ] VALIDATION CLASS
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/

class Validation
{
	constructor (ELMT)
	{
		this.id = $(ELMT).attr('data-vid');
		this.value = $(ELMT).val();
		this.rules = $(ELMT).attr('data-vrule');
		this.options = $(ELMT).attr('data-voption');
		this.code = 0;
		this.status = 1;
		this.core = ELMT;
		return this;
	}

	builder ()
	{
		$('[data-vrule]').each( function(vid)
		{
			$(this).attr('data-vid', vid);
		});
	}
	
	run ()
	{
		this.rules = (this.rules ? this.rules.split(',') : this.rules);
		let r = new Rule(this);
	}
	
	config ()
	{
		let config = (function()
		{
			// RETRIEVE CONFIGURATION FILE
			let config_file = null;
			$.ajax({
					'async': false,
					'global': false,
					'url': "config/settings.json",
					'dataType': "json",
					'success': function (data)
					{
						config_file = data;
					}
			});
			return config_file;
		})();
		
		// INITIALISE CRITERIONX CONFIGURATION FILE
		return JSON.parse(config_file);
	}
	
	error ()
	{
		let element = $('['+ this.config.id_attr +'="'+ this.id +'"]');
		if (this.config.display_errors === true) element.attr( this.config.status_attr, this.code );
		element.addClass( this.config.error_class );
	}
	
	warning ()
	{
		let element = $('['+ this.config.id_attr +'="'+ this.id +'"]');
		if (this.config.display_errors === true) element.attr( this.config.status_attr, this.code );
		element.addClass( this.config.error_class );
	}
	
	success ()
	{
		let element = $('['+ this.config.id_attr +'="'+ this.id +'"]');
		if (this.config.display_success === true) element.attr( this.config.status_attr, this.code );
		element.addClass( this.config.error_class );
	}
	
	operator (rule)
	{
		// RETURN RULE [STRING] PASSED
		if (!isNaN(rule))
		{
			return rule;
		}
		
		// RETURN RULE [INT] PASSED
		switch (rule)
		{
			case 'required':
			return 1;
			break;
			
			case 'no_special_chars':
			return 2;
			break;
			
			case 'currency':
			return 3;
			break;
			
			case 'email':
			return 4;
			break;
			
			case 'mobile':
			return 5;
			break;
			
			case 'landline':
			return 6;
			break;
			
			case 'date_today':
			return 7;
			break;
			
			case 'date_before_today':
			return 8;
			break;
			
			case 'date_after_today':
			return 9;
			break;
			
			case 'date_arg':
			return 10;
			break;
			
			case 'date_before_arg':
			return 11;
			break;
			
			case 'date_after_arg':
			return 12;
			break;
			
			case 'date_within_arg':
			return 13;
			break;
			
			case 'time_now':
			return 14;
			break;
			
			case 'time_before_now':
			return 15;
			break;
			
			case 'time_after_now':
			return 16;
			break;
			
			case 'time_arg':
			return 17;
			break;
			
			case 'time_after_arg':
			return 18;
			break;
			
			case 'time_before_arg':
			return 19;
			break;
			
			case 'time_within_arg':
			return 20;
			break;
			
			case 'minimum':
			return 21;
			break;
			
			case 'maximum':
			return 22;
			break;
			
			case 'age_over_arg':
			return 23;
			break;
			
			case 'age_under_arg':
			return 24;
			break;
			
			case 'password':
			return 25;
			break;
			
			case 'equal':
			return 26;
			break;
			
			case 'identical':
			return 27;
			break;
			
			case 'match':
			return 28;
			break;
			
			default:
			return 0;
			break;
		}
	}
	
	code (c)
	{
		switch (c)
		{
			case 1:
			return 'Required';
			break;
			
			case 2:
			return 'Contains Special Characters';
			break;
			
			case 3:
			return 'None Number Format';
			break;
			
			case 4:
			return 'None Email Format';
			break;
			
			case 5:
			return 'None Mobile Number Format';
			break;
			
			case 6:
			return 'None Landline Numner Format';
			break;
			
			case 7:
			return 'Not Current Date';
			break;
			
			case 8:
			return 'Not Before Today';
			break;
			
			case 9:
			return 'Not After Today';
			break;
			
			case 10:
			return 'Invalid Date';
			break;
			
			case 11:
			return 'Not Before Date';
			break;
			
			case 12:
			return 'Not After Date';
			break;
			
			case 13:
			return 'Not Within Date Parameters';
			break;
			
			case 14:
			return 'Not Current Time';
			break;
			
			case 15:
			return 'Not Before Current Time';
			break;
			
			case 16:
			return 'Not After Current Time';
			break;
			
			case 17:
			return 'Invalid Time';
			break;
			
			case 18:
			return 'Not Before Time';
			break;
			
			case 19:
			return 'Not After Time';
			break;
			
			case 20:
			return 'Not Within Time Parameters';
			break;
			
			case 21:
			return 'Below Minimum';
			break;
			
			case 22:
			return 'Above Maximum';
			break;
			
			case 23:
			return 'Age Requirements Not Met: Under Age Limit';
			break;
			
			case 24:
			return 'Age Requirements Not Met: Over Age Limit';
			break;
			
			case 25:
			return 'Not Valid Password Format';
			break;
			
			case 26:
			return 'Does Not Match';
			break;
		}
	}
}
