//Create a Class
//Encapsulation

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getAccountInfo() {
        return `Account number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
}

const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getAccountInfo());

const ninaAccount = new BankAccount("987654321", 100000000)
ninaAccount.deposit(500);
ninaAccount.withdraw(200);
console.log(ninaAccount.getAccountInfo());