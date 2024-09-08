var togglebtn=document.getElementById("calculate");

togglebtn.addEventListener('click', function(e){
    e.preventDefault();

    var toggleElement=document.getElementById("toggleOnOff");

    if(
        toggleElement.style.display==="none"
    ){
        toggleElement.style.display="block";
    }else{
        toggleElement.style.display="none";
    }
});

var convert=document.getElementById("convert");

convert.addEventListener('click', function(e){
    e.preventDefault();

    var toggleResult=document.getElementById("toggleResult");

    if(
        toggleResult.style.display==="none"
    ){
        toggleResult.style.display="block";
    }else{
        toggleResult.style.display="none";
    }

    function logicAnd(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1!=1 && input2!=1){
        document.getElementById("fetchedInput").textContent=input1;
        document.getElementById("fetchedOutput").textContent=input2

        document.getElementById("result").textContent="0"
        // return "The output is: 0";
       }else if(input1==1 && input2==0){
        // return "The output is: 0"

        document.getElementById("fetchedInput").textContent=input1;
        document.getElementById("fetchedOutput").textContent=input2

        document.getElementById("result").textContent="0"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput").textContent=input1;
        document.getElementById("fetchedOutput").textContent=input2

        document.getElementById("result").textContent="1"
       }
    }

    logicAnd();

    function ORLogic(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1==1 && input2==1){
        document.getElementById("fetchedInput1").textContent=input1;
        document.getElementById("fetchedOutput1").textContent=input2

        document.getElementById("ORresult").textContent="1"
    
       }else if(input1==1 && input2==0){
        // return "The output is: 1"

        document.getElementById("fetchedInput1").textContent=input1;
        document.getElementById("fetchedOutput1").textContent=input2

        document.getElementById("ORresult").textContent="1"

       }else if(input1==0 && input2==1){
        // return "The output is: 1"

        document.getElementById("fetchedInput1").textContent=input1;
        document.getElementById("fetchedOutput1").textContent=input2

        document.getElementById("ORresult").textContent="1"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput1").textContent=input1;
        document.getElementById("fetchedOutput1").textContent=input2

        document.getElementById("ORresult").textContent="0"
       }
    }

    ORLogic();

    function NOTLogic(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1==1){
        document.getElementById("fetchedInput2").textContent=input1;

        document.getElementById("NOTresult").textContent="0"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput2").textContent=input1;
        document.getElementById("NOTresult").textContent="1"
       }
    }

    NOTLogic();

    function NANDLogic(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1==1 && input2==1){
        document.getElementById("fetchedInput3").textContent=input1;
        document.getElementById("fetchedOutput3").textContent=input2

        document.getElementById("NANDresult").textContent="0"
    
       }else if(input1==1 && input2==0){
        // return "The output is: 1"

        document.getElementById("fetchedInput3").textContent=input1;
        document.getElementById("fetchedOutput3").textContent=input2

        document.getElementById("NANDresult").textContent="1"

       }else if(input1==0 && input2==1){
        // return "The output is: 1"

        document.getElementById("fetchedInput3").textContent=input1;
        document.getElementById("fetchedOutput3").textContent=input2

        document.getElementById("NANDresult").textContent="1"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput3").textContent=input1;
        document.getElementById("fetchedOutput3").textContent=input2

        document.getElementById("NANDresult").textContent="1"
       }
    }

    NANDLogic();

    function NORLogic(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1==0 && input2==0){
        document.getElementById("fetchedInput4").textContent=input1;
        document.getElementById("fetchedOutput4").textContent=input2

        document.getElementById("NORresult").textContent="1"
    
       }else if(input1==0 && input2==1){
        // return "The output is: 1"

        document.getElementById("fetchedInput4").textContent=input1;
        document.getElementById("fetchedOutput4").textContent=input2

        document.getElementById("NORresult").textContent="0"

       }else if(input1==1 && input2==0){
        // return "The output is: 1"

        document.getElementById("fetchedInput4").textContent=input1;
        document.getElementById("fetchedOutput4").textContent=input2

        document.getElementById("NORresult").textContent="0"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput4").textContent=input1;
        document.getElementById("fetchedOutput4").textContent=input2

        document.getElementById("NORresult").textContent="0"
       }
    }

    NORLogic();

    function XORLogic(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1==0 && input2==0){
        document.getElementById("fetchedInput5").textContent=input1;
        document.getElementById("fetchedOutput5").textContent=input2

        document.getElementById("XORresult").textContent="0"
    
       }else if(input1==0 && input2==1){
        // return "The output is: 1"

        document.getElementById("fetchedInput5").textContent=input1;
        document.getElementById("fetchedOutput5").textContent=input2

        document.getElementById("XORresult").textContent="1"

       }else if(input1==1 && input2==0){
        // return "The output is: 1"

        document.getElementById("fetchedInput5").textContent=input1;
        document.getElementById("fetchedOutput5").textContent=input2

        document.getElementById("XORresult").textContent="1"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput5").textContent=input1;
        document.getElementById("fetchedOutput5").textContent=input2

        document.getElementById("XORresult").textContent="0"
       }
    }

    XNORLogic();

    function XNORLogic(){

        var input1=document.getElementById("input1").value;

        var input2=document.getElementById("input2").value;

        //covertion 
       if(input1==0 && input2==0){
        document.getElementById("fetchedInput6").textContent=input1;
        document.getElementById("fetchedOutput6").textContent=input2

        document.getElementById("XNORresult").textContent="1"
    
       }else if(input1==0 && input2==1){
        // return "The output is: 1"

        document.getElementById("fetchedInput6").textContent=input1;
        document.getElementById("fetchedOutput6").textContent=input2

        document.getElementById("XNORresult").textContent="0"

       }else if(input1==1 && input2==0){
        // return "The output is: 1"

        document.getElementById("fetchedInput6").textContent=input1;
        document.getElementById("fetchedOutput6").textContent=input2

        document.getElementById("XNORresult").textContent="0"
       }
       else{
        // return "The output is: 1"

        document.getElementById("fetchedInput6").textContent=input1;
        document.getElementById("fetchedOutput6").textContent=input2

        document.getElementById("XNORresult").textContent="1"
       }
    }

    XNORLogic();

    


})