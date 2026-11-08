
class User {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`${this.name} - ${this.age}`)
    }

}

const user1 = new User("Mouse", 43);
user1.introduce();

/*

class Product {
    public name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number) {
        if (price >= 0)
            this.price = price;
    }
}
    

class Person {
    protected age: number;

    constructor(age: number) {
        this.age = age;
    }
}

class Product {
    constructor(
        public name: string,
        private price: number,
        protected category: string
    ){}
}

class Student {
    constructor(
        private readonly id: number,
        public name: string,
        private score: number
    ){}

    getScore(){
        return this.score;
    }
}


class Employee {
    constructor(
        public name: string,
        protected salary: number
    ) {}

    showSalary() {
        console.log(this.salary);
    }
}

class Manager extends Employee {
    showInfo() {
        console.log(`${super.name} - ${super.salary}`)
    }
}
 */

class Person {
    constructor(
        public name: string,
        public age: number
    ) { }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        public studentId: number
    ) {
        super(name, age);
    }

    introduce() {
        console.log(`${this.name} - ${this.age} - ${this.studentId}`);
    }
}

class Employee {
    constructor(public name: string) { }

    introduce() {
        console.log(`I am ${this.name}`);
    }
}

class Manager extends Employee {
    override introduce() {
        console.log("I am Ali and I am a Manager");
    }
}


abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    constructor(
        public width: number,
        public height: number
    ) {
        super();
    }

    override calculateArea(): number {
        return this.width * this.height;
    }
}

class Cicrle extends Shape {

    constructor(public radius: number) { super() }

    override calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

enum UserRole {
    Admin = "admin",
    User = "user",
    Geust = "guest"
}

const role: UserRole = UserRole.Admin;


enum OrderStatus {
    Pending = "pending",
    Processing = "processing",
    Delivered = "delivered",
    Cancelled = "cancelled"
}

function getOrderStatus(value: OrderStatus) {
    switch (value) {
        case OrderStatus.Pending:
            console.log("pending...");
            break;
        case OrderStatus.Processing:
            console.log("Processing...");
            break;
        case OrderStatus.Delivered:
            console.log("Delivered...");
            break;
        case OrderStatus.Cancelled:
            console.log("Cancelled...");
            break;
    }
}

enum Category {
    Laptop = "laptop",
    Mobile = "mobile",
    Accessories = "accessories"
}

type Product = {
    id: number;
    name: string;
    category: Category;
};

const product1: Product = {
    id: 10,
    name: "RazerLaptop",
    category: Category["Laptop"]
}
const product2: Product = {
    id: 11,
    name: "iPhone",
    category: Category["Mobile"]
}
const product3: Product = {
    id: 12,
    name: "Mouse",
    category: Category["Accessories"]
}

const products: Product[] = [product1, product2, product3]

function getCategoryName(value: Category): string {
    switch (value) {
        case Category.Laptop:
            return "لپ تاپ";
            break;
        case Category.Mobile:
            return "موبایل";
            break;
        case Category.Accessories:
            return "اکسسوری";
            break;
    }
}
