//global variables for calendar event add ~MK 04/20/2016
var xCalAlDyE;
var xCalEvntStr;
var xCalEvtLctn;
var xEventDesc;
var xEvntTitle;

var xHashID = 0;

$(document).ready(function() {

$("#calendar").on('click', 'a', function() {
    //ensures only one description is visible at any given time. Also helps with the calendar event local storage.
    var currentHash = $(this).attr('id');
    if(xHashID == 0){
        xHashID = $(this).attr('id');
    }
    if (currentHash != xHashID){
        var xCloseOldDesc = 'a#' + xHashID + ' div.fc-event-time table';
        $(xCloseOldDesc).css("display","none");
        //console.log('clicked something new');
        xHashID = currentHash; 
    }
    
    var item ='a#'+ $(this).attr('id')+' div.fc-event-time table';
    var item1 = 'a#'+ $(this).attr('id')+' div.fc-eventlist-title'; 
	if ($(item).css('display')=='none'){
	    $(item).css("display","");
        
        //store globals for calendar event add 
        xCalAlDyE = $(item + ' span.fc-event-all-day').text();
        xCalEvntStr = $(item + ' span.fc-event-start-time').text();
        xCalEvtLctn = $(item + ' div.fc-eventlist-location').text();
        xEventDesc = $(item + ' div.fc-eventlist-desc').text();
	    xEvntTitle = $(item1).text();
        console.log(xEvntTitle);
        //console.log(encodeURIComponent(xEvntTitle));
	}
	else{
	    $(item).css("display","none");
	}
    
 
  
});

FastClick.attach(document.body);

});
var decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};
function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}
//for event additions to local calendar
function addEvent() {
    var cal = window.plugins.calendar;
    var title = xEvntTitle;
    var loc = xCalEvtLctn;
    var notes = xEventDesc;
    var success = function(message) {alert("Success: " + JSON.stringify(message))};
    var error   = function(message) {alert("Error: " + message)};
    //console.log(res[0]);       
    var r = confirm("Add this event to your personal calendar?\n" + xCalAlDyE + "\n " + xEventDesc + "\n" + xCalEvtLctn);
    if (r == true) {
        if(xCalAlDyE == "all-day"){
            for (i=0;i<window.xAllDayStringG.length;i++){
                var xCurrentString = xAllDayStringG[i];
                //console.log(xCurrentString);
                var xDec_CurrentString = decodeEntities(xCurrentString);
                var res = xDec_CurrentString.split("--");
                var xPotential = res[0];
                //console.log(xPotential);
                if(xPotential == xEvntTitle){
                console.log('made it');
                console.log(res[0]);//title
                console.log(res[1]);//==disDate from agendaList
                console.log(res[2]);//startDate
                console.log(res[3]);//endDate
                var startEnd = new Date(res[1]);
                //console.log(startEnd);
                cal.createEvent(title,loc,notes,startEnd,startEnd,success,error);
                }
            }
        }else{
            for(i=0;i<window.xSpecialTimeDay.length;i++){
                var xCurrentString = xSpecialTimeDay[i];
                var xDec_CurrentString = decodeEntities(xCurrentString);
                var res =xDec_CurrentString.split("--");
                var xPotential = res[0];
                if(xPotential == xEvntTitle){
                    console.log('made it');
                    console.log(res[0]);//title
                    console.log(res[1]);//==disDate from agendaList
                    console.log(res[2]);//startDate
                    console.log(res[3]);//endDate
                    var startTimeEvent = res[1]+ " " + res[2];
                    var endTimeEvent = res[1] + " " + res[3];
                    var startOfEvent = new Date(startTimeEvent);
                    var endTimeofEvent = new Date(endTimeEvent);
                    cal.createEvent(title,loc,notes,startOfEvent,endTimeofEvent,success,error);
                        }
                        
                    }
        }
    } else {
        alert("You pressed Cancel!");
    }

}
//end of additionals to lcal


function takePhoto(){
  source = navigator.camera.PictureSourceType.CAMERA;
  navigator.camera.getPicture(
  function(imageURI) {
    $('#profile-pic').attr('src', imageURI);
//    writeToFile('pathProfPic.txt', imageURI);
    window.localStorage.setItem("picPath", imageURI);
    }, 
  function(message) {
    if (message != "Camera cancelled."){
      alert('Failed because: ' + message);
    }
    }, { quality: 50, 
    allowEdit: true, saveToPhotoAlbum: true,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: source});
}
function getPhoto(){
  source = navigator.camera.PictureSourceType.PHOTOLIBRARY;
  navigator.camera.getPicture(
  function(imageURI) {
    $('#profile-pic').attr('src', imageURI);
//    writeToFile('pathProfPic.txt', imageURI);
    window.localStorage.setItem("picPath", imageURI);
  }, 
  function(message) {
    alert('Failed because: ' + message);
    }, { quality: 50, 
    allowEdit: true, saveToPhotoAlbum: true,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: source});
}
//function readFromFile(fileName, cb) {
//	var pathToFile = cordova.file.dataDirectory + fileName;
//	window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
//		fileEntry.file(function (file) {
//			var reader = new FileReader();
//			reader.readAsText(file);
//		}, errorHandler.bind(null, fileName));
//	}, errorHandler.bind(null, fileName));
//}
//function writeToFile(fileName, data) {
//	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
//		directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
//			fileEntry.createWriter(function (fileWriter) {
//				fileWriter.onwriteend = function (e) {
//					// for real-world usage, you might consider passing a success callback
//					console.log('Write of file "' + fileName + '"" completed.');
//				};
//
//				fileWriter.onerror = function (e) {
//					// you could hook this up with our global error handler, or pass in an error callback
//					console.log('Write failed: ' + e.toString());
//				};
//
//				var blob = new Blob([data], { type: 'text/plain' });
//				fileWriter.write(blob);
//			}, errorHandler.bind(null, fileName));
//		}, errorHandler.bind(null, fileName));
//	}, errorHandler.bind(null, fileName));
//}

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
        menu.animate({ left: '0' });
        $("#social-media").css('display', 'block');
    } else {
        menu.animate({ left: '-50%' });
        $("#social-media").css('display', 'none');
    }
});


$("[data-role=header]").toolbar({ tapToggle: false });

function LCmail() {
    $("#lcmail").addClass("show");
    $("#lcmail").removeClass("hide");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}

function campusM() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}

function WW(){
    $("#WWeb").addClass('show');
    $('#WWeb').removeClass('hide');
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}

function BB() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("show");
    $("#bbForm").removeClass("hide");
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}

function front() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}

function AllEvents() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("show");
    $(".eventsources").removeClass("hide");
    $("#filter-icon").css('display', 'block');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}
function Emergency() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#profile").addClass("hide");
    $("#profile").removeClass("show");
    $("#filter-icon2").css('display', 'none');
}

function Profile() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#profile").addClass("show");
    $("#profile").removeClass("hide");
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
    $("#fullCalendar").addClass("hide");
    $("#fullCalendar").removeClass("show");
    $(".eventsources").addClass("hide");
    $(".eventsources").removeClass("show");
    $("#filter-icon").css('display', 'none');
    $("#filter-icon2").css('display', 'block');
    if(window.localStorage.getItem("picPath")){
       $('#profile-pic').attr('src', window.localStorage.getItem('picPath'));
    }
//    try{
//      var imgPath;
//    	readFromFile('pathProfPic.txt', function (data) {
//  		  imgPath = data;
//  	  });
//      $('#profile-pic').attr('src', imgPath);
//    }
//   	catch(all){}
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
    if (window.orientation === 0)
    {
        $(".tower").attr("src","images/frontpage.jpg");
    }
    else
    {
        $(".tower").attr("src", "images/frontpage2.jpg");
    }
});

$(window).on("pagebeforechange", function () {
    if (window.orientation === 0) {
        $(".tower").attr("src", "images/frontpage.jpg");
    }
    else {
        $(".tower").attr("src", "images/frontpage2.jpg");
    }
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

$(document).ready(function (e) {
    $("#user_id").val(window.localStorage.getItem("user"));
    $("#username").val(window.localStorage.getItem("user1"));
    $("#password1").val(window.localStorage.getItem("pass1"));
    $("#password").val(window.localStorage.getItem("pass"));
    $("#Field1").val(window.localStorage.getItem("field"));
});

function saveCred() {
    window.localStorage.setItem("user", $("#user_id").val());
    window.localStorage.setItem("pass", $("#password").val());
    window.localStorage.setItem("field", $("#Field1").val());
    window.localStorage.setItem("pass1", $("#password1").val());
    window.localStorage.setItem("user1", $("#username").val());
}

gapi.hangout.render('placeholder-div1', {
    'render': 'createhangout',
    'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
});

function openBB() {
var ref = window.open('https://lcsc.blackboard.com/', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({code: "document.getElementById('user_id').value = a;document.getElementById('password').value = window.localStorage.getItem('pass');"});
});
}

function openWW(){
var ref = window.open('https://warriorwebss.lcsc.edu/Student/Account/Login?ReturnUrl=%2fStudent%2f', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({code: "document.getElementById('username').value = '';document.getElementById('password').value = '';"});
});
}
