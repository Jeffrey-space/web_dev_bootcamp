// print all numbers between -10 and 20
alert("HEllo");
console.log("All number -10 and 20");
var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}

// Print all even numbers 10 and 40
console.log("All even numbers");
var counter = 10;

while(counter <= 40){
	console.log(counter);
	counter+=2;
}

// while(counter <= 40){
// 	if(counter % 2 === 0){
// 		console.log(counter);	
// 	}
// 	counter+=1;
// }

// Print odd numbers
console.log("All odd numbers 300 and 333");
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);	
	}
	counter+=1;
}

// print all numbers divisible by 5 and 3 between 5 and 50
console.log("print all numbers divisible by 5 and 3 between 5 and 50");
var counter = 5;

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);	
	}
	counter+=1;
}