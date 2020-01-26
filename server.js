console.log("test");
// Require dependencies
//var express = require("express");
var mongojs = require("mongodb");
// var logger = require("morgan");
// var path = require("path");
// const PORT = process.env.PORT || 3001;


// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/analytics", (error,db) => {
  if(!error) {
    console.log("We are connected");
    db.db("analytics").collection("visits").count({}, (err,res) => {
        if(err) throw err;
        console.log("Number of visits:" +res);
        db.close();
    });
    db.db("analytics").collection("wins").count({}, (err,res) => {
        if(err) throw err;
        console.log("Number of wins:" +res);
        db.close();
    });
} else {
    return console.dir(error);
}
});





// // Initialize express
// var app = express();

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("public"));
//   }
  
//   // Send every request to the React app
//   // Define any API routes before this runs
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./index.html"));
//   });
  
//   app.listen(PORT, function() {
//     console.log(`🌎 ==> API server now on port ${PORT} !`);
//   });


// // // Configure morgan logger for body parsing
// // app.use(logger("dev"));

// // // Parse request body as JSON
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());
// // // Make public a static folder
// // app.use(express.static("public"));

// // var databaseURL = "analytics";
// // var collection = ["scoreboard", "visits"];


// // var db = mongojs(databaseURL, collection);

// // var MongoClient = require('mongodb').MongoClient({useUnifiedTopology: true});

// // // Connect to the db
// // MongoClient.connect("mongodb://localhost:27017/analytics", function (err, db) {
   
// //     if(err) throw err;
// //      console.log("connected to db: "+db);

// //      console.log("connected to db: "+db._eventsCount);
// //      console.log("connected to db: "+db._maxListeners);
// //      console.log("connected to db: "+db._topology);
     
                
// // });

// // // db.collection("wins", function(err, collection) {
// // //     collection.insert({test: 1});
    
// // //     db.collection("wins").count(function(err, count) {
// // //         if (err) throw err;
// // //         console.log("total rows: "+count);
// // //     });
// // //  });



// // db.onerror = function(error) {
// //     console.log("Database Error", error);
// // };

// // // app.post("/visits", function(req, res) {
// // //     var visit = req.body;
// // //     db1.visits.save(visit, function(error, response) {
// // //         if (error) {
// // //             console.log(error);
// // //         } else {
// // //             res.send(response);
// // //         }
// // //     });
// // // });

// // // app.post("/wins", function(req, res) {
// // //     var win = req.body;
// // //     db2.wins.save(win, function(error, response) {
// // //         if (error) {
// // //             console.log(error);
// // //         } else {
// // //             res.send(response);
// // //         }
// // //     });
// // // });