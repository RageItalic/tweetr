"use strict";
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweetr";

MongoClient.connect(MONGODB_URI, (err, db) =>{
  if(err){
    console.error(`Failed to connect: ${ MONGODB_URI}`);
    throw err;
  }
  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  // ==> In typical node-callback style, any program
  //     logic that needs to use the connection needs
  //     to be invoked from within here.
  // Getting all the tweets now aka "finding" them.
  //db.collection("tweetss").find({}, (err, results) => {

  //Now, trying to modify the .find() call itself to see if i can get an array without the nested callback.
  //db.collection("tweetss").find().toArray((err, results) =>{
  //error handling:
  //if(err) throw err;
  //console.log("results array: ", results);

  //this should log  "tweetss":
  //console.log("find result: ", result);
  //console.log("type of find result: ", typeof result);

  //iterating through the cursor to get one result at a time:
  //console.log("for each item yielded by the cursor:");
  //results.each((err, item) => console.log(" ", item));

  //instead of doing all of this, put the results into an array. Sometimes, arrays are easier to work with.
  //results.toArray((err, resultsArray) =>{
  //if (err) throw err;

  //console.log("results.toArray: ", resultsArray);
  //});

  //re-wrapping as new getTweets function:
  function getTweets(callback){
    db.collection("tweetss").find().toArray(callback);
  }

  getTweets((err, tweets) =>{
    if (err) throw err;

    console.log("Logginf each tweet:");
    for(let tweet of tweets){
      console.log(tweet);
    }
   // ==> closing inside the callack:
  db.close();
  });
});