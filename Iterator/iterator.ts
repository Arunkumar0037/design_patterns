interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}


interface Aggregate<T> {
    createIterator(): Iterator<T>;
}


class ProductIterator implements Iterator<Product> {
    private collection: ProductCollection;
    private position: number = 0;

    constructor(collection: ProductCollection) {
        this.collection = collection;
    }

    public next(): Product | null {
        if (this.hasNext()) {
            return this.collection.getItems()[this.position++];
        }
        return null;
    }

    public hasNext(): boolean {
        return this.position < this.collection.getItems().length;
    }
}



class ProductCollection implements Aggregate<Product> {
    private items: Product[] = [];

    public addItem(item: Product): void {
        this.items.push(item);
    }

    public getItems(): Product[] {
        return this.items;
    }

    public createIterator(): Iterator<Product> {
        return new ProductIterator(this);
    }
}




class Product {
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
}


// Create a collection of products
const productCollection = new ProductCollection();
productCollection.addItem(new Product('Laptop', 1200));
productCollection.addItem(new Product('Smartphone', 800));
productCollection.addItem(new Product('Tablet', 400));

// Create an iterator
const iterator = productCollection.createIterator();

// Traverse the collection
while (iterator.hasNext()) {
    const product = iterator.next();
    if (product) {
        console.log(`Product: ${product.getName()}, Price: ${product.getPrice()}`);
    }
}
