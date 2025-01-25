console.log("javaScript Conditions");
let age=12;

if(age>=18){
    console.log("Can drive")
}
else if(age==0){
    console.log("Invalid age")
}
else{
    console.log("cannot drive")
}

// Operators

let a=5;
let b=6;

console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a**b);
console.log(a%b);

a+=4;
console.log(a);

console.log("3"== 3);

console.log("3"=== 3);
// === operator is used to compare equal value and type
// where == operator is only for equal to

console.log(!true);

/*
Multi line
comment  */

// Ternary operator
let x=2,y=3;
let c=(x>y) ? (x-y) : (x+y);
console.log(c);