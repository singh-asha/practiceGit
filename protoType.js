// prototype can be used to add method to existing constructor.


//construction function
function Person(){
    this.name = 'John';
    this.age =23;
}
const person1 = new Person();
const person2 = new Person();
console.log(person1);
console.log(Person.prototype);// Person{}
// adding property 
Person.prototype.location = 'Delhi';
console.log(person1.location);
console.log(person2.location)
console.log(Person.prototype) //Person { location: 'Delhi' }

// adding method to constructor function 

Person.prototype.answer = function(){
    console.log("where is " + this.name);
}
person1.answer();
person2.answer();

//changing prototype value 
Person.prototype ={location:'Kolkata '}
const person3 = new Person();
 //const person2 = new Person(); // Identifier 'person2' has already been declared --------------- SyntaxError
console.log("person3",person3.location);
console.log("person2", person2.location)
console.log(person1.__proto__);//Person { location: 'Delhi', answer: [Function] }

//You should not modify the prototypes of standard JavaScript built-in objects like strings, arrays, etc. It is considered a bad practice.
// object with same name cannot be declared;it is more accurate to say that the objects we created have inherited the prototype of Object constructor.
// OBJECT CREATION 
let objectMadeByLiteral ={};
let objectMadeByConstruction = new Object();



//Examples related to inheritance
var a ={
    attr1:"a"
}
var b = {
    __proto__: a,
    attr2:"b"
}
var c ={
    __proto__: b,
    attr3:"c"
}
//b.__proto__ = a;
//console.log("_proto_",b.attr1)
console.log(c.attr1) // first search in c object then _proto_  for b  then b then _proto_ for a  then a get the attribute 

console.log(c.attr0) // attr0 does not exist in a object then looks for _proto_ within object a , moves to the refrence by the _proto_ , moves to Object.prototype, looks for attr0  within Object.prototype-- not found 
// undefined /

// METHOD OVERRIDE
var a = {
    method1: function() { return 'hello Mandeep' }
};
var b = {
    __proto__: a,
    method1: function() { return 'how are you ' }
};
var c = {
    __proto__: b,
    method3: function() { return 'I m fine ' }    
};
console.log(a.method1());
console.log(c.method1());
function doSomething(){}
doSomething.prototype.foo = "bar"; // adding property onto prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value "; // adding property in the object 
console.log("doSomething" , doSomething.prototype);
console.log("doSomeInstancing ", doSomeInstancing) 
console.log("doSome ", doSomeInstancing.foo)
console.log("doSomething22" , doSomething.prototype.prop); // undefined
// const doSomethingFromArrowFunction = () => {};
// doSomethingFromArrowFunction.prototype.foo = "broCode"
// console.log("doSomethingFromArrayFunction", doSomethingFromArrowFunction.prototype );





