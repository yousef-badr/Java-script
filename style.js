//1)
var x = prompt('Enter your first name');
var y = prompt('Enter your last name');
console.log(x,y);
var isFullName = confirm("Is your full name " + x + " " + y );
console.log(isFullName);
var birth = Number(prompt("Enter your birth year"));
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var age = currentYear - birth ;
console.log(age);
alert("Welcome"  + " "  + x  + " "  + y  + " " +  "you are"  + " "  + age  + "years old");

// 2)
alert("it’s the first release of a calculator that only has a summation feature.")
var a = Number(prompt("Enter the first number"));
var b = Number(prompt("Enter the second number")); 
var sum = a + b ;
alert("The result =" + sum);