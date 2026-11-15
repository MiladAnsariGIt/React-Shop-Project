import { useUser } from "./test6-useUser";


export function UserEmail(){
    const {user, setUser} = useUser();

    return(
        <div>
            {user?.email ? <p>{user.email}</p> : <p>no email</p>}
        </div>
    )
}