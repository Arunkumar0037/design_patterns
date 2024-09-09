interface OrderState {
    proceed(order: Order): void;
    cancel(order: Order): void;
}

class PendingState implements OrderState {
    proceed(order: Order): void {
        console.log('Order is being shipped.');
        order.setState(new ShippedState());
    }

    cancel(order: Order): void {
        console.log('Order is canceled.');
        order.setState(new CanceledState());
    }
}

class ShippedState implements OrderState {
    proceed(order: Order): void {
        console.log('Order is delivered.');
        order.setState(new DeliveredState());
    }

    cancel(order: Order): void {
        console.log('Cannot cancel. Order is already shipped.');
    }
}

class DeliveredState implements OrderState {
    proceed(order: Order): void {
        console.log('Order is already delivered.');
    }

    cancel(order: Order): void {
        console.log('Cannot cancel. Order is already delivered.');
    }
}

class CanceledState implements OrderState {
    proceed(order: Order): void {
        console.log('Cannot proceed. Order is canceled.');
    }

    cancel(order: Order): void {
        console.log('Order is already canceled.');
    }
}
class Order {
    private state: OrderState;

    constructor() {
        this.state = new PendingState(); // Initial state
    }

    public setState(state: OrderState): void {
        this.state = state;
    }

    public proceed(): void {
        this.state.proceed(this);
    }

    public cancel(): void {
        this.state.cancel(this);
    }

    public getStateName(): string {
        return this.state.constructor.name;
    }
}

const order = new Order();

console.log(`Current State: ${order.getStateName()}`);
order.proceed(); // Order is being shipped.
console.log(`Current State: ${order.getStateName()}`);
order.proceed(); // Order is delivered.
console.log(`Current State: ${order.getStateName()}`);
order.cancel();  // Cannot cancel. Order is already delivered.


//Change Master 1
//Change Master 2