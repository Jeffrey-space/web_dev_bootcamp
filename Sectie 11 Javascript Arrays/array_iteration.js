// Use a for loop to iterate over an array

// To loop over an array using a for loop, we need to make us of the array's length property
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Javascript provides an easy built-in way of iterating over an array: ForEach
Array.forEach(someFunction);
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
    // color is a placeholder, call it whatever you want
    console.log(color);
});

// Exercise
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
    if(color % 3 === 0 ) {
        console.log(color);
    }
});

// printReverse
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
printReverse([3,6,2,5]);

// isUniform()
function isUniform(arr){
    var first = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}

// sumArray 
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

// max()
function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// building a own forEach
// examples forEach
var nums = [45, 65, 77, 34];
nums.forEach(function(num){
    console.log(num);
});

myForEach(nums, function(num){
    console.log(num);
});

// The forEach
function myForEach(arr, func){
    // loop trough array
    for(var i = 0; i < arr.length; i++){
    // call func for each item in array
    func();
    } 
}