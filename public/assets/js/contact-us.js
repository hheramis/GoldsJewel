/**
 * load-ajax-data.js 1.0
 *
 * @package			JS Protototype
 * @subpackage		JavaScript
 * @category		AJAX Forms
 * @author			Firstname Lastname
 * @url				http://domain.com
 * @date created	Day Month Year
 * @date modified	Day Month Year
 */

;(function($)
{
	$.extend(
	{
		// Declare a namespace for functions - AF alias for AJAX Forms
		sendEmail : 
		{
			
			// Display the user's attendance
			displayAttendance : function(week, data)
			{
				var logs = '';
				
				$.each(data, function(i, log)
				{
					logs += '<tr><td>' + log.date + '</td><td>' + log.day + '</td><td>' + log.status + ' Day</td><td>' + log.timeIn + '</td><td>' + log.timeOut + '</td></tr>';
				});
				
				return '<div id="week-' + week + '" class="logs hide">' +
						'<h2>Week ' + week + '</h2>' +
						'<table cellpadding="10" cellspacing="0" border="1">' +
						'<tr><th>Date</th><th>Day</th><th>Status</th><th>Time In</th><th>Time Out</th></tr>' +
						logs +
						'</table></div>';
			}
						
		} // End of AF namespace
		
	}); // End of extend
	
	
	// Process the name form
	$('body').on('submit', '#sendForm', function()
	{

		
		// Initialize variables
		var nameForm = $('#sendForm');
		var fnameFld = nameForm.find('input[name=fullname]');
		var emailFld = nameForm.find('input[name=email]');
		var nameBtn = nameForm.find('.sendBtn');
		var validForm = true;
		
		// Check fields if not empty
		nameForm.find('.required').each(function()
		{
			if ($(this).val() == '')
			{
				validForm = false;
				$(this).focus();
				
				return false;
			}
			
		});
		
		// Process form if all fields are valid
		if (validForm)
		{
			var actionPath = '/ajax-send-email.php';
			var dataString = $(this).serialize();
			$('#contact-msg').html('<p>Your message was successfully sent!</p>').css('display', 'block');
			$.ajax({
				type: 'POST',	
				url: actionPath,
				data: dataString,
				dataType: 'JSON',
				cache: false,
				timeout: 30000,
				success: function(data)
				{
										
				}
				
			});
		}
		
	});
	
})(jQuery);
/* End of file load-ajax-data.js */
/* Location: ./assets/js/load-ajax-data.js */