import { BrowserRouter, Route, Routes } from "react-router-dom"
import Card, { CardVariant } from "./components/Card"
import EventExample from "./components/EventExample"
import UserPage from "./components/UserPage"
import TodosPage from "./components/TodoPage"
import { NavLink } from "react-router-dom"
import UserItemPage from "./components/UserItemPage"

const App = () => {


    return (
      <BrowserRouter>
        <EventExample />
        <Card onClick={() => console.log('click')} variant={CardVariant.outline} width="200px" height="200px"> 
          <button>Кнопка</button>
        </Card>
        <div>
          <NavLink to={'/users'}>Пользователи</NavLink>
          <NavLink to={'/todos'}>Список дел</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App