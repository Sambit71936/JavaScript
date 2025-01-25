console.log("Javascript Variables")

var a = 2;
var b = 3;
console.log("c = " + a + b);

var c = "Sambit";

console.log(typeof a, typeof b, typeof c);
// cannot start a variable with a number

const a1=7;

// we can use let and const to declare variables in javascript. let is used for variable that can be changed 

let x = 10;
let y = 20;
console.log(x+y);
console.log(a1+x)

// var is a global scope and let is block scope


let j = "Javascript";
let g = 23;
let z = 3.14;
const h=true;
let r= null;
let n= undefined;

console.log(j,g,z,n,r,h);
console.log(typeof j,typeof g,typeof z,typeof n,typeof r,typeof h);

let o={
    name:"Sambit",
    "college name": "SRM",
    age:19,
}
// o is an object in javascript
console.log(o);
o.rollno=7
console.log(o);
o.age=20;// updating the value of age
console.log(o);
