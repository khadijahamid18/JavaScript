// ES-6 syntactic sugar over constructor functions
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return `Hi, ${this.firstName} ${this.lastName}.`;
    }

    calculateAge(birthYear) {
        return Number(new Date().toISOString().substring(0, 4)) - birthYear;
    }
}

class Customer extends Person {
    constructor(
        firstName,
        lastName,
        cashDeposite = 500,
        cashWithDraw = 500,
        totalBalance = 2000
    ) {
        super(firstName, lastName);
        this.cashDeposite = cashDeposite;
        this.cashWithDraw = cashWithDraw;
        this.totalBalance = totalBalance;
    }

    depositeCash(cash) {
        this.cashDeposite = cash;
        this.totalBalance += this.cashDeposite;
    }

    withDrawCash(cash) {
        this.cashWithDraw = cash;
        if (this.totalBalance === 0) {
            return `No Balance`;
        }

        this.totalBalance -= this.cashWithDraw;
    }

    print() {
        let data = {
            name: `${this.firstName} ${this.lastName}`,
            balance: this.totalBalance,
        };

        return data;
    }
}

const mohsin = new Customer("Mohsin", "shoaib"); 

console.log(mohsin.print());
mohsin.depositeCash(1000);
mohsin.depositeCash(1000);
mohsin.depositeCash(1000);
mohsin.withDrawCash(1000);
mohsin.withDrawCash(1000);
mohsin.withDrawCash(1000);

console.log(mohsin.withDrawCash(1000));
console.log(mohsin.print()); 