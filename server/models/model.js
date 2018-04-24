var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ExpenseSchema = new mongoose.Schema({
  date: {type: Date},
  cost: {type: Number},
  reason: {type: String}
  
  
});


mongoose.model("expenses", ExpenseSchema);