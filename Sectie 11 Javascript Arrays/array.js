// Arrays let us group data together is lists
var friends = ["Carlie", "Liz", "David", "Matthias"];

// We can use those indices to retrieve data
var friends = ["Carlie", "Liz", "David", "Matthias"];

console.log(friends[0]) 

friends[1] + " <3 " + friends[2] //"Liz <3 David"

// We can also update arrays
var friends = ["Carlie", "Liz", "David", "Matthias"];

friends[0] = "Chuck";
friends[1] = "Lizabeth";

// We can also add new data
var friends = ["Carlie", "Liz", "David", "Matthias"];
friends[4] = "Amelie";


// We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommen

// Arrays can hold any type of data
var random_collection = [49, true, "hermione", null];

// Arrays have length property
var nums = [45, 37, 89, 24];
nums.length //4

// 6 different array methods:

// Push and Pop
// Use push to add tot the end of an array
var colors = ["red", "orange", "yellow",];
colors.push("green"); 

// Use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();

// pop() returns the removed element
var col = colors.pop(); //orange


// Shift and Unshift 
// Use unshift to add to the front of an array: 
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared")
// ["infrared, "red", "orange", "yellow"]

// Use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();
// ["orange", "yellow"]

// shift() also returns the removed element
var col = color.shift(); //orange


// Use indexOf() to find the index of an item in an array
var friends = ["charlie", "Liz", "David", "Mattias", "Liz"];

// Returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

// returns -1 if the element is not present. 
friends.indexOf("Hagrid"); //-1


// Use Slice() to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// use slice to copy the 2nd and 3rd fruits
// specify index where the new array starts(1) and end(3)
var citrus = fruits.slice(1, 3); 

// this does not alter the orginal fruits array
// citrus contains ['orange', 'Lemon']
// fruits contains ['banana', 'orange', 'Lemon', 'Apple', 'Mango']

// you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
// both arrays are [1,2,3]




