

$(document).ready(function() {
    $('#getcs').click(function() {
    $("#process1").show();
 $('.load').fadeIn();
    setTimeout(function(){      
location.href='https://choreo.cloud/wa/v4-remi';
 $("#process1").hide();
 $('.load').fadeOut();        
         }, 2000);
     });    
  });   
