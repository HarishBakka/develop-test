/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*/
define(['N/ui/message','N/ui/dialog'],
function(message,dialog){
	function pageInit(context) {
		//dialog.alert({
		//	title: 'Alert',
		//	message: 'Work In Progress'
		//});
		//if((context.mode === 'create') && (context.mode === 'edit')){
			var newRec = context.currentRecord;
			var formId = newRec.getValue({
				fieldId: 'customform'
			});
			// Set the unit values in milliseconds.  
			var msecPerMinute = 1000 * 60;
			var msecPerHour = msecPerMinute * 60;
			var msecPerDay = msecPerHour * 24; 
			var date = new Date('3/15/2018');
			var date1 = new Date();
			var dateMsec = date1.getTime();
			// Set the date to January 1, at midnight, of the specified year.  
			//date.setMonth(3);
			//date.setDate(13);
			//date.setHours(0, 0, 0, 0);
			// Get the difference in milliseconds.
			var interval = dateMsec - date.getTime();
			// Calculate how many days the interval contains. Subtract that
			// many days from the interval to determine the remainder.
			var days = Math.round((date1-date)/msecPerDay);
			interval = interval - (days * msecPerDay );
			// Calculate the hours, minutes, and seconds.
			var hours = Math.floor(interval / msecPerHour );
			interval = interval - (hours * msecPerHour );
			var minutes = Math.floor(interval / msecPerMinute );
			interval = interval - (minutes * msecPerMinute );
			var seconds = Math.floor(interval / 1000 );
			log.debug('Get Form ID',formId);
			if (formId == 149) {
				dialog.alert({
					title: 'Alert',
					message: '<p style="color:red;">Work In Progress.</p>'+'<br><br>'+'Left to Release: '+days +' days' +'  '+hours+' hours'+' '+ minutes+' Min'+' '+seconds+' Sec'
				});
			}
			//return;
		//}
	}
	return{
		pageInit: pageInit
	};
});