//javascript is object linked to a object programming language
// after creation of an object in js if you change the blueprint of it's class the changes will reflect in object

//prototypes is the mechanism by which an obj can share it's properties with another obj
// to access hidden link we can use obj.__proto__.functionName()  this is known as dunder proto

// call funtion
// it is used to manipulate (control and change) the value of this keyword
// if we doesn't pass any argument in call() then this points to global object
const obj = {
    firstName : "Jack",
    greet : function(){
        console.log("Hello, my name is", this.firstName);
    },
    greet2 : function(welcomeMessage){
        console.log("Hello, my name is", this.firstName, welcomeMessage);
    }
}

const obj1 = {firstName : "Alex"};

obj.greet();
obj.greet.call(obj1);
// In case the function calling expects a parameter then just add it after obj
obj.greet2.call(obj1, "How are you ?");

// apply function
// works exactly like call just it takes two arguments
// first the object you want this to refer to and next an array of arguments the function expects
obj.greet2.apply(obj1, ["How are you ?"]);

// bind()
// used to bind this keyword to an object just like call() but doesn't immediately return the new function unlike call
f = obj.greet2.bind(obj1);
f("hello");

// to do prototype chaining use -> Object.create
// to call parent class constructor from child class use -> super