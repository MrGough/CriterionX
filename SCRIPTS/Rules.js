/*

	NAME: VALIDATION RULES CLASS
	INFORMATION: N/A
	VERSION: 0.0.1
	CLEAN: N/A
	OWNER: EDWARD GOUGH
	
*/

class Rule
{
	constructor (e, arg, vid)
	{
		this.value = e;
		this.arg = arg;
		this.vid = vid;
	}
	
	
	
	/*
	|| -------------------------------------- ||
	*/
	
	required ()
	{
		// ALERT METHOD CALL
		console.log('Method Call: ' + this.value);
		
		if (this.value.length == 0)
		{
			this.value = false;
		}
		
		return this.value;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	no_special_characters ()
	{
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
			this.value = false;
		}
		
		return this.value;
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
			this.value = false;
		}
		
		return this.value;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	mobile ()
	{
		const TELEPHONE_REGEX = /^[0-9\'\- ]{11,13}$/i;
		
		if (TELEPHONE_REGEX.exec( this.value ) === null)
		{
			this.value = false;
		}

		return this.value;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	landline ()
	{
		const TELEPHONE_REGEX = /^[0-9\'\- ]{11,13}$/i;
		
		if (TELEPHONE_REGEX.exec( this.value ) === null)
		{
			this.value = false;
		}

		return this.value;
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
			this.value = false;
		}
		
		return this.value;
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
			this.value = false;
		}
		
		return this.value;
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
			this.value = false;
		}
		
		return this.value;
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
			this.value = false;
		}
		
		return this.value;
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
			this.value = false;
		}
		
		return this.value;
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
			this.value = false;
		}
		
		return this.value;
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
		if (this.value < this.arg) { this.value = false; }
		return this.value;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	maximum ()
	{
		if (this.value > this.arg) { this.value = false; }
		return this.value;
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
		if (this.value != this.arg) { this.value = false; }
		return this.value;
	}
	
	/*
	|| -------------------------------------- ||
	*/
	
	identical ()
	{
		if (this.value !== this.arg) { this.value = false; }
		return this.value;
	}
	
	/*
	|| -------------------------------------- ||
	*/
}