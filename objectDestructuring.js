const product = {
    name : "iphone 16",
    price : 50000,
    category : "smartphone"
};
const product1 = {
    name : "iphone 16",
    price : 50000,
    category : {
        name : "smartphone",
        categoryID : 12    
    } 
};
console.log(product);

// object destructuring
//const {name, price, category} = product;
// console.log(price);
// console.log(name);

// to change original name while destructuring 
// const {name : productName, category : productCategory} = product;
//console.log(productName);

//if there is a nested object and you want to retreive that specific nested key-value pair
//const {category :{categoryID}} = product1;
//or
const {category} = product1;
const {categoryID} = category;
console.log(categoryID);


// spread operator three dots followed by object name(...)
// when we want to feed key value pairs of one object in another object then we use spread operator
//if while spreading any conflict occur in a key - value pair then whichever is the last set value that will be set
const purchasedProduct = {
    orderID : "xy123",
    date : "12/12/12",
    ...product
};
console.log(purchasedProduct);

// to give default value while destructuring
// in this code discount value is not present in product object so default value 10 is given otherwise whatever value was in product of discount key that will be given
// const {name , discount = 10} = product;
// console.log(discount);

// Rest parameter - used when we want to pack the key-value pairs or make a new object from an object but with specific key - value pairs 
// three dot symbol (...) it can be used as spread operator or rest parameter
const {name, ...productWithoutName} = product;
console.log(productWithoutName);

// ALL DESTRUCTURING CONCEPT WORK AS SAME FOR ARRAYS AS WELL JUST WE NEED TO USE ' [] ' THESE INSTEAD OF ' {} '
// FOR ARRAYS NAME DON'T MATTER ONLY THE SEQUENCE MATTERS 
const [english, hindi] = [100, 90];
// here english is given value 100 and hindi is given 90