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
        console.log("FAIL, cd The solution is failed, here is the difference", error, details.diff);
        
    }else
    {
        
        console.log("passing, the solution is passed");
    }
    
})

