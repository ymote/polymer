var check = require("../compare-solution")

check("array-solution.js", "array.js", function(error, details){
    
    if(!error)
    {
        console.log("The solution is failed, here is the difference", error, details.diff);
        
    }else
    {
        
        console.log("Congrats, the solution is passed");
    }
    
})

