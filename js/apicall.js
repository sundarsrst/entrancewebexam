$(document).ready(function() {



        debugger;
var url = window.location.search;
url = url.replace("?",''); 
var i=   url.split("=");
var final=(i[1]);
$("#hiddentext").val(final);


    
    
    
    $.get("https://b4856g8gn9.execute-api.us-east-1.amazonaws.com/prod/ses/carrer-genese-question-collection", function(data,status){
      $("p#question1").text(data[0].question);
      var aaa = data[0].question;
      $("#hiddentext1").val(aaa);
     
});

});

function timerr() {


var seconds = 3600;
      function secondPassed() {
          var hours = Math.round((seconds / 3600));
          var minutes = Math.round((seconds - 30)/60),
            remainingSeconds = seconds % 60;
            if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
              
          }

          document.getElementById('countdown').innerHTML = hours + ":" + minutes + ":" + remainingSeconds;
          if (seconds == 0) {
              clearInterval(countdownTimer);
             
           //document.msform.submit();
            //document.forms["msform"].submit();
           myFunction11();
           return false;
           
          
          } else {
              seconds--;
          }
      }
      var countdownTimer = setInterval('secondPassed()', 1000);
    };

(function() {
                document.getElementById("msform").onsubmit = function() {
                    $('#Loader').show();
                  myFunction11();
                   return false;
                }
            })
            ();
        

           
    function myFunction11() {
       
        
       
       debugger;
       
   
       var github=document.getElementById("githublink").value;
       var uid = document.getElementById("hiddentext").value;
       var question = document.getElementById("hiddentext1").value;

                    
                   
                  // console.log(base64);
                   var xhr = new XMLHttpRequest();
                   
                    var params = JSON.stringify({
                        
                    Records:{
                        
                        github:github,
                        uid:uid,
                        question:question
                        }          
             });
             
                    
                    xhr.open("POST", "https://ioyhu1bim3.execute-api.us-east-1.amazonaws.com/prod/final-recruitment-portal", true);

                   
                    xhr.setRequestHeader("Content-type", "application/json");
                    xhr.send(params);
                    xhr.onreadystatechange = function(){
                    // console.log("readystate value "+ xhr.readyState);
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            $('#Loader').hide();
                            sucmes();
                           }
                        else{
                            alert("unable to send your data. Please check errors.");
                        }
                    }
                };
            };
            
    

           