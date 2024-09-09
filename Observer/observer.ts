interface Observer {
    update(product: Product): void;
}

class Product {
    private observers: Observer[] = [];
    private name: string;
    private price: number;
    private stock: number;

    constructor(name: string, price: number, stock: number) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public setStock(stock: number): void {
        this.stock = stock;
        this.notifyObservers();
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getStock(): number {
        return this.stock;
    }
}

class InventorySystem implements Observer {
    public update(product: Product): void {
        console.log(`InventorySystem: Product ${product.getName()} now has ${product.getStock()} items in stock.`);
    }
}

class CustomerNotificationSystem implements Observer {
    public update(product: Product): void {
        console.log(`CustomerNotificationSystem: Notifying customers that ${product.getName()} is now in stock.`);
    }
}


// Create a product
const product = new Product('Laptop', 1200, 10);

// Create observers
const inventorySystem = new InventorySystem();
const customerNotificationSystem = new CustomerNotificationSystem();

// Attach observers to the product
product.addObserver(inventorySystem);
product.addObserver(customerNotificationSystem);

// Change the stock level and notify observers
product.setStock(20);

// Remove an observer and notify again
product.removeObserver(customerNotificationSystem);
product.setStock(5);
