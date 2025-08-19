/*
    this is builder design pattern demo 
    it solves the problem of remembering order of parameters of the constructor while creating a obuject \
    we can add validations insider the constructor itself 
    how we do that?
    we pass an object as a parameter inside constructor instead of passing parameters for data members  
*/
class Product{
    constructor(builder){
        this.name = builder.name;
        if(builder.price > 0 && typeof(builder.price) == "number"){
            this.price = builder.price;
        }else{
            return {};
        }
        this.category = builder.category;
    }
}
const p = new Product({
    name : "iPhone",
    category : "smartphone",
    price : 50000
});

console.log(p);