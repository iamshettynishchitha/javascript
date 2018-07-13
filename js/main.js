function checkNumber(){
    var num=document.getElementById("num").value;
    if(num%2==0){
        message="Number:"+num+"is even";
    }
    else{
        message="Number:"+num+"is odd";
    }
    document.getElementById("res").innerHTML=message;
}
function bilcalc(){
    var minbill=50;
    var units=document.getElementById("units").value;
    var amount=0;
    var total =0;
    var message;
    if(units>=0 && units<100){
        amount=units*5;
    }else if(units>=100 && units<500){
        amount=units*6;
    }
    else{
        amount=units*10;    }
    total=minbill+amount;
    message="total bil is:"+total;
    document.getElementById("res1").innerHTML=message;
    
}