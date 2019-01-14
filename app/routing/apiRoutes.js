module.exports = function(app, data){
    
  app.get("/api/friends", function(req, res){
      return res.json(data);
  });

  app.post("/api/friends", function(req, res){
      var newFriend = req.body;
      
      for(var i = 0; i<newFriend.scores.length; i++){
          var string = newFriend.scores[i];
          var int = parseInt(string);
          newFriend.scores.splice(i,1,int);
      }
      
      data.push(newFriend);
      res.json(newFriend);
  });
}


