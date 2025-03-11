console.log("Promises");

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("Not Supported");
    }
    else{
        setTimeout(() => {
            console.log("This is done");
            resolve("hgashjhsvcu")
        }, 4000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("Not Supported");
    }
    else{
        setTimeout(() => {
            console.log("This is done");
            resolve("hgashjhsvcu2")
        }, 4000);
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// let p3 = Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p3 = Promise.any([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// let p3 = Promise.race([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

