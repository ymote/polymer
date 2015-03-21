var assert=require('assert');
var check = require("./compare-solution")

var opts = require("nomnom")
   .option('solution', {
      abbr: 's',
      help: 'customer solution'
   })
   .option('answer', {
      abbr: 'a',
      help: 'answer'
   }).parse();
   

var errMsg="The solution is failed, the output array does not match the anwser";
 
check(opts.solution, opts.answer, function(error, details){
    
    if(!error)
    {
        assert.fail(opts.solution, opts.answer, errMsg,'not equal');

    }else
    {
        
        console.log("Passed, the solution is passed");
    }
    
})

