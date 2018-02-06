require("dotenv").config();

//Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

//linked to Twtter and Spotify
var spotify = new Spotify(keys.spotify);

// Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

// What Each Command Should Do
// --------CODE HERE---------
function my-tweets(){
  var client = new Twitter(keys.twitter);
  {screen_name: 'mjatdreams'.count 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++){
      console.log(tweets);
    }
  };
});
};
// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.


// node liri.js spotify-this-song '<song name here>'
// --------CODE HERE---------
var spotify-this-song;
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.


// node liri.js movie-this '<movie name here>'
// --------CODE HERE---------
var movie-this;
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...
var request = require('request');

  // If the request is successful
  // ...
request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Then log the Release Year for the movie
    // ...
    console.log("The movie's rating is: " + JSON.parse(body).year);
  }
});

// This will output the following information to your terminal/bash window:
//
//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


// node liri.js do-what-it-says
// --------CODE HERE---------
// ----inport RANDOM.TXT-----
//Includes the FS package for reading and writing packages
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
