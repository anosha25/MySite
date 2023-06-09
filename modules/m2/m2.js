var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth()+1;
console.log(currentMonth);
var birthYear = prompt("What year were you born?");
var birthMonth = prompt("What month were you born? Pls input as number")
// console.log(birthYear);
// console.log(typeof(birthYear));


var age = currentYear-birthYear;
var age2 = age-1;
var message = "you are "+String(age)+" or "+String(age2);  // explicit coercion - converting between

if(currentMonth > birthMonth){
    console.log("current month is greater, your birthday's passed! You're "+age+" years old.")
}else if (currentMonth < birthMonth) {
    console.log("current month is not greater, your birthday's coming up! You're "+age+" years old.")
}else{
    console.log("your birthday is this month. You are either "+age+" or "+age2+" years old")
}


console.log(message);

console.log("Module 2: Introduction to JS");

// console. log (10*"10"); // implicit coercion:
// console. log (10*Number ("10")); // explicit coercion
// console. log("you are "+String (100))
// console. log (Number ("something like this"));

// console. log (10+Number ("10"));