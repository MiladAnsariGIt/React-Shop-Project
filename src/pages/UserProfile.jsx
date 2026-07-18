import { useParams } from "react-router-dom"

function UserProfile(){
    const {id} = useParams();

    return <h2>user id: {id}</h2>
}

export default UserProfile