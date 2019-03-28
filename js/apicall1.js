
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
       
    //    var lname= document.getElementById("lname").value;
       var fname=document.getElementById("fname").value;
       var adrs=document.getElementById("adrs").value;
       var phn=document.getElementById("phn").value;
       var eml = document.getElementById("eml").value;
       

       var selectedFile = document.getElementById("inputFile").files;
                if (selectedFile.length > 0) {
                var fileToLoad = selectedFile[0];
                var fileReader = new FileReader();
                var base64;
                
                fileReader.onload = function(fileLoadedEvent) {
                    base64 = fileLoadedEvent.target.result;
                   
                    
                   
                   console.log(base64);
                   var xhr = new XMLHttpRequest();
                    var params = JSON.stringify({
                    Records:{
                        Firstname: fname,
                        // Lastname: lname,
                        Address: adrs,
                        Phonenumber:phn,
                        file: base64,
                        emailid: eml,
                        uid: "12"
                        }          
             });
                    
                    xhr.open("POST", "https://r6xc0mtt3b.execute-api.us-east-1.amazonaws.com/prod/genese-intern-details", true);

                   
                    xhr.setRequestHeader("Content-type", "application/json");
                    xhr.send(params);
                    xhr.onreadystatechange = function(){
                    // console.log("readystate value "+ xhr.readyState);
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            // a = xhr.responseText;
                            // b = JSON.parse(a);
                            // console.log(b);
                            // alert(b);
                            $('#Loader').hide();
                            sucmes();
                            //myfunction12();
                           }
                        else{
                            alert("unable to send your data. Please check errors.");
                        }
                    }
                };
               return false;
            }
                fileReader.readAsDataURL(fileToLoad); 
                }

              
            }


        
// function myfunction12() {
//   window.location.href = "https://www.google.com";
// };

        