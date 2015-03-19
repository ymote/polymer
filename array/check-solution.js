var check = require("../compare-solution")

check("array-solution.js", "array.js", function(error, details){
    
    if(!error)
    {
        console.log("FAIL, The solution is failed, here is the difference", error, details.diff);
        
    }else
    {
        
        console.log("PASS, the solution is passed");
    }
    
})

