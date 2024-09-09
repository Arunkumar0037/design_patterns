interface Order {
    orderId: string;
    orderDate: Date;
    processOrder(): void;
}


class OnlineOrder implements Order {
    orderId: string;
    orderDate: Date;
    customerEmail: string;

    constructor(orderId: string, customerEmail: string) {
        this.orderId = orderId;
        this.orderDate = new Date();
        this.customerEmail = customerEmail;
    }

    processOrder(): void {
        console.log(`Processing online order #${this.orderId} for ${this.customerEmail}`);
        // Additional logic for processing online orders
    }
}

class InStoreOrder implements Order {
    orderId: string;
    orderDate: Date;
    storeLocation: string;

    constructor(orderId: string, storeLocation: string) {
        this.orderId = orderId;
        this.orderDate = new Date();
        this.storeLocation = storeLocation;
    }

    processOrder(): void {
        console.log(`Processing in-store order #${this.orderId} at ${this.storeLocation}`);
        // Additional logic for processing in-store orders
    }
}

class OrderFactory {
    static createOrder(type: string, orderId: string, contactInfo: string): Order {
        if (type === 'online') {
            return new OnlineOrder(orderId, contactInfo);
        } else if (type === 'in-store') {
            return new InStoreOrder(orderId, contactInfo);
        } else {
            throw new Error('Invalid order type');
        }
    }
}

const onlineOrder = OrderFactory.createOrder('online', 'ORD123', 'customer@example.com');
onlineOrder.processOrder(); // Output: Processing online order #ORD123 for customer@example.com

const inStoreOrder = OrderFactory.createOrder('in-store', 'ORD124', 'Main Street Store');
inStoreOrder.processOrder(); // Output: Processing in-store order #ORD124 at Main Street Store
