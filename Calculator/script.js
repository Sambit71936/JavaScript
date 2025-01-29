// To Create a faulty calculator
/* It takes two number as input from the user
It performs wrong information
+-->-
- --> /
* --> +
/-->** */

let a = prompt("Enter first value");
let b = prompt("Enter first value");
let c = prompt("What do you want to perform");


if(c=="+"){
    alert(a-b);
}
if(c=="-"){
    alert(a/b);
}
if(c=="*"){
    alert(a+b);
}
if(c=="/"){ 
    alert(a**b);
}