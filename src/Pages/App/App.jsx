import {useRoutes, BrowserRouter} from 'react-router-dom'
import { Home } from '../Home'
import { CreateProduct } from '../CreateProduct'
import { Inventory } from '../Inventory'
import { LogIn } from '../LogIn'
import { NotFound } from '../NotFound'
import { Orders } from '../Orders'
import { SignIn } from '../SignIn'
import './App.css'

const AppRoutes = () => {

}


function App() {
  return (
    <div className='bg-red-100'>
      <Home/>
      <CreateProduct/>
      <Inventory/>
      <LogIn/>
      <NotFound/>
      <Orders/>
      <SignIn/>
    </div>
  )
}

export {App}
