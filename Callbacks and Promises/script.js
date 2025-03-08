console.log("a,sfbajsdfvb")
console.log("khgkgerskbnvsbuyer")


setTimeout(() => {
    console.log("Inside the Timeout 1");
}, 4000);

setTimeout(() => {
    console.log("Inside the Timeout 2");
}, 3000);

console.log("End");

const callback = (arg) => {
  console.log(arg);
}


const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hello");
    document.head.append(sc);
}

loadscript("https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js", callback);   