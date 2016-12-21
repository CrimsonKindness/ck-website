$(document).ready(function() {
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyBOmXQ7-U4-EZ_C37in1CqAIbcQllH5mlM',
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
		events: {
			googleCalendarId: 'crimsonkindness@gmail.com',
			url: 'http://google.com/'
		},
		eventClick: function(event) {
			if (event.url) {
				window.open(event.url);
				return false;
			}
		}
	});
});
