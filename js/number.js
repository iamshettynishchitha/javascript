function checkprime(){
   num = getUserInput();
    flag = true;
    if(num<2)
        flag = false;
    for( var i = 2; i <= Math.sqrt(num); i++ ){
        if(num % i == 0){
            flag = false;
            break;
        }
        }
    if(flag){
    showResult("Given Number:"+num+" is prime");
}else{
    showResult("Given Number:"+num+" is not prime");
}    
}
function factorial(){
    num = getUserInput();
    var res = 1;
    for(var i = 2; i <= num; i++){
        res *= i;
    }
   showResult("Factorial of:"+num+" is:"+res);    
}
function factors(){
     num = getUserInput();
    var sum = " ";
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            sum += i+ " ";
        }
    }
    
    showResult("Factor of:"+num+" is:"+sum);
}
function fibonacci(){
     num = getUserInput();
    var output =    " ";
    if(num == 1){
        output += "0";
    }else if(num == 2){
        output += "0 1";
    }else{
        var a = 0, b = 1;
         output += "0 1";
    for(var i=3; i <= num;i++)
    {
       c = a + b;
        output += " "+c;
        a = b;
       b =c;
       showResult("Fibonacci series of:"+num+" is:"+output);  
    }    
}
}
function getUserInput(){
   num = document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}