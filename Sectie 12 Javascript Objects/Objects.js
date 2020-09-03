// Suppose i wanted to model a single person: name, age and city
// I could use an array like this:
var person = ["Cindy", 32, "Missoula"];

// Perfect use for an object | store data in key-value pairs
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

// you have two choices to retrieve data: brackets and dot notation
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

// bracket notation, similar to arrays
console.log(person["name"]);

// dot notation:
console.log(person.name);

// Retrieving Data
// There are a few differences between the 2 notations:

// you cannot use dot notation if the property starts with a number
someObject.lbha //invalid
someObject["lbha"] //valid!

// you can lookup using a variable with bracket notation
var str = "name";
someObject.str //doesnt look for "name"
someObject[str] // does evaluate str and looks for "name"

// you cannot use dot notation for property names with spaces
someObject.favColor //invalid
someObject["fav color"]; //valid!

// Updating Data
// Just like an array: acces a property and reassign it
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

// to update age
person["age"]  += 1;
// to update city
person.city = "London";

// Creating objects
// Like arrays, there are a few methods of initializing objects

// make an empty object and then add to it
var person;
person.name = "Jeff";
person.age = 21;
person.city = "LA";

// all at once
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

// another way initializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";


// Comparing Arrays and Object
// Array
var dogs = ["rusty", "Lucky"];
// retrieve array
dogs[1];

// In an array you need to define where, it needs to be specific
dogs.push("Wyatt")

// Objects (object is like a dictionary with key words and therefore corresponding definition)
var dog = {
    name: "bubba",
    breed: "lab"
}
// retrieve data object
dog["name"]
dog.name

// Changing a value in an object
dog["age"] = 6;

// Nested Objects and Arrays
var posts = [
    {
        title: "Cats are mediocre",
        author: "colt",
        comments: ["Awesome post", "Terrible post"]
    },
    {
        title: "cats are actually awesome",
        author: "cat Luvr",
        comments: ["<3", "Got to hell"]
    }
];

// Acces comments from Objects and Arrays
posts.length //lets you see the items stored in the array

posts[0].title //Acces the first title

posts[1].comments[1] // Acces data second array and getting the second comment





