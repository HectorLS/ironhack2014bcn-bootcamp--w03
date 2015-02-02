// Create a variable with your name as a content and print it.

var names = "HectorLeon";

// Create a function, with one argument, to say hello to the name. Use it with your name variable

function sayHello (name_selected) {
	console.log("Hello " + name_selected + "!");
}

sayHello(names);

// Create a loop to show the numbers from 1 to 5.

for (var i = 0; i < 6; i++) {
	console.log(i);
}
// Create an array with some colors

colors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black"];
// Iterate the color array and print the colors in different lines.


colors.forEach(function (color) {
	console.log(color);
	});
// Filter the array to exclude the red color (the array should contain all the previous colors except the red one).
var no_red = colors.filter(function (color) {
	return color !== colors[0];
});

console.log(no_red);
// Transform the array to add "!!" at the end of each color. (The result should be something like: "red!!", "blue!!", "green!!"... )

var adding_exclamation = colors.map(function (color) {
	return color + "!!";
});

console.log(adding_exclamation);
// Create an object with name, surname and age as a properties and create a function to show the person information as "Luis Rovirosa has 32 years".

var person = {
	name: "Nick",
	surname: 'Smit',
	age: 13
};


function showPerson (theperson) {
	console.log(theperson.name + " " + theperson["surname"] + " has " + theperson.age + " years" );
};

showPerson(person);