    var theTemplateScript = $("#console").html(); 
​
   //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript); 
    $(".shoesNav").append (theTemplate(shoesData)); 
