//functions arguments

function square (num) {
    console.log(num * num);
}
// Example function pass in a value
square(10); //prints 100 //it will num times num


//functions can have a many arguments as needed
function area(length, width) {
    console.log(length * width);
}
area(9,2); //18

//Mutiple arguments
function greet (person1, person2, person3) {
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);
}

greet ("Harry", "Ron", "Hermione");


//this function capitalizes the first char in a string:
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);
//we can capture the returned value in a variable

//the return keyword stops execution of a function
function capitalize(str) {
    if(typeof str === "number") {
        return "that's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

var num = 37;
var capital = capitalize(num); //That's not a string


// function declaration
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// funtion expression
var capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function problem set
// even number if even is true else return false
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } 
    else {
        return false;
    }
}

// shorter code from above
function isEven(num) {
    return num % 2 === 0;
}

function factorial(num){
    // define a result variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    // return the result variable
    return result;
}

function kebabToSnake(str) {
    // replace all '-' with "_"'s
    var newStr = str.replace(/-/g , "_");
    // return str
    return newStr;
}


