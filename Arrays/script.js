let arr =  [1, 2, 3, 4, 5]

console.log(arr);
console.log(arr.length);

arr[0] = 545;
console.log(arr[0]);
console.log(arr);

console.log(typeof(arr));

console.log(arr.toString());// toString() method converts array to string
console.log(arr.join(" and "));// join() method converts array to string with specified separator

console.log(arr.pop());// pop() method removes last element from array and returns it

console.log(arr.push("abc"));// push() method adds element to the end of array and returns new length of array

console.log(arr.shift());// shift() method removes first element from array and returns it

console.log(arr.unshift("xyz"));// unshift() method adds element to the beginning of array and returns new length of array

console.log(delete arr[5]);// delete operator removes element from array at specified index and returns true if element was removed, otherwise returns fals
console.log(arr);

console.log(arr[5]);

let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num.slice(2, 5)); // returns array from index 2 to 4

console.log(num.splice(2)); // returns array from index 2 to end of array and removes elements from array at specified index

console.log(num);

num.splice(0,1,222, 333, 444);// splice() method adds elements to array at specified index and removes elements from array at specified index
console.log(num);

// Loops in arrays

let a = [1, 22, 333, 444, "hjgs"];

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}

a.forEach((value, i, arr)=>{// forEach() method calls function for each element in array
    console.log(value, i, arr);
})

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        
        console.log(element);
        console.log(key, element);
    }
}

for (const value of a) {
    console.log(value)
}
