class Product{


    // Data Members
    //to make a data member private use # before it's name
    //if we want to update a private data member we use getter setter methods in which we can write 
    //validation logic 
    // Why make data member private ? -- To ensure encapsulation
    #name;
    #price;
    category;
    description;

    //Constructor
    constructor(productName, productPrice, productCategory, productDescription){
        //This is my Constructor
        this.#name = productName;
        this.#price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
    }

    // Member Functions
    buyProduct(){
        console.log("Buy Product");
    }
    
    DisplayProduct(){
        console.log("Display Product");
    }
    
    addToCart(){
        console.log("Added to Cart");
    }

    // Getter Setter Methods
    set price(p){
        if(p <= 0) return "invalid price";
        this.#price = p;
    }

    get price(){
        return this.#price;
    }

    set name(n){
        if(n.length == 0) return "invalid name";
        this.#name = n;
    }

    get name(){
        return this.#name;
    }
}

// Object Created using "new" Keyword
// Steps "new" Follow -:
//     1. it creates a brand new and absolutely plain Object
//     2. constructor is called and this takes it control and after that all the steps inside
//         constructor is executed
//     3. new triggers everything need to be done for prototypes to work.
//     4. if you return an netirely new object inside constructor then that object is returned 
//         in other cases either we don't return anything and return the value inside this keyword.
let iPhone = new Product("iPhone 15", 150000, "smartphone", "nice phone"); 
console.log(iPhone.name);
iPhone.name = "iPhone 16";
console.log(iPhone.name);

//demonstration of 'this' keyword
let obj = {
    x : 10,
    y : 20,
    fn : function(){
        console.log(this.x, this.y);
    }
}
obj.fn();
/*
here output is 10 20 as "this" keyword refers to the call site and here this is under function which can
be accessed by fn inside obj Object hence obj becomes the call site     */
let obj1 = {
    x : 10,
    y : 20,
    z :{
        x : 99,
        fn : function(){
            console.log(this.x, this.y);
        }
    }
}
obj1.z.fn(); // 99 undefined

// In case of arrow function "this" keyword is resolved based on lexical scoping i.e we keep moving out of scope if this reference is not found(not in current scope - > move one scope out)
let obj2 = {
    x : 10,
    y : 20,
    z : function(){
            const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
}
obj2.z(); // 10 20

const obj3 = {
    x: 10,
    y: 20,
    fn: ()=>{
        console.log(this, this.x, this.y);
    }
}
obj3.fn(); // {} undefined undefined


class Demo{
    static x = 10;
    constructor(n, p){
        this.name = n;
        this.price = p;
    }
}
 let p1 = new Demo("iPhone", 10);
 // here x is a static data membeer and static member are associated with Class and not object
 console.log(p1.x); // undefined
 console.log(Demo.x); // 10












