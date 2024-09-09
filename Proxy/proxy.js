var RealProduct = /** @class */ (function () {
    function RealProduct(id, name) {
        this.id = id;
        this.name = name;
        this.details = this.loadDetailsFromDatabase();
    }
    RealProduct.prototype.loadDetailsFromDatabase = function () {
        console.log("Loading details for product ".concat(this.id, " from database..."));
        // Simulate database access
        return "Details of product ".concat(this.name);
    };
    RealProduct.prototype.getId = function () {
        return this.id;
    };
    RealProduct.prototype.getName = function () {
        return this.name;
    };
    RealProduct.prototype.getDetails = function () {
        return this.details;
    };
    return RealProduct;
}());
var ProductProxy = /** @class */ (function () {
    function ProductProxy(id, name) {
        this.realProduct = null;
        this.id = id;
        this.name = name;
    }
    ProductProxy.prototype.ensureRealProductLoaded = function () {
        if (!this.realProduct) {
            this.realProduct = new RealProduct(this.id, this.name);
        }
    };
    ProductProxy.prototype.getId = function () {
        return this.id;
    };
    ProductProxy.prototype.getName = function () {
        return this.name;
    };
    ProductProxy.prototype.getDetails = function () {
        this.ensureRealProductLoaded();
        return this.realProduct.getDetails();
    };
    return ProductProxy;
}());
var productProxy = new ProductProxy(1, 'Laptop');
// Accessing basic product info without loading details
console.log("Product ID: ".concat(productProxy.getId())); // Output: Product ID: 1
console.log("Product Name: ".concat(productProxy.getName())); // Output: Product Name: Laptop
