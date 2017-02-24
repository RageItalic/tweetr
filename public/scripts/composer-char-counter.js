$(document).ready(function($){
  updateCountdown();
  $("textarea").change(updateCountdown);
  $('textarea').keyup(updateCountdown);
});

//instead of doing everything inside the document ready part,
//I did it this way because I found it on stackoverflow and
//it made more sense to me this way becuase the syntax gets to complicated.
//http://stackoverflow.com/questions/2136647/character-countdown-like-on-twitter

function updateCountdown(){
  var remaining = 140 - jQuery("textarea").val().length;
  jQuery(".counter").text(remaining);
  if(remaining < 0){
    jQuery('span').addClass("red-text");
    alert("WHOA! Idk what to do with all these words... try to keep them below 140.");
  }
  else{
    jQuery('span').removeClass("red-text");
  }
}
