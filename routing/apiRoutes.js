var friends = require("../data/friends.js");
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  console.log(friends);
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
    
      var newfriend = req.body;
      var totalDifference = 0;
     
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
         for (i = 0; i < friends.length; i++) {
          var newTotalDifference = 0;
    
          // Runs through the users finding the difference between users scores and potential matches
          for (x = 0; x < friends[i].scores.length; x++){
            
            newTotalDifference += Math.abs(parseInt(newfriend.scores[x]) - parseInt(friends[i].scores[x]));
          }
          // Checks to see if the users scores are closer to
          if (newTotalDifference < totalDifference) {
            totalDifference = newTotalDifference;
            match = friends[i];
            
          }
          
        }
         friends.push(req.body);
          res.json(true);
    });
}