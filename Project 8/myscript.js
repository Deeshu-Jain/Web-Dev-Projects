var first = prompt("Enter your First Name");
var last = prompt("Enter your Last Name");
var age = prompt("Enter your Age");
var height = prompt("Enter your Height");
var country = prompt("Enter your Country");

if ((first[0]===last[0]) && (age>=20 && age<=30) && (height>=170) && (country==="India"||country=="india")){
    console.log("You are eligible for joining the Army.")
}
else{
    console.log("Sorry, But you are not eligible for joining the Army.")
}