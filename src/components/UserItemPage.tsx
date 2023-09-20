import { FC, useState, useEffect } from "react"
import { IUser } from "../types/types"
import { useNavigate, useParams } from "react-router-dom"

const UserItemPage:FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser().then(user => {
          setUser(user)
        })
    }, [])

    async function fetchUser() {
        try{
          let res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
              method: 'GET'
          })
          if(!res.ok) {
              console.log(res.status)
          }else{
              return res.json()
          }
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => {
                navigate('/users')
            }}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>

        </div>
    )
}

export default UserItemPage