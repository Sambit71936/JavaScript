async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45);
    }, 1000);
})
}

// IIFE -> Immediately Invoked Function Expression
(async function main(){ 
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})()

// Destructuring
(async function main(){ 
    let [x, y, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(x, y, rest);
})()

// Desstructuring in Object
(async function main() {
    let obj = {
        a:1,
        b:2,
        c:3
    }
    let {a, b}=obj
    console.log(a,b);
})

// Spread Syntax
function sum(a, b, c){
    return a + b + c;
}

(async function main(){
    let numbers = [1, 2, 3, 4, 5, 6];
    let result = sum(...numbers);
    console.log(result);
})