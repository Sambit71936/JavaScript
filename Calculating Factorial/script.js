let a = 7;
let fact = 1;

function Fact(number){ 
    for (let i = 1; i <= number; i++) {
        fact = fact*i;
    }
    console.log(fact);
}

// Another method by usaing array

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b) => a*b)
    console.log(c);
}

Fact(a);
factorial(a);