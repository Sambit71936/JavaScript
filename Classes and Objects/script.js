let obj = {
    a:1,
    b:"Raj",
    c:4135
}

console.log(obj);

let animal = {
    jump : true
}
let tiger = {
    eats : true
};

tiger.__proto__  = animal; // set the prototype of tiger to animal

class Object{
    constructor(name){
        this.name = name;
        console.log("Object is being created");
    }
    func1(){
        console.log("Function 1 is being called");
    }
    func2(){
        console.log("Function 2 is being called");
    }
}

class Object2 extends Object{ // extends the Object class
    constructor(name){
        super(name); // calls the constructor of the parent class
        this.name = name;
        console.log("Object is being created and this is Object 2 ...")
    }
    func1(){
        super.func2();
        console.log("Function 1 is being called second time");
    }
}

let a = new Object("Hi");
console.log(a)

let l = new Object2("Hello");
console.log(l);