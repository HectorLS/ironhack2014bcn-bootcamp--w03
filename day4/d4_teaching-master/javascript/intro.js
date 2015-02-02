// Create a variable with your name as a content and print it.
var content = 'Adrià'

// Create a function, with one argument, to say hello to the name. Use it with your name variable
function say_hello(name){
	console.log('Hello ' + name + '!!');
}

say_hello(content);

// Create a loop to show the numbers from 1 to 5.
for (i = 0; i < 5; i++) { 
    console.log(i+1);
}

// Create an array with some colors
var colors = [ 'red', 'blue', 'black', 'pink for Hector'];

// Iterate the color array and print the colors in different lines.
colors.forEach(function(color) { console.log(color); });

// Filter the array to exclude the red color (the array should contain all the previous colors except the red one).
var filtered_colors = colors.filter(function(color) { return color !== 'red'; });
filtered_colors.forEach(function(color) { console.log(color); });

// Transform the array to add "!!" at the end of each color. (The result should be something like: "red!!", "blue!!", "green!!"... )
var colors_modif = colors.map(function(color) { return color + '!!'; });
console.log(colors_modif);

// Create an object with name, surname and age as a properties and create a function to show the person information as "Luis Rovirosa has 32 years".
var person = {
	name: 'Gorka',
	surname: 'Cividanes',
	age: 25
};

function show_info(person){
	console.log(person.name + ' ' + person.surname + ' has ' + person.age + ' years');
}

show_info(person);
