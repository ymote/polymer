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
   

console.log( "input parameters", opts.solution,  opts.answer);
 
 
check(opts.solution, opts.answer, function(error, details){
    
    if(!error)
    {
        assert.fail("The solution is failed, the output array is not match");
        
    }else
    {
        
        console.log("Passed, the solution is passed");
    }
    
})

