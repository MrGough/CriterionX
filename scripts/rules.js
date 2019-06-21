/*

	NAME: VALIDATION RULES CLASS
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/

class Rule
{
	constructor (e)
	{
		this.value = e.value; // VALUE PASSED
		this.status = e.status; // PASS / FAIL (TRUE / FALSE)
		this.code = e.code;	// VALIDATION ERROR CODES
		this.arg; // CRITERION
		
		return this;
	}
	
	
	
	/*
	|| -------------------------------------- ||
	*/
	
	required ()
	{
		if (this.value.length == 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	no_special_characters ()
	{
		const SPECIAL_CHARACTERS_REGEX = /^[a-zA-Z0-9]{4,10}$/g;
		
		if (SPECIAL_CHARACTERS_REGEX.exec( this.value ) === null)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	currency ()
	{
		const CURRENCY_REGEX = /^[0-9]*\.[0-9][0-9]$/g;
		
		if (CURRENCY_REGEX.exec( this.value ) === null)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	email ()
	{
		const EMAIL_REGEX = /^(\w+|\d+)([\.\-!#$%&'*+\/=?^_`{|}~]?([a-z]|[0-9]))*@\w+([\.-]?\w+)*(\.\w{1,3})+$/i;
		
		// INVALID EMAIL ARGUMENT
		if (EMAIL_REGEX.exec( this.value ) === null)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	mobile ()
	{
		const TELEPHONE_REGEX = /^[0-9\'\- ]{11,13}$/i;
		
		if (TELEPHONE_REGEX.exec( this.value ) === null)
		{
			this.status = 0;
		}

		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	landline ()
	{
		const TELEPHONE_REGEX = /^[0-9\'\- ]{11,13}$/i;
		
		if (TELEPHONE_REGEX.exec( this.value ) === null)
		{
			this.status = 0;
		}

		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_today ()
	{
		const TODAY = new Date();
		const DATE = new Date( this.value );
		const DAYS_DIFFERENCE = Math.floor((Date.UTC(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()) - Date.UTC(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()) ) / (1000 * 60 * 60 * 24));
		
		if (DAYS_DIFFERENCE !== 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_before_today ()
	{
		const TODAY = new Date();
		const DATE = new Date( this.value );
		const DAYS_DIFFERENCE = Math.floor((Date.UTC(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()) - Date.UTC(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()) ) / (1000 * 60 * 60 * 24));
		
		if (DAYS_DIFFERENCE < 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_after_today ()
	{
		const TODAY = new Date();
		const DATE = new Date( this.value );
		const DAYS_DIFFERENCE = Math.floor((Date.UTC(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()) - Date.UTC(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()) ) / (1000 * 60 * 60 * 24));
		
		if (DAYS_DIFFERENCE > 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_arg ()
	{
		const ARG_DATE = new Date( this.arg );
		const DATE = new Date( this.value );
		const DAYS_DIFFERENCE = Math.floor((Date.UTC(ARG_DATE.getFullYear(), ARG_DATE.getMonth(), ARG_DATE.getDate()) - Date.UTC(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()) ) / (1000 * 60 * 60 * 24));
		
		if (DAYS_DIFFERENCE !== 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_before_arg ()
	{
		const ARG_DATE = new Date( this.arg );
		const DATE = new Date( this.value );
		const DAYS_DIFFERENCE = Math.floor((Date.UTC(ARG_DATE.getFullYear(), ARG_DATE.getMonth(), ARG_DATE.getDate()) - Date.UTC(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()) ) / (1000 * 60 * 60 * 24));
		
		if (DAYS_DIFFERENCE > 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_after_arg ()
	{
		const ARG_DATE = new Date( this.arg );
		const DATE = new Date( this.value );
		const DAYS_DIFFERENCE = Math.floor((Date.UTC(ARG_DATE.getFullYear(), ARG_DATE.getMonth(), ARG_DATE.getDate()) - Date.UTC(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()) ) / (1000 * 60 * 60 * 24));
		
		if (DAYS_DIFFERENCE < 0)
		{
			this.status = 0;
		}
		
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	date_within_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_now ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_before_now ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_after_now ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_after_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_before_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	time_within_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	minimum ()
	{
		if (this.value < this.arg) { this.status = 0; }
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	maximum ()
	{
		if (this.value > this.arg) { this.status = 0; }
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	age_over_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	age_under_arg ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	password ()
	{
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	equal ()
	{
		if (this.value != this.arg) { this.status = 0; }
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	identical ()
	{
		if (this.value !== this.arg) { this.status = 0; }
		return this;
	}
	
	/*
	|| -------------------------------------- ||
	*/
}
