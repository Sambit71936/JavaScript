console.log(document.querySelector(".box"));

console.log(document.querySelector(".box").innerHTML);

console.log(document.querySelector(".container").innerHTML);

console.log(document.querySelector(".box").innerText);

console.log(document.querySelector(".container").outerHTML);

console.log(document.querySelector(".container").tagName);

console.log(document.querySelector(".container").nodeName);

// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "Hello, World!";

console.log(document.querySelector(".style").hasAttribute('style'));

console.log(document.querySelector(".style").getAttribute('style'))

console.log(document.querySelector(".box").setAttribute("style", "display: inline"));

console.log(document.querySelector(".box").attributes);

//document.designMode = 'on';// to edit a website
let div = document.createElement("div");
div.innerHTML = "Hi!"
div.setAttribute("class","created");
document.querySelector(".container").append(div) 

let cont = document.querySelector(".container");
cont.insertAdjacentHTML('afterbegin', "<b> This is insertAdjacentHTML tag")