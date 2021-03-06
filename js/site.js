//Teel jQuery to give up the dollar sign
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

//js to test username and password
var BackgroundColor="RED"; 
var error = 'error';
var showError = false;
window.currentUser = "";
window.currentPassword = "";

$('#un').on('keyup focus blur', function(){
    window.currentUser = $(this).val();
});

$('#pass').on('keyup focus blur', function(){
    window.currentPassword = $(this).val();
});

 $('#form').on('submit', function(event) {
 	event.preventDefault();
   if (currentUser=="admin" &&  currentPassword=="admin") {
    var newURL = window.location= "class-schedule/index.html";
    $('#form')[0].reset();
    window.location.href = (newURL);

    document.body.style.backgroundColor=BackgroundColor //changing bg color
      }
   else{
      if (!showError) {
         $('#list').append($('<li></li>', { class: error, text : 'Username/password combination not found'}));
         showError=true;
      }
}

});

$('#logout').click(function(event){
alert('You have been succesfully logged out.');
   $('#form')[0].reset();
   window.location = "../index.html";
   event.preventDefault();
});


$('.fall2016').hide();
$('.spring2017').hide();
$('.fall2017').hide();
$( "#back").hide();

$('#f16').click(function(){
  $( ".fall2016").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#s17').click(function(){
  $( ".spring2017").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#f17').click(function(){
  $( ".fall2017").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#back').click(function(){
  $( ".term").show();
  $( "#back").hide();
  $( "table").hide();
});

});
