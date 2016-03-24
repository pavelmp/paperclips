var Establishments = require('../config/db').Establishments;
var Votes = require('../config/db').Votes;

var getEstabsInZones = function(userId, zones) {
  // Find all establishmenents in zones, and include last 24 hours of votes for each trait,
  // plus lifetime votes by this user
  return Establishments.findAll({where: {zoneNumber: {$in:zones}}, 
                                 include: [{model: Votes,
                                            required: false, //Votes are not required
                                            where: {$or: [{userId: userId},
                                                          {time: {$gt: new Date()-24*60*60*1000}}]}}]})
};

module.exports = {
  getEstabsInZones: getEstabsInZones
};