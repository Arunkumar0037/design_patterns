// // class ShoppingCart {
// //     private static instance: ShoppingCart;
// //     private items: { [productId: string]: number } = {};
// //     // Private constructor to prevent direct instantiation
// //     private constructor() {}
// //     // Static method to get the singleton instance
// //     static getInstance(): ShoppingCart {
// //         if (!ShoppingCart.instance) {
// //             ShoppingCart.instance = new ShoppingCart();
// //         }
// //         return ShoppingCart.instance;
// //     }
// //     // Method to add an item to the cart
// //     addItem(productId: string, quantity: number): void {
// //         if (this.items[productId]) {
// //             this.items[productId] += quantity;
// //         } else {
// //             this.items[productId] = quantity;
// //         }
// //     }
// //     // Method to remove an item from the cart
// //     removeItem(productId: string): void {
// //         delete this.items[productId];
// //     }
// //     // Method to get the items in the cart
// //     getItems(): { [productId: string]: number } {
// //         return this.items;
// //     }
// //     // Method to clear the cart
// //     clearCart(): void {
// //         this.items = {};
// //     }
// // }
// // // Accessing the ShoppingCart singleton instance
// // const cart1 = ShoppingCart.getInstance();
// // cart1.addItem('product-101', 2);
// // cart1.addItem('product-202', 1);
// // const cart2 = ShoppingCart.getInstance();
// // console.log(cart2.getItems()); // Output: { 'product-101': 2, 'product-202': 1 }
// // // Since cart1 and cart2 refer to the same instance, changes are reflected across both
// // cart2.removeItem('product-101');
// // console.log(cart1.getItems()); // Output: { 'product-202': 1 }
// class Configurations {
//     private static instance: Configurations;
//     private config;
// constructor(){
//     this.config  = {
//         dataBaseURL: 'https://localhost/db',
//         PORT:4300,
//         apiKey: '1234'
//     }
//     }
//     static getInstance(): Configurations {
//         if (!Configurations.instance) {
//             Configurations.instance = new Configurations();
//         }
//         return Configurations.instance;
//     }
//     public getApiKey(): any{
//         return this.config.apiKey
//     }
//     public getHost(): any{
//         return this.config.host
//     }
//     public setHost(host:string): any{
//         this.config.host = host
//     }
// }
// let firstConfig = Configurations.getInstance()
// // console.log(firstConfig.getApiKey())
// firstConfig.setHost('firstConfig/host')
// console.log(firstConfig.getHost())
// let secondConfig = Configurations.getInstance()
// secondConfig.setHost('secondConfig/host')
// console.log(secondConfig.getHost())
var Printer = /** @class */ (function () {
    function Printer(imagePrinter) {
        this.printImage = imagePrinter;
    }
    Printer.prototype.print = function () {
        this.printImage.printImage();
    };
    return Printer;
}());
var ImagePrinter = /** @class */ (function () {
    function ImagePrinter() {
    }
    ImagePrinter.prototype.printImage = function () {
        console.log('Image Printed');
    };
    return ImagePrinter;
}());
var imagePrinter = new ImagePrinter();
var newPrinter = new Printer(imagePrinter);
newPrinter.print();
