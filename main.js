document.write("16. to compute the sum of the two given integers. If the two values are the same, then return triple their sum."+"<br>");
function test16(a,b){
    if(a==b){
        return 3*(a+b);
    }
    else{
        return a+b;
    }
}
document.write("The numbers are :10,10 "+"<br>")
document.write("ans:"+test16(10,10)+"<br>");
// document.write(test16(10,11)+"<br><br>");