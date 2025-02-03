console.log("Hello World");

document.body.childNodes // to get all child nodes of the body element
document.body.childNodes[0] // to get the first child node of the body element
document.body.childNodes[1] // to get the second child node of the body element
document.body.childNodes[2]


document.body.childNodes[2].childNodes // to get all child nodes of the third child node of the body element

let cont = document.body.childNodes[3]

cont.lastElementChild.style.color = 'red';// to change the color of the last element child of the third child node of the body element
cont.lastElementChild.style.backgroundcolor = 'cyan';

document.body.firstElementChild.children[3].nextElementSibling; // to get the next element sibling of the fourth child of the first element child of the body element
