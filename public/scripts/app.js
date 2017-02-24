/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//


function createTweetElement(tweet) {
  console.log(tweet)
 let html = `
 <article class="posted-tweet">
          <header>
            <img class="profile" src="${tweet.user.avatars.small}">
            <h3 class="name">${tweet.user.name}</h3>
            <h5 class="handle">${tweet.user.handle}</h5>
          </header>
          <div class="tweet-text">
            <p>${escape(tweet.content.text)}</p>
          </div>
          <footer class="time">
          <div id="little-images">
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
            <p>${(new Date (tweet.created_at)).toDateString()}</p>
          </footer>
        </article>`
        ;

  return html;
}
// console.log("THIS IS::" + tweet);

function renderTweets(tweets) {
  $(".tweet-holder").empty();
  for(var tweet of tweets){
    $(".tweet-holder").prepend(createTweetElement(tweet));

  }
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

function loadTweets(){
  $.ajax({
    method: 'GET',
    url: '/tweets'
  })
  .then(renderTweets);

};

$(document).ready(function($){
  //createTweetElement(tweetData);
  // var $tweet = createTweetElement(tweetData);
  // renderTweets(tweetData);
  // loadTweets();

  $( "form" ).on('submit', function( event ) {
        event.preventDefault();
        if(!$(this).find('textarea').val()){
          alert("At least type something first, stupid!!");
        }else{
        //var tweetText = text.serialize();
        $.ajax({
          method: 'POST',
            url: '/tweets',
            data: $('form').serialize(),
        }).then(() =>{
          //console.log("THIS SHOULD WORK.");
          loadTweets();
          $('textarea').val('');
          $('.counter').text(140);
        });
      }
    });

    $("#compose-button").click(function(){
      $('.new-tweet').slideToggle("slow");
      $('#hi').focus();
    });


  loadTweets();

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
//$('.tweet-holder').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});






function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
