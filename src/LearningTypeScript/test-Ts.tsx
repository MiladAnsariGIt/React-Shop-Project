type User = {
    readonly id: number;
    name: string;
    email?: string;
    age?:number;
}

const user1: User = {
  id: 1,
  name: "Ali",
  email: "ali@gmail.com"
};

const user2: User = {
  id: 2,
  name: "Reza"
};

const user3: User = {
  id: 3,
  name: "Sara",
  email: "sara@gmail.com",
  age: 22
};

type Prices = {
  [productName: string]: number;
};

type Scores = {
    [studentName: string]: number;
}

type Student = {
    readonly id: number;
    name: string;
    age?: number;
    [attribute: string]:  string | number | undefined;
}

type Status = "pending" | "paid" | "cancelled";

type Order = {
    id: number;
    customerName: string;
    status: Status;
}

const order1: Order = {
    id:1,
    customerName:"Ali",
    status:"paid"   
}

function formatValue(value: string | number){
    if(typeof value === "string")
        return value.toUpperCase();
    else
        return value * 10;
}

function isString(value: string | number){
    if(typeof value === "string"){
        return true;
    }

    return false;
}

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

type Discount = {
    discountPercent: number;
};

type DiscountedProduct = Product & Discount;

const item: DiscountedProduct = {
    id:3,
    name: "Mous",
    price: 1200,
    discountPercent: 10,
    category: "gaming"
}

function identify<T>(value: T): T{
    return value;
}

function getLast<T>(value: T[]): T | undefined{
    return value[value.length - 1];
}

function merge<T,U>(value1: T,value2: U): [T,U]{
    return [value1,value2];
}

function getId<T extends {id: number}>(value: T): number{
    return value.id;
}

type UpdateUser = Partial<User>;
type ForceUser = Required<User>;
type UserInfo = Pick<User, "name" | "email">
type ProductWithoutId = Omit<Product, "id">

type Categories = "laptop" | "mouse" | "keyboard";
type ProductPrices = Record<Categories, number>

const prices: ProductPrices = {
    laptop: 20,
    mouse: 40,
    keyboard: 30
}

type ProductKeys = keyof Product;