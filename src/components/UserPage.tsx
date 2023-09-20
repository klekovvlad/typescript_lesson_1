import { FC, useState, useEffect } from "react"
import { IUser } from "../types/types"
import List from "./List"
import UserItem from "./UserItem"
import { useNavigate } from "react-router-dom"

const UserPage:FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers().then(users => {
          setUsers(users)
        })
    }, [])

    async function fetchUsers() {
        try{
          let res = await fetch('https://jsonplaceholder.typicode.com/users', {
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

    
    return(
        <div>
            <List items={users} renderItem={(user:IUser) => <UserItem onClick={(user) => navigate(`/users/${user.id}`)} user={user} key={user.id} />} />
        </div>
    )
}

export default UserPage