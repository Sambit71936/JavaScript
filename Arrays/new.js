let arr = [1.12, 13,4];
let new_arr=[];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    new_arr.push(element**3)
}

console.log(new_arr);

// one more method

let a = arr.map((element) =>{// map() method returns a new array with the results of applying the provided function on every element in this
    return element**3;
})
console.log(a);

const Greaterthanseven =(e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(a.filter(Greaterthanseven));

let b=[1,2,3,4,5,6,7,8,9]

const q=(a,b)=>{
    return a*b;
}
console.log(b.reduce(q));// reduce() method executes a user-supplied "reducer" callback function on each element of the array

console.log(Array.from("Sambit"));// Array.from() method creates a new, shallow-copied Array instance from an array-like or iterabl