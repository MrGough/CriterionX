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
		this.confg = this.configuration();
		this.core = ELMT;
		return this;
	}

	builder ()
	{
		let self = this;
		
		$('[data-vrule]').each( function(vid)
		{
			$(this).attr('data-vid', vid);
			//console.log( self.error_code(vid) );
		});
		
		/*
			self.debug(1, 'Validation Element ' +vid+ ' affected by builder', self.confg.);
		*/
	}
	
	debug (type, message, display)
	{
		// RETURN NOTHING IF SETTING DEACTIVATED
		if (display == false){ return; }
		
		// DISPLAY AS CONSOLE LOG
		if (type == 1)
		{
			console.log(message);
		}
		// DISPLAY AS ALERT
		else if (type == 2)
		{
			alert(message);
		}
	}
	
	run ()
	{
		this.rules = (this.rules ? this.rules.split(',') : this.rules);
		let r = new Rule(this);
	}
	
	configuration ()
	{
		import * as config from '../config/settings.json';
		return config;
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
		import * as rules '../config/rules.json';
		let parsed_rule;
		
		// RUN RULE GETTER - VALUE PASSED INTEGER
		if (typeof (rule) == "number")
		{
			parsed_rule = rules.rule.name;
		}
		// RUN RULE GETTER - VALUE PASSED STRING
		else if (typeof (rule) == "string")
		{
			$.each(rule_file, function()
			{
				if (rule_file[i].name == rule)
				{ 
					parsed_rule = rules.i.name;
				}
			});
		}
		
		return parsed_rule;
	}
	
	error_code (c)
	{
		import * as codes '../config/codes.json';
		return JSON;
	}
 
}
