$(document).ready(function(){
// Select already existing elements
var $app = $('#app');
$app.html('');

// Create new HTML elements
var $title = $('<h1>Twiddler</h1>');
var $updateButton = $('<button class="update-feed">Update Feed</button>');
var $feed = $('<div id=feed></div>')




// Create event handler functions
var alertTitle = function(event) {
    console.log(event);
    alert('The title of this page is: ' + event.target.innerText)
  }

var renderFeed = function() {
    var index = streams.home.length - 1;
    while(index >= 0) {
      var tweet = streams.home[index];

      var $tweetDiv = $('<div class="tweet"></div>');
      $tweetDiv.appendTo($feed);

      var $profilePic = $('<img class="profile-photo" src="assets/img/' + tweet.user + '.png" alt="Picture of ' + tweet.user + '">');
      $profilePic.appendTo($tweetDiv);

      var $username = $('<div class="username">@' + tweet.user + '</div>');
      $username.appendTo($tweetDiv);

      var $tweetMsg = $('<p class="message">' + tweet.message + '</p>');
      $tweetMsg.appendTo($tweetDiv);

      var $timeStamp = $('<div class="timestamp">' + jQuery.timeago(tweet.created_at) + '</div>');
      $timeStamp.appendTo($tweetDiv);

      var $commentButton = $('<i class="icon comment fas fa-comment-dots fa-2x"></i>');
      $commentButton.appendTo($tweetDiv);

      var $retweetButton = $('<i class="icon retweet far fa-paper-plane fa-2x" ></i>');
      $retweetButton.appendTo($tweetDiv);

      var $likeButton = $('<i class="icon like fab fa-gratipay fa-2x" ></i>');
      $likeButton.appendTo($tweetDiv);

      var $shareButton = $('<i class="icon share fas fa-share-alt fa-2x" ></i>');
      $shareButton.appendTo($tweetDiv);

      index -= 1;
    }
    };

var refreshFeed = function() {
  $("#feed").children().remove();
  renderFeed();
}

// Set event listeners (providing appropriate handlers as input)
$title.on("click", alertTitle);
$updateButton.on("click", refreshFeed);

// Append new HTML elements to the DOM
$title.appendTo($app);
$updateButton.appendTo($app);
$feed.appendTo($app);




 renderFeed();
});