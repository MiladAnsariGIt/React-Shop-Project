/*
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
    category: Category.Laptop
}
const product2: Product = {
    id: 11,
    name: "iPhone",
    category: Category.Mobile
}
const product3: Product = {
    id: 12,
    name: "Mouse",
    category: Category.Accessories
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

function getLength(value: string): number;
function getLength(value: number[]): number;

function getLength(value: string | number[]): number | number[] {
    return value.length
}


function convert(value: number): string;
function convert(value: string): number;

function convert(value: number | string): string | number {
    if (typeof value === "number") {
        return value.toLocaleString();
    }

    return value.length;
}


function getData(value: number): string;
function getData(value: string): number;
function getData(value: boolean): boolean;

function getData(value: number | string | boolean): string | number | boolean {
    if (typeof value === "number") {
        return String(value);
    }
    else if (typeof value === "string") {
        return value.length
    }

    return value;
}

type Add = (a: number, b: number) => number;

type IsEven = (a: number) => boolean;

type GetName = (a: number) => string;

const add: Add = (a, b) => {
    return a + b;
}

const isEven: IsEven = (a) => {
    return a % 2 === 0;
}

const getName: GetName = (a) => {
    return String(a);
}

function calculate(a: number, b: number, operation: (a: number, b: number) => number): number {
    return operation(a, b);
}

const result1 = calculate(4, 5, (a, b) => a + b);

function filterNumbers(a: number[], callback: (a: number) => boolean): number[] {
    let result: number[] = [];
    for (let index = 0; index < a.length; index++) {
        if (callback(a[index]))
            result.push(a[index]);
    }

    return result;
}

type NumberCallback = (a: number) => number;

function mapNumbers(a: number[], Callback: NumberCallback): number[] {
    return a.filter(Callback);
}

function processValue(value: unknown): void {
    if (typeof value === "number") {
        console.log(`${value * 2}`);
    }

    if (typeof value === "string") {
        console.log(value.toLocaleUpperCase());
    }

    console.log("unknown type");
}

function getResult(value: unknown): number {
    if (typeof value === "number") {
        return value * value;
    }
    else if (typeof value === "string") {
        return value.length;
    }
    else {
        return -1;
    }
}

type Order =
    | { status: "pending"; orderId: number }
    | { status: "shipped"; orderId: number; trackingCode: string }
    | { status: "cancelled"; orderId: number; reason: string };

function getOrderMessage(order: Order): string {
    if (order.status === "pending") {
        return "dar entezar pardakht";
    }
    else if (order.status === "shipped") {
        return order.trackingCode;
    }
    else {
        return order.reason;
    }
}

type Payment =
    | { type: "cash"; amount: number }
    | { type: "credit"; amount: number; creditFee: number }
    | { type: "discount"; amount: number; discountPercent: number }
    | { type: "wallet"; amount: number; walletBalance: number };

function calculatePayment(payment: Payment): number {
    switch (payment.type) {
        case "cash":
            return payment.amount;
        case "credit":
            return payment.amount + payment.creditFee;
        case "discount":
            return payment.amount * (1 - payment.discountPercent / 100);
        case "wallet":
            return payment.walletBalance;
        default:
            return assertValue(payment)

    }
}

function assertValue(value: never): never {
    throw new Error(`unknown type: ${value}`);
}

type MutableUser = {
    -readonly [K in keyof User]-?: User[K]
}

type MyType<T> = {
    +readonly [K in keyof T]+?: T[K];
}

type IsNumber<T> = T extends number ? true : false;

type GetArrayType<T> = T extends (infer R)[] ? R : never

type ApiResult<T> =
    | { status: "success"; data: T }
    | { status: "error"; message: string };

function assertNever(value: never): never {
    throw new Error("Unexpected value");
}

function handleResult<T>(result: ApiResult<T>): T | null {
    switch (result.status) {
        case "success":
            return result.data;

        case "error":
            return null;

        default:
            return assertNever(result);
    }
}

type Product = {
    readonly id: number;
    name: string;
    price: number;
    category?: string;
};

type UpdateProduct = {
  -readonly  [K in Exclude<keyof Product,"id">]? : Product[K];
}

function getProperty<T extends object,U extends string> (value: T,key: U): any{
    if(key in value){
        return key
    }
}
*/
type Admin = {
    role: "admin";
    permissions: string[];
};

type Customer = {
    role: "customer";
    purchaseCount: number;
};

type User = Admin | Customer;

function getUserInfo(value: User): number{
    switch(value.role){
        case "admin":
            return value.permissions.length
        case "customer":
            return value.purchaseCount;
    }
}

type MyReturnType<T> = T extends (...args:any) => infer R ? R : never;