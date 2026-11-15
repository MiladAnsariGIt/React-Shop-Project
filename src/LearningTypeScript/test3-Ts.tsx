/*
type UserProps = {
    name: string,
    age: number,
    email?: string,
    isAdmin: boolean
}

function UserCard({name,age,email,isAdmin}: UserProps){
    return (
        <div>
            <h2>name: {name}</h2>
            <p>age: {age}</p>
            {email && <p>email: {email}</p>}
            {isAdmin && <p>Admin</p>}
        </div>
    )
}

export default UserCard;


import { useRef, useState } from "react";

type ProductProps = {
    id: number;
    title: string;
    price: number;
    rating: number;
    inStock: boolean;
};

type Product = {
    id: number;
    title: string;
    price: number;
};

type OrderStatus = "pending" | "paid" | "cancelled";

function ProductCard({id,title,price,rating,inStock}: ProductProps){

    const [cart,setCart] = useState<Product[]>([])
    const [productCount,setProductCount] = useState<number>(0);
    const [selectedProduct,setSelectedProduct] = useState<Product | null>(null);
    const [orderStatus,setOrderStatus] = useState<OrderStatus>("pending");
    const [search, setSearch] = useState<string>("");
    const clickCount = useRef<number>(0);
    const [clicks,setClicks] = useState<number>(0);

    function addToCart(value: Product){
        setCart(prev => [...prev,value]);
    }

    function removeFromCart(id: number){
        setCart(prev => prev.filter(product => product.id !== id))
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
        clickCount.current += 1;
        console.log(clickCount.current);
        setClicks(prev => prev + 1);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        console.log(search)
  }

    return(
        <div>
            <p>title: {title}</p>
            <p>price: {price}</p>
            {rating >= 4.5 && <p>Best Seller</p>}
            {!inStock && <p>ناموجود</p>}
            <form onSubmit={handleSubmit}>
                <button type="button" onClick={handleClick}>button</button>
                <p>{clicks}</p>
                <input onChange={handleChange} value={search}></input>
                <p>{search}</p>
            </form>
        </div>
    )
}

export default ProductCard

*/
import React, { createContext, useState } from "react";
import { useContext } from "react";

export type User = {
    id: number;
    name: string;
    email?: string;
};

type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({children}: {children: React.ReactNode}){
    const [user,setUser] = useState<User | null>(null);

    return(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

function UserProfile(){
    const userContext = useContext(UserContext);
}