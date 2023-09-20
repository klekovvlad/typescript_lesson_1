import { FC, useState, useEffect } from "react"
import { ITodo } from "../types/types"
import List from "./List"
import TodoItem from "./Todoitem"

const TodosPage:FC = () => {

        
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos().then(data => setTodos(data))
    }, [])

    async function fetchTodos() {
      try{
        let res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
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
            <List items={todos} renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id} />} />
        </div>
    )
}

export default TodosPage