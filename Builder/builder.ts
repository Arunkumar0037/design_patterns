// class Order {
//     private orderId: string;
//     private customerName: string;
//     private items: string[];
//     private shippingAddress: string;
//     private shippingMethod: string;
//     private paymentMethod: string;

//     constructor(builder: OrderBuilder) {
//         this.orderId = builder.getOrderId();
//         this.customerName = builder.getCustomerName();
//         this.items = builder.getItems();
//         this.shippingAddress = builder.getShippingAddress();
//         this.shippingMethod = builder.getShippingMethod();
//         this.paymentMethod = builder.getPaymentMethod();
//     }

//     public getOrderSummary(): string {
//         return `Order ID: ${this.orderId}\nCustomer: ${this.customerName}\nItems: ${this.items.join(', ')}\nShipping Address: ${this.shippingAddress}\nShipping Method: ${this.shippingMethod}\nPayment Method: ${this.paymentMethod}`;
//     }
// }


// class OrderBuilder {
//     private orderId: string;
//     private customerName: string;
//     private items: string[];
//     private shippingAddress: string;
//     private shippingMethod: string;
//     private paymentMethod: string;

//     constructor() {
//         this.items = [];
//     }

//     public setOrderId(orderId: string): OrderBuilder {
//         this.orderId = orderId;
//         return this;
//     }

//     public getOrderId(): string {
//         return this.orderId;
//     }

//     public setCustomerName(customerName: string): OrderBuilder {
//         this.customerName = customerName;
//         return this;
//     }

//     public getCustomerName(): string {
//         return this.customerName;
//     }

//     public addItem(item: string): OrderBuilder {
//         this.items.push(item);
//         return this;
//     }

//     public getItems(): string[] {
//         return this.items;
//     }

//     public setShippingAddress(shippingAddress: string): OrderBuilder {
//         this.shippingAddress = shippingAddress;
//         return this;
//     }

//     public getShippingAddress(): string {
//         return this.shippingAddress;
//     }

//     public setShippingMethod(shippingMethod: string): OrderBuilder {
//         this.shippingMethod = shippingMethod;
//         return this;
//     }

//     public getShippingMethod(): string {
//         return this.shippingMethod;
//     }

//     public setPaymentMethod(paymentMethod: string): OrderBuilder {
//         this.paymentMethod = paymentMethod;
//         return this;
//     }

//     public getPaymentMethod(): string {
//         return this.paymentMethod;
//     }

//     public build(): Order {
//         return new Order(this);
//     }
// }


// const orderBuilder = new OrderBuilder();
// const order = orderBuilder
//     .setOrderId('12345')
//     .setCustomerName('John Doe')
//     .addItem('Laptop')
//     .addItem('Mouse')
//     .setShippingAddress('123 Main St, Anytown, USA')
//     .setShippingMethod('Express')
//     .setPaymentMethod('Credit Card')
//     .build();

// console.log(order.getOrderSummary());



class Notificaton {
    uniqueId: number;
    eventMethod: string;
    maileId: string;
    request: any;

    constructor(NotificatonBuilder: NotificatonBuilder) {
        this.request = {

            uniqueId: NotificatonBuilder.generateUniqueId(),
            eventMethod:NotificatonBuilder.getEventName(),
            maileId: NotificatonBuilder.getCustomermail()

        }
    }

    public getNotificationContext(){
        return this. request
    }

}

class NotificatonBuilder {
    uniqueId: number;
    eventMethod: string;
    maileId: string;
    constructor() {

    }

    public generateUniqueId() {
        return this.uniqueId = Math.random()
    }

    public setEventName(eventName): void {
        return this.eventMethod = eventName
    }

    public customermail(mailId) {
        return this.maileId = mailId
    }
    public getCustomermail() {
        return this.maileId
    }
    public getEventName() {
        return this.eventMethod
    }

    public build() {
        return new Notificaton(this)
    }
}


let newEventNotification = new NotificatonBuilder()
 
newEventNotification.customermail('arun@gmail.com')
newEventNotification.setEventName('OrderConfirmation')
let notificationBuild = newEventNotification.build()

console.log(notificationBuild.getNotificationContext())