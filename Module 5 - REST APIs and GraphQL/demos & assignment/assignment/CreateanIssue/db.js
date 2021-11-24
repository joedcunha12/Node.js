const mongoose = require("mongoose");

var Bugzilla = mongoose.Schema({
                            title: {type:String},
                            description: {type:String},
                            reporteddate: {type: String},
                            reportedtime:{type:String},
                            assignee: {type:String}
                                                        }); 

module.exports = mongoose.model("Bugzilla",Bugzilla);
