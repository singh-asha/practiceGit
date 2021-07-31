var object ={a:1};
var list = ["Mandeep", "Rahul", "Srikant"];
var objCopy = Object.create(object);
//console.log(object)
//console.log(objCopy)//empty 
//console.log(objCopy.a) // it gives o/p 1
objCopy.a = 5
//console.log(objCopy.a)
//delete objCopy.a;
delete object.a;
//console.log(objCopy.a) // it will show value from prototype chain that is 1  if you dont delete actual object and and if you delete actual obje t then it will show 5;

//console.log(object.a)


var rectangle ={
    width:"10"
};
function Ghost(){}
Ghost.prototype  = rectangle;

var square = new Ghost();
square.side = "5";

//console.log("square", square.width)


function Parent(name){
    this.name = name ;
}

Parent.prototype.getName = function() {
    return this.name;
};

function Child(name) {
    Parent.call(this, name);
    this.age = 0;
}

Child.prototype = Object.create(Parent.prototype); // (1)
console.log("Child.prototype" , Child.prototype) // Child.prototype is structured so that _proto_ property points to Parent.prototype
Child.prototype.constructor = Child;
console.log("Child.prototype.constructor", Child.prototype.constructor)
Child.prototype.getAge = function() {
    return this.age;
};
var c = new Child(); // (2) this refer to child.prototype   c → Child.prototype → Parent.prototype,


console.log("c", c)

class Parent1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Child1 extends Parent1 {
    constructor(name, age ) {
        super(name); // Instead of borrowing a constructor, use ...super function. 
        this.age = age;
    }
    // getAge() {
    //     return this.age;
    // }
    // setAge(){

    // }
}

var ch = new Child1()
console.log("ch0", ch)