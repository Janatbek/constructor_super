// Constructor and 🦸 super
console.log('starting app js');
// Data Types.
const string = 'some text'; // string literal
const number = 15; // number literal
const myObject = { name: 'Janatbek' }; // object literal
const myArray = [1, 2, 3, 4, 5]; // array literal
const isTruthy = true; // boolean literal.
// console.log(string, number, myObject, myArray, isTruthy);

// literal:   actually, litterally, obvious.
// syntax: formula, examples,
// syntax literal:  self explanatory, obvious.

// Data Types.
// new, this, constructor and super
const stringWithNewKeyword = new String('some text'); // string
const numberWithNewKeyword = new Number(15); // number
const myObjectWithNewKeyword = new Object({ name: 'Janatbek' }); // object
const myArrayWithNewKeyword = new Array(1, 2, 3, 4, 5); // array
const isTruthyWithNewKeyword = new Boolean(true); // boolean.
console.log(
	stringWithNewKeyword,
	numberWithNewKeyword,
	myObjectWithNewKeyword,
	myArrayWithNewKeyword,
	isTruthyWithNewKeyword
);
// Constructor function | Pascal case.
function Car(year, model, color, brand) {
	//     \^
	this.year = year;
	this.model = model;
	this.color = color;
	this.brand = brand;
} // Object instance.
// window is here, it's global.
// Factory function
function car(year, model, color, brand) {
	console.log('this', this);
	console.log(year, model, color, brand);
}

console.log(car(2015, 'avalon', 'white', 'toyota'));
const ford = new Car(2023, 'F150', 'blue', 'Ford'); // give me new instance of you.
const tesla = new Car(2020, 'Model X', 'white', 'Tesle'); // give me new instance of you.
console.log(ford);
console.log(tesla);

function Student(name, lastName, email, github, linkedin) {
	this.name = name;
	this.lastName = lastName;
	this.email = email;
	this.github = github;
	this.linkedin = linkedin;
}
const niveen = new Student(
	'Niveen',
	'Shaaban',
	'nShaaban@facebook.com',
	'http://github',
	'http://linkedin'
);
Student.prototype.sing = function() {
	console.log('sing');
};

const sadirbek = new Student(
	'Sadirbek',
	'Saliev',
	'sSaliev@netflix.com',
	'http://github',
	'http://linkedin'
);

console.log(niveen);
console.log(sadirbek);

/*
What happens is when you use the new keyword on a function, it creates a new instance object of that function instead of whatever has been returned from that function.
*/
// new keyword does three things:
// * creates object
// * points this to the object
// * returns this.
/*
The this keyword in JavaScript refers to the instance of an object that a function is bound to.
*/
