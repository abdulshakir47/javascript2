var countries = ['India','USA','Canada','London']

var states = new Array("Karnataka","Assam","Tamilnadu","Kerala")


// Length in array

console.log(states.length);

// Replacing array items

states[1] = "Punjab";
console.log(states);

// Push the element into the array
countries.push("new")

// Push the element in between the array
countries.unshift("newOne")

console.log(countries);

countries.splice(2,0,"Mango")

console.log(countries);


const users = ["Shakir",20,true,5.6]
// Removing the elements from the arrays
users.pop()
console.log(users);

users.unshift("new value")
console.log(users);


users.shift()
console.log(users);

// It gives index of an array
console.log(users.indexOf(20));


console.log(Array.from("Shakir"));


// Fill and Filters in Arrays
// Fill
var test = [2,4,6,3,5,9,8];

console.log(test.fill("h",3,5));

// Filters in js

const num = [2,5,6,7,8,3,9,10];
const res = num.filter((e)=>(e != 7))
console.log(res);

// slice and splice in an arrays

var users1 = ["shakir","charan","minaz","marzook","rashad","samad"];
console.log(users1.slice(1,4));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,3,"hii","Bye")
console.log(fruits);

fruits.join

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join('-'));