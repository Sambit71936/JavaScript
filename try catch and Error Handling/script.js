let a = prompt("Enter a number");

let b = prompt("Enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Not Allowed");
}

let sum = parseInt(a) + parseInt(b);

try {
    console.log("The sum is", sum);
} catch (error) {
    console.log("Error Bro")
    // alert(error.name);
    // alert(error.message);
    // alert(error.stack);
}
finally{// interview question
    console.log("Everything is closed");
}