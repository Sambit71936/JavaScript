let a=3;
for(let i=0; i< 10; i++){
    console.log(a+i);
}


let object={
    name:"Sambit",
    role:"programmer",
    age:19
}

for (const key in object) {
        const element = object[key];
        console.log(key,element);
    }


for (const r of "Sambit") {
    console.log(r)
}

let i=5;
while (i<10) {
    console.log(i);
    i++;
}

let b=2;
do {
    console.log(b);
    b++;
} while (b<11);


let c=22;
do {
    console.log(c);
    c++;
} while (c<11);