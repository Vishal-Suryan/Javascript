class Product{
    #name;
    #price;
    #description;
    constructor(builder){
        this.#name = builder.name;
        if(builder.price > 0 && typeof(builder.price) == "number"){
            this.#price = builder.price;
        }else{
            return {};
        }
        this.#description = builder.description;
    }
    
    displayProduct(){
        console.log(this.#name, this.#price, this.#description);
    }

    static get Builder(){
        class Builder{
            constructor(){
                // Default values
                this.name = "";
                this.price = 0;
                this.description = "";
            }
            setName(name){
                this.name = name;
                return this;
            }
            setPrice(price){
                this.price = price;
                return this;
            }
            setDescription(description){
                this.description = description;
                return this;
            }
            build(){
                return new Product(this);
            }

        }
        return new Builder();
    }
}
const p = Product.Builder
            .setName("iPhone")
            .setPrice(50000)
            .setDescription("smartphone")
            .build();

p.displayProduct();