var check = require("compare-solution")

check("array/array-solution.js", "array/array.js", function(error, details){
    
    if(!error)
    {
        console.log("FAIL, cd The solution is failed, here is the difference", error, details.diff);
        
    }else
    {
        
        console.log("passing, the solution is passed");
    }
    
})

