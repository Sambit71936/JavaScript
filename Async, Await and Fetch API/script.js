// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(x);
    return(455);
}

async function main() {

console.log("Load Data");

let data = await getData();
console.log(data);

// data.then(()=>{
    
    //     console.log("Process Data")
    //     console.log("Process Data")
    //     console.log("Process Data")
    // })
    console.log("Process Data")
} main()