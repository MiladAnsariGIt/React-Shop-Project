import { Link } from "react-router-dom"

const users = [
    {id:1 , name: 'علی'},
    {id:2 , name:'میلاد'},
    {id:3 , name:'مهرداد'}
]

function Users() {
    return(
        <div>
            <h1>لیست کاربران</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users