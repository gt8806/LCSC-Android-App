$(document).ready(function() {
$("#calendar").on('click', 'a', function() {
    var item ='a#'+ $(this).attr('id')+' div.fc-event-time table';
	if ($(item).css('display')=='none')
	{
	$(item).css("display","");
	}
	else
	{
	$(item).css("display","none");
	}
});

$(".eventsources").on('click', '.warrior_athletics_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'd6jbgjhudph2mpef1cguhn4g9g@group.calendar.google.com');
    $('.warrior-athletic-event').css("display", "none");
    $('.warrior_athletics_add').addClass("warrior_athletics_hidden");
});

$(".eventsources").on('click', '.warrior_athletics_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'd6jbgjhudph2mpef1cguhn4g9g@group.calendar.google.com',
        className: ' warrior-athletic-event'
    });
    $('.warrior-athletic-event').css("display", "");
    $('.warrior_athletics_hidden').removeClass("warrior_athletics_hidden");
});

$(".eventsources").on('click', '.resident_life_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'gqv0n6j15pppdh0t8adgc1n1ts@group.calendar.google.com');
    $('.resident-life-event').css("display", "none");
    $('.resident_life_add').addClass("resident_life_hidden");
});

$(".eventsources").on('click', '.resident_life_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'gqv0n6j15pppdh0t8adgc1n1ts@group.calendar.google.com',
        className: ' resident-life-event'
    });
    $('.resident-life-event').css("display", "");
    $('.resident_life_hidden').removeClass("resident_life_hidden");
});


$(".eventsources").on('click', '.entertainment_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'm6h2d5afcjfnmaj8qr7o96q89c@group.calendar.google.com');
    $('.entertainment-event').css("display", "none");
    $('.entertainment_add').addClass("entertainment_hidden");
});

$(".eventsources").on('click', '.entertainment_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'm6h2d5afcjfnmaj8qr7o96q89c@group.calendar.google.com',
        className: ' entertainment-event'
    });
    $('.entertainment-event').css("display", "");
    $('.entertainment_hidden').removeClass("entertainment_hidden");
});

$(".eventsources").on('click', '.student_activites_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com');
    $('.student-activity-event').css("display", "none");
    $('.student_activites_add').addClass("student_activites_hidden");
});

$(".eventsources").on('click', '.student_activites_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com',
        className: ' student-activity-event'
    });
    $('.student-activity-event').css("display", "");
    $('.student_activites_hidden').removeClass("student_activites_hidden");
});


$(".eventsources").on('click', '.academics_add', function () {
    $('#calendar').fullCalendar('removeEventSource', '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com');
    $('.academic-event').css("display", "none");
    $('.academics_add').addClass("academics_hidden");
});

$(".eventsources").on('click', '.academics_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com',
        className: ' academic-event'
    });
    $('.academic-event').css("display", "");
    $('.academics_hidden').removeClass("academics_hidden");
});


$(".eventsources").on('click', '.campus_rec_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'h4j413d3q0uftb2crk0t92jjlc@group.calendar.google.com');
    $('.campus-rec-event').css("display", "none");
    $('.campus_rec_add').addClass("campus_rec_hidden");
});

$(".eventsources").on('click', '.campus_rec_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'h4j413d3q0uftb2crk0t92jjlc@group.calendar.google.com',
        className: ' campus-rec-event'
    });
    $('.campus-rec-event').css("display", "");
    $('.campus_rec_hidden').removeClass("campus_rec_hidden");
});

$('#calendar').fullCalendar({
    dayNamesShort: ['', '', '', '', '', '', ''],
    header: {
        left: '',
        center: 'title',
        right: ''
    },
	defaultView:'agendaList',
	aspectRatio: 1,
    googleCalendarApiKey: 'AIzaSyASiprsGk5LMBn1eCRZbupcnC1RluJl_q0',
	eventSources:[
        {
            googleCalendarId: '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com',
			className: ' academic-event'
        },
        {
            googleCalendarId: 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com',
            className: ' student-activity-event'
            },
		{
            googleCalendarId: 'd6jbgjhudph2mpef1cguhn4g9g@group.calendar.google.com',
			className: ' warrior-athletic-event'
            },
        {
            googleCalendarId: 'm6h2d5afcjfnmaj8qr7o96q89c@group.calendar.google.com',
			className: ' entertainment-event'
            },
		{
            googleCalendarId: 'gqv0n6j15pppdh0t8adgc1n1ts@group.calendar.google.com',
			className: ' resident-life-event'
            },
		{
            googleCalendarId: 'h4j413d3q0uftb2crk0t92jjlc@group.calendar.google.com',
			className: ' campus-rec-event'
            }
        ],
});
//$('#fullCalendar').fullCalendar({
//    googleCalendarApiKey: 'AIzaSyASiprsGk5LMBn1eCRZbupcnC1RluJl_q0',
//    eventSources: [
//        {
//            googleCalendarId: '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com',
//            className: ' academic-event'
//        },
//        {
//            googleCalendarId: 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com',
//            className: 'student-activity-event'
//        }
//    ]
//});
});
function AllEvents(){
    $("#calendar").addClass("show");
    $("#calendar").removeClass("hide");
    $("#emergency").addClass("hide");
    $("#emergency").removeClass("show");
    $("#resource").addClass("hide");
    $("#resource").removeClass("show");
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("show");
    $(".eventsources").removeClass("hide");
}
function FullCalendar() {
    $("#calendar").addClass("hide");
    $("#calendar").removeClass("show");
    $("#emergency").addClass("hide");
    $("#emergency").removeClass("show");
    $("#resource").addClass("hide");
    $("#resource").removeClass("show");
    $("#fullCalendar").addClass("show");
    $("#fullCalendar").removeClass("hide");
    $(".eventsources").addClass("show");
    $(".eventsources").removeClass("hide");
}
function Resources(){
    $("#calendar").addClass("hide");
    $("#calendar").removeClass("show");
    $("#emergency").addClass("hide");
    $("#emergency").removeClass("show");
    $("#resource").addClass("show");
    $("#resource").removeClass("hide");
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
}
function Emergency(){
    $("#calendar").addClass("hide");
    $("#calendar").removeClass("show");
    $("#emergency").addClass("show");
    $("#emergency").removeClass("hide");
    $("#resource").addClass("hide");
    $("#resource").removeClass("show");
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");

}
