var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.observers = [];
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Product.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Product.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    Product.prototype.setStock = function (stock) {
        this.stock = stock;
        this.notifyObservers();
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getStock = function () {
        return this.stock;
    };
    return Product;
}());
var InventorySystem = /** @class */ (function () {
    function InventorySystem() {
    }
    InventorySystem.prototype.update = function (product) {
        console.log("InventorySystem: Product ".concat(product.getName(), " now has ").concat(product.getStock(), " items in stock."));
    };
    return InventorySystem;
}());
var CustomerNotificationSystem = /** @class */ (function () {
    function CustomerNotificationSystem() {
    }
    CustomerNotificationSystem.prototype.update = function (product) {
        console.log("CustomerNotificationSystem: Notifying customers that ".concat(product.getName(), " is now in stock."));
    };
    return CustomerNotificationSystem;
}());
// Create a product
var product = new Product('Laptop', 1200, 10);
// Create observers
var inventorySystem = new InventorySystem();
var customerNotificationSystem = new CustomerNotificationSystem();
// Attach observers to the product
product.addObserver(inventorySystem);
product.addObserver(customerNotificationSystem);
// Change the stock level and notify observers
product.setStock(20);
// Remove an observer and notify again
product.removeObserver(customerNotificationSystem);
product.setStock(5);
