// The target interface that the client expects to use
interface PaymentProcessor {
    processPayment(amount: number): void;
}
// Adaptee 1: Existing interface for PayPal
class PayPal {
    public makePayment(amount: number): void {
        console.log(`Processing payment of $${amount} through PayPal.`);
    }
}

// Adaptee 2: Existing interface for Stripe
class Stripe {
    public sendPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through Stripe.`);
    }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {
    private payPal: PayPal;

    constructor(payPal: PayPal) {
        this.payPal = payPal;
    }

    public processPayment(amount: number): void {
        this.payPal.makePayment(amount);
    }
}

// Adapter for Stripe
class StripeAdapter implements PaymentProcessor {
    private stripe: Stripe;

    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }

    public processPayment(amount: number): void {
        this.stripe.sendPayment(amount);
    }
}

// Client code
function processOrder(paymentProcessor: PaymentProcessor, amount: number) {
    paymentProcessor.processPayment(amount);
}

// Create instances of the adaptees
const payPal = new PayPal();
const stripe = new Stripe();

// Create instances of the adapters
const payPalAdapter = new PayPalAdapter(payPal);
const stripeAdapter = new StripeAdapter(stripe);

// Process payments using the adapters
processOrder(payPalAdapter, 100); // Processing payment of $100 through PayPal.
processOrder(stripeAdapter, 200); // Processing payment of $200 through Stripe.
