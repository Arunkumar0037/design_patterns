interface Cloneable {
    clone(): this;
}


class Product implements Cloneable {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public clone(): this {
        // Create a new instance of this class and copy the properties
        const clone = Object.create(this.constructor.prototype) as this;
        clone.name = this.name;
        clone.price = this.price;
        return clone;
    }
}


// Create an instance of a product
const originalProduct = new Product('Laptop', 1200);

// Clone the product
const clonedProduct = originalProduct.clone();

// Modify the cloned product
clonedProduct.setName('Smartphone');
clonedProduct.setPrice(800);

console.log(`Original Product: ${originalProduct.getName()}, $${originalProduct.getPrice()}`); // Laptop, $1200
console.log(`Cloned Product: ${clonedProduct.getName()}, $${clonedProduct.getPrice()}`);       // Smartphone, $800
