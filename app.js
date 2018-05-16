/*
var name = "Bipon Biswas";
var age = 28;
var skills = ['java', 'Javascript', 'React'];

var something;
var anything = null;

// Number, String, Boolean, undefined, null, Array, Object, Funuction

console.log(name);
console.log(typeof name);
console.log(typeof age);
console.log(typeof skills);

console.log(something === anything);

console.log(100 === '100');

*/

/*
var age = 20;

if(age > 18){
	console.log('You are eligible');
}else{
	console.log('No');
}
*/

/*
var name = 'Hello BU';
for(var i=0; i<10; i++){
	console.log(name + ' ' + i);
}
*/

/*

var names = [ ];

names[0] = 'Bipon';
names[1] = 'Arif';
names[2] = 'Ashik1';
names[3] = 'Ashik2';
names[4] = 'Ashik3';
names[5] = 'Ashik4';

console.log(names);

for(var i=0; i<names.length; i++){
	console.log('Hello ' + names[i]);
}

console.log(names.indexOf('Simon'))

names.splice(2,1, 'Prince');
console.log(names);

*/

// function

// solution 1
/*
function add(a, b){
	var c = a + b
	return c
}
*/

/*
var add = function(a,b){
	return a+b;
}

var addition = add;

console.log(add(10, 20));
console.log(addition(10, 22));

*/


// var names = ['Bipon', 'Arif', 'Ashik', 'Boss', 'Ashik Boss', 'Siimon']

// way 1
/*
names.forEach(function(name){
	console.log(name);
})

*/

/*
names.forEach(print);

function print(name){
	console.log(name);
}

*/

function operation(a, b, callback){
	var c = a+b;
	var d = a-b;
	
	callback(c, d);
}

function print(c, d){
	console.log(c, d);
}


function multipy(c, d){
	console.log(c*d)
}

/*
operation(10, 5, print);
operation(10, 5, multipy);

*/

/*
operation(10, 5, function(c, d){
	console.log('Divide: ' + (c/d));
});
operation(10, 5, function(c, d){
	console.log('Divide: ' + (c*d));
});

*/



// callback example

/*
var names = ['Bipon', 'Arif', 'Ashik', 'Boss', 'Ashik Boss', 'Siimon'];

function traverse(names, callback){
	for(var i=0; i<names.length; i++){
		callback(names[i]);
	}
}

traverse(names, function(name){
	console.log(name.toUpperCase());
})

*/

/*
var person = {};

person.name = 'Bipon Biswas';
person.age = '28';
person.print = function(){
	console.log(this.name + ' ' + this.age)
}

person.print();

*/


// Object 

/*
var person = {
	name: 'Bipon Biswas', 
	age : 28,
	skills: ['HTML', 'CSS', 'Javascript'],
	print: function(){
		console.log(this.name, this.age, this.skills);
	}
}


//person.name = 'Simon Gomez'
//person.print();


for(var i in person){
	console.log(person[i]);
}
*/


var people = [
	{
		name: 'Bipon Biswas', 
		age : 28,
	},
	{
		name: 'Ashik',
		age: '23'
	}
];

people.forEach(function(person){
	console.log(person.name);
})








