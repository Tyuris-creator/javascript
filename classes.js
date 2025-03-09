// class = (es6 feature) provides a more strctured and cleaner way to work 
// with objects compared to traditional constuctor functions.

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product3.displayProduct();