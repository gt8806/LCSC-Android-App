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
    $('.warrior_athletics_add').css("color", "#069");
    $('.warrior_athletics_add').css("background-color", "white");
});

$(".eventsources").on('click', '.warrior_athletics_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'd6jbgjhudph2mpef1cguhn4g9g@group.calendar.google.com',
        className: ' warrior-athletic-event'
    });
    $('.warrior-athletic-event').css("display", "");
    $('.warrior_athletics_hidden').removeClass("warrior_athletics_hidden");
    $('.warrior_athletics_add').css("color", "white");
    $('.warrior_athletics_add').css("background-color", "#069");
});

$(".eventsources").on('click', '.resident_life_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'gqv0n6j15pppdh0t8adgc1n1ts@group.calendar.google.com');
    $('.resident-life-event').css("display", "none");
    $('.resident_life_add').addClass("resident_life_hidden");
    $('.resident_life_add').css("color", "#0CC");
    $('.resident_life_add').css("background-color", "white");
});

$(".eventsources").on('click', '.resident_life_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'gqv0n6j15pppdh0t8adgc1n1ts@group.calendar.google.com',
        className: ' resident-life-event'
    });
    $('.resident-life-event').css("display", "");
    $('.resident_life_hidden').removeClass("resident_life_hidden");
    $('.resident_life_add').css("color", "white");
    $('.resident_life_add').css("background-color", "#0CC");
});


$(".eventsources").on('click', '.entertainment_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'm6h2d5afcjfnmaj8qr7o96q89c@group.calendar.google.com');
    $('.entertainment-event').css("display", "none");
    $('.entertainment_add').addClass("entertainment_hidden");
    $('.entertainment_add').css("color", "#900");
    $('.entertainment_add').css("background-color", "white");
});

$(".eventsources").on('click', '.entertainment_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'm6h2d5afcjfnmaj8qr7o96q89c@group.calendar.google.com',
        className: ' entertainment-event'
    });
    $('.entertainment-event').css("display", "");
    $('.entertainment_hidden').removeClass("entertainment_hidden");
    $('.entertainment_add').css("color", "white");
    $('.entertainment_add').css("background-color", "#900");
});

$(".eventsources").on('click', '.student_activites_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com');
    $('.student-activity-event').css("display", "none");
    $('.student_activites_add').addClass("student_activites_hidden");
    $('.student_activites_add').css("color", "#F93");
    $('.student_activites_add').css("background-color", "white");
});

$(".eventsources").on('click', '.student_activites_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com',
        className: ' student-activity-event'
    });
    $('.student-activity-event').css("display", "");
    $('.student_activites_hidden').removeClass("student_activites_hidden");
    $('.student_activites_add').css("color", "white");
    $('.student_activites_add').css("background-color", "#F93");
});


$(".eventsources").on('click', '.academics_add', function () {
    $('#calendar').fullCalendar('removeEventSource', '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com');
    $('.academic-event').css("display", "none");
    $('.academics_add').addClass("academics_hidden");
    $('.academics_add').css("color", "#666");
    $('.academics_add').css("background-color", "white");
});

$(".eventsources").on('click', '.academics_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com',
        className: ' academic-event'
    });
    $('.academic-event').css("display", "");
    $('.academics_hidden').removeClass("academics_hidden");
    $('.academics_add').css("color", "white");
    $('.academics_add').css("background-color", "#666");
});


$(".eventsources").on('click', '.campus_rec_add', function () {
    $('#calendar').fullCalendar('removeEventSource', 'h4j413d3q0uftb2crk0t92jjlc@group.calendar.google.com');
    $('.campus-rec-event').css("display", "none");
    $('.campus_rec_add').addClass("campus_rec_hidden");
    $('.campus_rec_add').css("color", "#093");
    $('.campus_rec_add').css("background-color", "white");
});

$(".eventsources").on('click', '.campus_rec_hidden', function () {
    $('#calendar').fullCalendar('addEventSource', {
        googleCalendarId: 'h4j413d3q0uftb2crk0t92jjlc@group.calendar.google.com',
        className: ' campus-rec-event'
    });
    $('.campus-rec-event').css("display", "");
    $('.campus_rec_hidden').removeClass("campus_rec_hidden");
    $('.campus_rec_add').css("color", "white");
    $('.campus_rec_add').css("background-color", "#093");
});

$('#calendar').fullCalendar({
    dayNamesShort: ['', '', '', '', '', '', ''],
    header: {
        left: '',
        center: '',
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

$('#fullCalendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyASiprsGk5LMBn1eCRZbupcnC1RluJl_q0',
    eventSources: [
        {
            googleCalendarId: '0rn5mgclnhc7htmh0ht0cc5pgk@group.calendar.google.com',
            className: ' academic-event'
        },
        {
            googleCalendarId: 'l9qpkh5gb7dhjqv8nm0mn098fk@group.calendar.google.com',
            className: 'student-activity-event'
        }
    ]
});

$(document).on('click', function(event) {
    var target = $(event.target);
    if(target.is(".fa-chevron-circle-down") || target.is(".filter li") || target.is(".filter p")){
        $(".eventsources ul").css("display", "block");
    } else {
        $(".eventsources ul").css("display", "none");        
    }
});

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
    window.onload = function () {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = new Date();

        document.getElementById('date').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();
    };
