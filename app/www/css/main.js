//global variables for calendar event add ~MK 04/20/2016
var xCalAlDyE;
var xCalEvntStr;
var xCalEvtLctn;
var xEventDesc;
var xEvntTitle;

var xHashID = 0;

$(document).ready(function() {

$("#calendar").on('click', 'a', function() {
    //ensures only one description is visible at any given time. Also helps with the calendar event local storage. 4/20/2016 ~MK 
    var currentHash = $(this).attr('id');
    if(xHashID == 0){
        xHashID = $(this).attr('id');
    }
    if (currentHash != xHashID){
        var xCloseOldDesc = 'a#' + xHashID + ' div.fc-event-time table';
        $(xCloseOldDesc).css("display","none");
        xHashID = currentHash; 
    }
    
    var item ='a#'+ $(this).attr('id')+' div.fc-event-time table';
    
    //used to grab the event title name.
    var item1 = 'a#'+ $(this).attr('id')+' div.fc-eventlist-title'; 
    
    //renders table visible or not. 
	if ($(item).css('display')=='none'){
	    $(item).css("display","");
        
        //store globals for calendar event add 
        xCalAlDyE = $(item + ' span.fc-event-all-day').text();
        xCalEvntStr = $(item + ' span.fc-event-start-time').text();
        xCalEvtLctn = $(item + ' div.fc-eventlist-location').text();
        xEventDesc = $(item + ' div.fc-eventlist-desc').text();
	    xEvntTitle = $(item1).text();
        //console.log(xEvntTitle);
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

//for event additions to local calendar ~MK 
function addEvent() {
    var cal = window.plugins.calendar;
    var title = xEvntTitle;
    var loc = xCalEvtLctn;
    var notes = xEventDesc;
    var success = function(message) {alert("Success adding event:\n" + title /* + JSON.stringify(message)*/)};
    var error   = function(message) {alert("Error there was a problem adding the event " + title + "." /*+ message*/)};
    //console.log(res[0]);       
    var r = confirm("Add this event to your personal calendar?\n" + title + "\n " + xEventDesc);
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
                
                    //console.log(res[0]);//title
                    //console.log(res[1]);//==disDate from agendaList
                    //console.log(res[2]);//startDate
                    //console.log(res[3]);//endDate
                    var startEnd = new Date(res[1]);
                    //console.log(startEnd);
                    
                    //store the event to local calendar
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
                    //console.log('made it');
                    //console.log(res[0]);//title
                    //console.log(res[1]);//==disDate from agendaList
                    //console.log(res[2]);//startDate
                    //console.log(res[3]);//endDate
                    var startTimeEvent = res[1]+ " " + res[2];
                    var endTimeEvent = res[1] + " " + res[3];
                    var startOfEvent = new Date(startTimeEvent);
                    var endTimeofEvent = new Date(endTimeEvent);
                    
                    //store the event to local calendar
                    cal.createEvent(title,loc,notes,startOfEvent,endTimeofEvent,success,error);
                        }
                        
                    }
        }
    } else {
        alert("The action was cancelled.");
    }

}
//end of additionals to lcal event add feature ~MK 4/20/2016

// Keep in mind that you must add your own images to native resource.
// Images below are for sample only. They are not imported by this plugin.
function doOpen(url){
  cordova.ThemeableBrowser.open(url, '_blank', {
    statusbar: {
      color: '#ffffffff'
    },
    toolbar: {
      height: 44,
      color: '#f0f0f0ff'
    },
    title: {
      color: '#003264ff',
      showPageTitle: true
    },
    backButton: {
      image: 'back',
      imagePressed: 'back_pressed',
      align: 'left',
      event: 'backPressed'
    },
    forwardButton: {
      image: 'forward',
      imagePressed: 'forward_pressed',
      align: 'left',
      event: 'forwardPressed'
    },
    closeButton: {
      image: 'close',
      imagePressed: 'close_pressed',
      align: 'left',
      event: 'closePressed'
    },
    customButtons: [
      {
        image: 'share',
        imagePressed: 'share_pressed',
        align: 'right',
        event: 'sharePressed'
      }
    ],
    menu: {
      image: 'menu',
      imagePressed: 'menu_pressed',
      title: 'Test',
      cancel: 'Cancel',
      align: 'right',
      items: [
        {
          event: 'helloPressed',
          label: 'Hello World!'
        },
        {
          event: 'testPressed',
          label: 'Test!'
        }
      ]
    },
    backButtonCanClose: true
  }).addEventListener('backPressed', function(e) {
    alert('back pressed');
  }).addEventListener('helloPressed', function(e) {
    alert('hello pressed');
  }).addEventListener('sharePressed', function(e) {
    alert(e.url);
  }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
  }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
  });
}

//end of themeablebrowser js

function takePhoto(){
  source = navigator.camera.PictureSourceType.CAMERA;
  navigator.camera.getPicture(
  function(imageURI) {
    $('#profile-pic').attr('src', imageURI);
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
    window.localStorage.setItem("picPath", imageURI);
  }, 
  function(message) {
    alert('Failed because: ' + message);
    }, { quality: 50, 
    allowEdit: true, saveToPhotoAlbum: true,
    destinationType: Camera.DestinationType.FILE_URI,
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
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
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
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
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
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
}


function Wallet(){
    $("#Wallet").addClass('show');
    $('#Wallet').removeClass('hide');
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
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
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'block');
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
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
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
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
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
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
}


function LCSC() {
    $("#LCSC").addClass("show");
    $('#LCSC').removeClass("hide");
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#warriorCard").addClass("hide");
    $("#warriorCard").removeClass("show");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
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
    $("#filter-icon2").css('display', 'none');
    $("#QR-filter").css('display', 'none');
}

function warriorCard() {
    $("#lcmail").addClass("hide");
    $("#lcmail").removeClass("show");
    $("#WWeb").addClass('hide');
    $('#WWeb').removeClass('show');
    $("#bbForm").addClass("hide");
    $("#bbForm").removeClass("show");
    $("#warriorCard").addClass("show");
    $("#warriorCard").removeClass("hide");
    $("#Wallet").addClass("hide");
    $("#Wallet").removeClass("show");
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
    $("#QR-filter").css('display', 'none');
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

$(document).ready(function () {
	twttr.widgets.load()
});

window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs"));

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

function openWallet() {
var ref = window.open('https://www.google.com/', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({code: "document.getElementById('user_id').value = a;document.getElementById('password').value = window.localStorage.getItem('pass');"});
});
}

function openMap() {
var ref = window.open('http://lcsc.college-tour.com/map.php', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({code: "document.getElementById('user_id').value = a;document.getElementById('password').value = window.localStorage.getItem('pass');"});
});
}


function scan()
        {
            cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(!result.cancelled)
                        {
                            if(result.format == "QR_CODE")
                            {
                                navigator.notification.prompt("Please enter name of data",  function(input){
                                    var name = input.input1;
                                    var value = result.text;
                                    var data = localStorage.getItem("LocalData");
                                    console.log(data);
                                    data = JSON.parse(data);
                                    data[data.length] = [name, value];
                                    localStorage.setItem("LocalData", JSON.stringify(data));
                                    alert("Done");
                                });
                            }
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
               );
            }
            $(document).on("pagebeforeshow", "#display", function() {
                $("table#allTable tbody").empty();
                var data = localStorage.getItem("LocalData");
                console.log(data);
                data = JSON.parse(data);
                var html = "";
                for(var count = 0; count < data.length; count++)
                {
                    html = html + "<tr><td>" + data[count][0] + "</td><td><a href='javascript:openURL(\"" + data[count][1] + "\")'>" + data[count][1] + "</a></td></tr>";
                }
                $("table#allTable tbody").append(html).closest("table#allTable").table("refresh").trigger("create");
            });
            function openURL(url)
            {
                window.open(url, '_blank', 'location=yes');
            }
            //initialize
            if(localStorage.getItem("LocalData") == null)
            {
                var data = [];
                data = JSON.stringify(data);
                localStorage.setItem("LocalData", data);
            }

