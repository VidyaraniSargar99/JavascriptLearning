
var great = "Good Morning";

console.log(great);
var count = great,length;
console.log(count);

console.log(great,length);

var sonali = great.charAt(8);
console.log(sonali);

console.log(great.charAt(8));

var char = great.indexOf('0');
console.log(char);

console.log(great.indexOf("bro"));
console.log("======================");
console.log(great.charAt(-2));

var fName = "virat";
var lName = "kohli";
var result = fName.concat(lName);//viratkohli
console.log(result);

console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);



console.log("==============toUpperCase() and toLowerCase()===============");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());

console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);


console.log("==============includes()===============");
var greet = "Good Morning bro and sis";
console.log(greet.includes("bro"));

console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));

console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);

console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var fName = "virat";
var lName = "kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);

var res = "Hey you are doing good keep it up";
var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);




var strightHandson = function(){

}
strightHandson();



































