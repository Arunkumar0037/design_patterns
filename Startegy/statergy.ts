interface PaymentStrategy {
    pay(amount: number): void;
}


class CreditCardPayment implements PaymentStrategy {
    private cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card ${this.cardNumber}`);
    }
}

class PayPalPayment implements PaymentStrategy {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal account ${this.email}`);
    }
}

class BitcoinPayment implements PaymentStrategy {
    private walletAddress: string;

    constructor(walletAddress: string) {
        this.walletAddress = walletAddress;
    }

    pay(amount: number): void {
        console.log(`Paid ${amount} using Bitcoin wallet ${this.walletAddress}`);
    }
}

class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}


// Create strategies
const creditCardPayment = new CreditCardPayment('1234-5678-9876-5432');
const payPalPayment = new PayPalPayment('user@example.com');
const bitcoinPayment = new BitcoinPayment('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');

// Create a shopping cart and set the payment strategy
const cart = new ShoppingCart(creditCardPayment);
cart.checkout(100); // Paid 100 using Credit Card 1234-5678-9876-5432

// Change the payment strategy to PayPal
cart.setPaymentStrategy(payPalPayment);
cart.checkout(200); // Paid 200 using PayPal account user@example.com

// Change the payment strategy to Bitcoin
cart.setPaymentStrategy(bitcoinPayment);
cart.checkout(300); // Paid 300 using Bitcoin wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
