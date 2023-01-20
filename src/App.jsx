import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Account from './pages/Account'
import { loader as postsLoader } from './pages/Home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={ <MainLayout/> } >
      <Route path='/' index element={ <Home /> } loader={postsLoader} />
      <Route path='/account' element={ <Account /> } />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
