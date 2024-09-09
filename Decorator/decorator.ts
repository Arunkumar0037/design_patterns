// Step 1: Component interface
interface Coffee {
    cost(): number;
    getDescription(): string;
}

// Step 2: Concrete Component
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5; // Base cost of a simple coffee
    }

    getDescription(): string {
        return 'Simple coffee'; // Description of a simple coffee
    }
}

// Step 3: Decorator abstract class or interface
abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    cost(): number {
        return this.decoratedCoffee.cost();
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }
}

// Step 4: Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.decoratedCoffee.cost() + 2; // Additional cost for milk
    }

    getDescription(): string {
        return `${this.decoratedCoffee.getDescription()}, with milk`;
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.decoratedCoffee.cost() + 1; // Additional cost for sugar
    }

    getDescription(): string {
        return `${this.decoratedCoffee.getDescription()}, with sugar`;
    }
}

class SyrupDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.decoratedCoffee.cost() + 3; // Additional cost for syrup
    }

    getDescription(): string {
        return `${this.decoratedCoffee.getDescription()}, with syrup`;
    }
}

// Step 5: Using the Decorator Pattern
let coffee: Coffee = new SimpleCoffee(); // Create a simple coffee
console.log(coffee.getDescription(), 'costs $' + coffee.cost()); // Output: Simple coffee costs $5

coffee = new MilkDecorator(coffee); // Wrap with MilkDecorator
console.log(coffee.getDescription(), 'costs $' + coffee.cost()); // Output: Simple coffee, with milk costs $7

coffee = new SugarDecorator(coffee); // Wrap with SugarDecorator
console.log(coffee.getDescription(), 'costs $' + coffee.cost()); // Output: Simple coffee, with milk, with sugar costs $8

coffee = new SyrupDecorator(coffee); // Wrap with SyrupDecorator
console.log(coffee.getDescription(), 'costs $' + coffee.cost()); // Output: Simple coffee, with milk, with sugar, with syrup costs $11
