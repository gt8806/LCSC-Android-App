$(document).ready(function() {
$("#calendar").on('click', 'a', function() {
    var item ='a#'+ $(this).attr('id')+' div.fc-event-time table';

	if ($(item).css('display')=='none'){
		$(item).css("display","");
		}
	else{
		$(item).css("display","none");
	console.log('ID: ' + $(item + ' span.fc-event-all-day').text());
	console.log('ID: ' + $(item + ' div.fc-eventlist-location').text());
	console.log('ID: ' + $(item + ' div.fc-eventlist-desc').text());
	
	
//new var a# ...
	}
});
$("#calendar").on('click', 'a', function() {
	//var item ='a#'+ $(this).attr('id')+' div.fc-eventlist-desc'.text();
	var item1 = document.getElementsByClassName('fc-event-start-time')[0].innerHTML;
	var item3 = document.getElementsByClassName('fc-eventlist-desc')[0].innerHTML;
	var item2 = document.getElementsByClassName('fc-eventlist-desc')[4].innerHTML;
	//console.log(item1);
	//console.log(item3);
	//console.log(item2);
	//console.log('ID: ' + $('div.fc-eventlist-desc').text());//prints all events desc list

});

if(localStorage.getItem('idPic')) {
    $('#idPicItem').innnerHTML='<img id="idPic">';
    $('#idPic', this.$el).attr('src', "data:image/jpeg;base64,"+localStorage.getItem('idPic'));
}

FastClick.attach(document.body);

});

//for event additions to local calendar
function addEvent() {
var item ='a#'+ $(this).attr('id')+' div.fc-eventlist-desc';
var startDate = new Date(2016,3,23,0,0,0,0,0);
  var endDate = new Date(2016,3,25,0,0,0,0,0);
    var r = confirm("Add this event to your personal calendar?");
    if (r == true) {
        //window.plugins.calendar.createEvent('title','eventLocation','notes',startDate,endDate,'success','error');
	//console.log(item);
    } else {
        alert("You pressed Cancel!");
    }

}
//end of additionals to lcal


function takePhoto(){
  source = navigator.camera.PictureSourceType.CAMERA;
  navigator.camera.getPicture(
  function(imgData) {
    $('#idPicItem').innnerHTML='<img id="idPic">';
    $('#idPic', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
    localStorage.setItem('idPic', imgData);
    }, 
  function(message) {
    alert('Failed because: ' + message);
    }, { quality: 50, 
    allowEdit: false, saveToPhotoAlbum: true,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: source});
}
function getPhoto(){
  source = navigator.camera.PictureSourceType.PHOTOLIBRARY;
  navigator.camera.getPicture(
  function(imgData) {
    $('#idPicItem').innnerHTML='<img id="idPic">';
    $('#idPic', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
    localStorage.setItem('idPic', imgData);
  }, 
  function(message) {
    alert('Failed because: ' + message);
    }, { quality: 50, 
    allowEdit: false, saveToPhotoAlbum: true,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: source});
}

var counter = 0;

function checkEvents() {
    if (counter == 6) {
        $('#calendar').addClass('hide');
        $('#calendar').removeClass('show');
        $('#noCal').addClass('show');
        $('#noCal').removeClass('hide');
    }else {
        $('#calendar').addClass('show');
        $('#calendar').removeClass('hide');
        $('#noCal').addClass('hide');
        $('#noCal').removeClass('show');
    }
}

function addCount() {
    counter++;
    checkEvents();
}
function removeCount() {
    counter--;
    checkEvents();
}
$(".eventsources").on('click', '.warrior_athletics_add', function () {
    $('.warrior-athletic-event').css("display", "none");
    $('.warrior_athletics_add').addClass("warrior_athletics_hidden");
    $('.warrior_athletics_add').removeClass("warrior_athletics_add");
    addCount();
});
$(".eventsources").on('click', '.warrior_athletics_hidden', function () {
    $('.warrior-athletic-event').css("display", "");
    $('.warrior_athletics_hidden').addClass("warrior_athletics_add");
    $('.warrior_athletics_hidden').removeClass("warrior_athletics_hidden");
    removeCount();
});
$(".eventsources").on('click', '.resident_life_add', function () {
    $('.resident-life-event').css("display", "none");
    $('.resident_life_add').addClass("resident_life_hidden");
    $('.resident_life_add').removeClass("resident_life_add");
    addCount();
});
$(".eventsources").on('click', '.resident_life_hidden', function () {
    $('.resident-life-event').css("display", "");
    $('.resident_life_hidden').addClass("resident_life_add");
    $('.resident_life_hidden').removeClass("resident_life_hidden");
    removeCount();
});
$(".eventsources").on('click', '.entertainment_add', function () {
    $('.entertainment-event').css("display", "none");
    $('.entertainment_add').addClass("entertainment_hidden");
    $('.entertainment_add').removeClass("entertainment_add");
    addCount();
});
$(".eventsources").on('click', '.entertainment_hidden', function () {
    $('.entertainment-event').css("display", "");
    $('.entertainment_hidden').addClass("entertainment_add");
    $('.entertainment_hidden').removeClass("entertainment_hidden");
    removeCount();
});
$(".eventsources").on('click', '.student_activites_add', function () {
    $('.student-activity-event').css("display", "none");
    $('.student_activites_add').addClass("student_activites_hidden");
    $('.student_activites_add').removeClass("student_activites_add");
    addCount();
});
$(".eventsources").on('click', '.student_activites_hidden', function () {
    $('.student-activity-event').css("display", "");
    $('.student_activites_hidden').addClass("student_activites_add");
    $('.student_activites_hidden').removeClass("student_activites_hidden");
    removeCount();
});
$(".eventsources").on('click', '.academics_add', function () {
    $('.academic-event').css("display", "none");
    $('.academics_add').addClass("academics_hidden");
    $('.academics_add').removeClass("academics_add");
    addCount();
});
$(".eventsources").on('click', '.academics_hidden', function () {
    $('.academic-event').css("display", "");
    $('.academics_hidden').addClass("academics_add");
    $('.academics_hidden').removeClass("academics_hidden");
    removeCount();
});
$(".eventsources").on('click', '.campus_rec_add', function () {
    $('.campus-rec-event').css("display", "none");
    $('.campus_rec_add').addClass("campus_rec_hidden");
    $('.campus_rec_add').removeClass("campus_rec_add");
    addCount();
});
$(".eventsources").on('click', '.campus_rec_hidden', function () {
    $('.campus-rec-event').css("display", "");
    $('.campus_rec_hidden').addClass("campus_rec_add");
    $('.campus_rec_hidden').removeClass("campus_rec_hidden");
    removeCount();
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

$(document).on('click', function(event) {
    var target = $(event.target);
    if(target.is("#filter-icon") || target.is(".fa-chevron-circle-down") || target.is(".filter li") || target.is(".filter p")){
        $(".eventsources ul").css("display", "block");
    } else {
        $(".eventsources ul").css("display", "none");
    }
});

var menu = $(".menu");
$(document).on('click', function(event) {
    var target = $(event.target);
    if(target.is('#menu-icon') || target.is('.fa-bars') || target.is(menu)){
        menu.animate({left: '0'});
    } else {
        menu.animate({left: '-50%'});
    }
});


$("[data-role=header]").toolbar({ tapToggle: false });

function campusM() {
    $("#twitter").addClass("hide");
    $("#twitter").removeClass("show");
    $("#campusM").addClass("show");
    $("#campusM").removeClass("hide");
    $("#front").addClass("hide");
    $("#front").removeClass("show");
    $('#noCal').addClass('hide');
    $('#noCal').removeClass('show');
    $("#calendar").addClass("hide");
    $("#calendar").removeClass("show");
    $("#emergency").addClass("hide");
    $("#emergency").removeClass("show");
    $("#resource").addClass("hide");
    $("#resource").removeClass("show");
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
}

function front() {
    $("#twitter").addClass("show");
    $("#twitter").removeClass("hide");
    $("#front").addClass("show");
    $("#front").removeClass("hide");
    $('#noCal').addClass('hide');
    $("#campusM").addClass("hide");
    $("#campusM").removeClass("show");
    $('#noCal').removeClass('show');
    $("#calendar").addClass("hide");
    $("#calendar").removeClass("show");
    $("#emergency").addClass("hide");
    $("#emergency").removeClass("show");
    $("#resource").addClass("hide");
    $("#resource").removeClass("show");
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');  
 }

function AllEvents() {
    $("#twitter").addClass("hide");
    $("#twitter").removeClass("show");
    $("#front").addClass("hide");
    $("#front").removeClass("show");
    $("#campusM").addClass("hide");
    $("#campusM").removeClass("show");
    checkEvents();
    $('#calendar').fullCalendar('render');
    $("#emergency").addClass("hide");
    $("#emergency").removeClass("show");
    $("#resource").addClass("hide");
    $("#resource").removeClass("show");
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("show");
    $(".eventsources").removeClass("hide");
    $("#filter-icon").css('display', 'block');
}
function Resources() {
    $("#twitter").addClass("hide");
    $("#twitter").removeClass("show");
    $("#campusM").addClass("hide");
    $("#campusM").removeClass("show");
    $("#front").addClass("hide");
    $("#front").removeClass("show");
    $('#noCal').addClass('hide');
    $('#noCal').removeClass('show');
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
    $("#filter-icon").css('display', 'none');
}
function Emergency() {
    $("#twitter").addClass("hide");
    $("#twitter").removeClass("show");
    $("#campusM").addClass("hide");
    $("#campusM").removeClass("show");
    $("#front").addClass("hide");
    $("#front").removeClass("show");
    $('#noCal').addClass('hide');
    $('#noCal').removeClass('show');
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
    $("#filter-icon").css('display', 'none');
}

!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");

$(window).on("orientationchange", function () {
    if (window.orientation == 0)
    {
        $(".tower").attr("src","images/frontpage.jpg");
    }
    else
    {
        $(".tower").attr("src", "images/frontpage2.jpg");
    }
});

$(window).on("pagebeforechange", function () {
    if (window.orientation == 0) {
        $(".tower").attr("src", "images/frontpage.jpg");
    }
    else {
        $(".tower").attr("src", "images/frontpage2.jpg");
    }
});
