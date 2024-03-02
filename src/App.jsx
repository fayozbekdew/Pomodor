import { BrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'
import './App.css'
import Pomodor from './components/Pomodor/Pomodor'
import RoutesLayout from './Layout/RoutesLayout'

function App() {

  const routes = BrowserRouter(
    createRoutesFromElements(
     <Route element={<RoutesLayout />}>
        <Route path='/' index element={<Pomodor />}></Route>
      </Route>
    )
  )
  

  return (
    <RouterProvider
    router={routes}
  />
  )
}

export default App
