function a(name){
    console.log("Hey " + name + " you are awesome");
    console.log("Hey " + name + " you are good");
}

a("Sambit"); // function call
a("Rahul"); 

function mul(a,b){
    console.log(a*b);
}

mul(2,3)

function sum(a,b,c=4) {//c=4 is a default value
    console.log(a,b,c);
    return a+b+c;
}
result = sum(12,23);
result2 = sum(12,23,34);
console.log("The sum of two numbers is = " + result);
console.log("The sum of two numbers is = " + result2);


const funct =(x)=>{
    console.log("This is an arrow function ",x);
}

funct(10);
funct(12);
funct(32);
