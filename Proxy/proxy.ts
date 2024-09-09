interface Product {
    getId(): number;
    getName(): string;
    getDetails(): string;
}



class RealProduct implements Product {
    private id: number;
    private name: string;
    private details: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.details = this.loadDetailsFromDatabase();
    }

    private loadDetailsFromDatabase(): string {
        console.log(`Loading details for product ${this.id} from database...`);
        // Simulate database access
        return `Details of product ${this.name}`;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDetails(): string {
        return this.details;
    }
}


class ProductProxy implements Product {
    private id: number;
    private name: string;
    private realProduct: RealProduct | null = null;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    private ensureRealProductLoaded(): void {
        if (!this.realProduct) {
            this.realProduct = new RealProduct(this.id, this.name);
        }
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDetails(): string {
        this.ensureRealProductLoaded();
        return this.realProduct!.getDetails();
    }
}


const productProxy = new ProductProxy(1, 'Laptop');

// Accessing basic product info without loading details
console.log(`Product ID: ${productProxy.getId()}`); // Output: Product ID: 1
console.log(`Product Name: ${productProxy.getName()}`); // Output: Product Name: Laptop
