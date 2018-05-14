$(document).ready(function (){

$("#submit1").click(function(){
   
    if($("#answer1").is(":checked")){
     $("#result1").text("You got it right!") ;  
        
    }
    else{
        $("#result1").text("Sorry,try again!"); 
    }
});   
});
$(document).ready(function(){
    $("#interactive1").click(function(){
        
            $("#panel1").slideDown("slow");
            $(this).css("border-bottom","none")
    
    });
     $("#btn1").click(function(){
        
            $("#panel1").css("display","none");
            $("#interactive1").css("border-bottom","4px solid black");
            
    
    });
});