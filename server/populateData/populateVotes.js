// VOTE POPULATOR
/*
This code
1) Creates "10 votes per fake users
// for now everyone is in the same zone
To run, uncomment code below and restart server. Once database is updated, comment out code
*/

var db       = require('../config/db');
var Users    = db.Users;
var Votes    = db.Votes;
var Estab    = db.Establishments;
var voteCtrl = require('../controllers/voteController.js');

var createFakeVotes = function (numPerUser) {
  Users.findAll({raw: true}).then(function(users){
    users.forEach(function(user){
      var numberArray = new Array(numPerUser+1).join('1').split('');
      //Find number of establishments in the database
      Estab.max('id').then(function(max) {
        Estab.findById(Math.floor(Math.random()*max+1))
             .then(function (est){
               var vote = {};
               vote.establishmentId = est.id;
               vote.zoneNumber = est.zoneNumber;
               numberArray.forEach(function(){
                 vote.userId = user.id;
                 vote.traitId = Math.floor(Math.random()*9 + 1);
                 vote.voteValue = Boolean(Math.floor(Math.random()*2));
                 vote.time = new Date();
                 Votes.create(vote);
                 voteCtrl.addVoteToHistory(vote.establishmentId, vote.traitId, vote.voteValue);
               }); 
             })
             .catch(function(err) {
               console.error(err);
             });
      })
    });
  });
};

createFakeVotes(20);
