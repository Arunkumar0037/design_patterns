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
var Notificaton = /** @class */ (function () {
    function Notificaton(NotificatonBuilder) {
        this.request = {
            uniqueId: NotificatonBuilder.generateUniqueId(),
            eventMethod: NotificatonBuilder.getEventName(),
            maileId: NotificatonBuilder.getCustomermail()
        };
    }
    Notificaton.prototype.getNotificationContext = function () {
        return this.request;
    };
    return Notificaton;
}());
var NotificatonBuilder = /** @class */ (function () {
    function NotificatonBuilder() {
    }
    NotificatonBuilder.prototype.generateUniqueId = function () {
        return this.uniqueId = Math.random();
    };
    NotificatonBuilder.prototype.setEventName = function (eventName) {
        return this.eventMethod = eventName;
    };
    NotificatonBuilder.prototype.customermail = function (mailId) {
        return this.maileId = mailId;
    };
    NotificatonBuilder.prototype.getCustomermail = function () {
        return this.maileId;
    };
    NotificatonBuilder.prototype.getEventName = function () {
        return this.eventMethod;
    };
    NotificatonBuilder.prototype.build = function () {
        return new Notificaton(this);
    };
    return NotificatonBuilder;
}());
var newEventNotification = new NotificatonBuilder();
newEventNotification.customermail('arun@gmail.com');
newEventNotification.setEventName('OrderConfirmation');
var notificationBuild = newEventNotification.build();
console.log(notificationBuild.getNotificationContext());

//Change 1