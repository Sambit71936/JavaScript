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
