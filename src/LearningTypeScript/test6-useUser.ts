import { useContext } from "react";
import { UserContext } from "./test3-Ts";


export function useUser(){
    const userContext = useContext(UserContext);

    if(!userContext){
        throw new Error("no user");
    }

    const {user,setUser} = userContext;

    return {user,setUser}
}