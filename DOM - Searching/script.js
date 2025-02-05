console.log("Hello World");

let a = document.getElementsByClassName("box");
console.log(a);

a[3].style.backgroundColor = "cyan"

let b = document.getElementById("we");

b.style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelector(".box"));

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "blue";
})

document.getElementsByTagName("div");