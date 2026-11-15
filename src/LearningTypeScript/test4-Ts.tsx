import { type User } from "./test3-Ts";
import { useUser } from "./test6-useUser";

function UserProfile(){
    
     const {user, setUser} = useUser();

     function handleClick(){
        let newUser: User ={
            id: 1,
            name: "milad",
            email: "milad@example.com"
        }
        setUser(newUser);
     }

    return(
        <div>
            <button onClick={handleClick}>Login</button>
            {user ? <p>{user.name}</p> : <p>no user!</p>}
        </div>
    )
}

export default UserProfile