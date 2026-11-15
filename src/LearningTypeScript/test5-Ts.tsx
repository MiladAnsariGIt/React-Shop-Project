import UserProfile from "./test4-Ts";
import { UserProvider } from "./test3-Ts";
import { UserEmail } from "./test7-Ts";

export function Component(){
    return(
        <UserProvider>
            <UserProfile/>
            <UserEmail/>
        </UserProvider>
    )
}