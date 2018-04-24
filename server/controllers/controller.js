var mongoose = require('mongoose');
var moment = require('moment');

var ExpenseTable = mongoose.model('expenses');
module.exports = (function() {
	return{

        send_form : function(req,res){
         // console.log(req.body);
          var insert = new ExpenseTable(req.body);
          insert.save(function(err,result){
            console.log("saved to db");
          })
          
        },

        get_expenses: function(req,res){
          ExpenseTable.find({}, function(err,result){
            var array = [];
            //console.log(result);
            for(x in result){
              var momentdate = result[x].date;
          
              momentdate = moment(momentdate).format("MM/DD/YYYY")
              var number = Number.parseInt(x) +1;
              var tax = Number.parseInt(result[x].cost);
              tax = tax*.2
              tax = Math.round(tax * 100)/100;
              
              array.push({number: number, date: momentdate, cost: result[x].cost,tax: tax,  reason: result[x].reason});
            }
            res.json(array);
          })
        },




        




    }
})();