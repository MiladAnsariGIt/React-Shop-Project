import { useParams,Link } from "react-router-dom"

const users = [
    {id:1 , name: 'علی',age:25},
    {id:2 , name:'میلاد',age:23},
    {id:3 , name:'مهرداد',age:32}
]

function UserDetails () {
    const {id} = useParams()
    const user = users.find(u => u.id == Number(id))

    if(!user) return <h2>کاربر پیدا نشد</h2>

    return (
        <div>
            <h1>{user.name}</h1>
            <p>سن: {user.age}</p>
            <Link to="/users">بازگشت به کاربران</Link>
        </div>
    )
    
}

export default UserDetails