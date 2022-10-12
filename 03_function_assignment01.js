console.log("===============QUESTION:01==================");
var square = function(arg1){
    
    console.log("Square of ",arg1,"=" ,arg1*arg1);
    
}
square(5);
square(6);
square(25);
square(100);
console.log("===============QUESTION:02==============================");
console.log("Type of function is:",typeof square);
console.log("===================QUESTION:03===========================");
var areaOfTriangle = function(arg2,arg3){
    var aot = (1/2)*arg2*arg3;
    console.log("Area of triangle:",aot);
}
areaOfTriangle(45,34);
console.log("===================QUESTION:04===========================");
var areaOfRectangle = function(arg4,arg5){
    var aer = arg4*arg5;
    console.log("Area of rectangle:",aer);
}
areaOfRectangle (499,917);
console.log("===================QUESTION:05===========================");
function swap_values(arg6,arg7){
    console.log("================== before swap====================");
    console.log(arg6,arg7);
    var temp = arg6;
    arg6=arg7;
    arg7=temp;
    console.log("========================after swap====================");
    console.log(arg6,arg7);
}
swap_values("Virat","Anushka");
swap_values("1000","2000");
console.log("===================QUESTION:06===========================");
var given_string="JavaScript the most popular language";
console.log("JavaScript the most popular language");
var count = given_string.length;
console.log("Total character in string is:", count);
console.log("=========================================================");
var char = given_string.indexOf('S');
console.log("index of character S is:",char);
console.log("=========================================================");
var char = given_string.indexOf("lang")
console.log("Index of string lang:",char);
console.log("=========================================================");
var index = given_string.charAt(given_string.length-1);
console.log("Last character of string is:",index);
console.log("=========================================================");
var index = given_string.charAt(36-3);
console.log("Third last character is:",index);





    



