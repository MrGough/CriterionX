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
		this.config = this.configuration();
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
		let configuration_data_packet = ( function()
		{
        let json = null;
				
        $.ajax({
            'async': false,
            'global': false,
            'url': "config/settings.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
				
        return json;
    })();
		
		return configuration_data_packet;
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
		let parsed_rule;
		
		let ruleset = ( function()
		{
        let json = null;
				
        $.ajax({
            'async': false,
            'global': false,
            'url': "config/rules.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
	
		// RUN RULE GETTER - VALUE PASSED INTEGER
		if (typeof (rule) == "number")
		{
			parsed_rule = ruleset[rule].name;
		}
		// RUN RULE GETTER - VALUE PASSED STRING
		else if (typeof (rule) == "string")
		{
			$.each(ruleset, function(i)
			{
				if (ruleset[i].name == rule)
				{ 
					parsed_rule = ruleset[i].name;
				}
			});
		}
		
		console.log("PARSED RULE: " + parsed_rule);
		
		return parsed_rule;
	}
	
	error_code (c)
	{
		let codeset = ( function()
		{
        let json = null;
				
        $.ajax({
            'async': false,
            'global': false,
            'url': "config/codes.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
		
		return codeset[c].message;
	}
 
}
