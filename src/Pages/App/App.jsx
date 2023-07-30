import {useRoutes, BrowserRouter} from 'react-router-dom'
import { Home } from '../Home'
import { CreateProduct } from '../CreateProduct'
import { Inventory } from '../Inventory'
import { LogIn } from '../LogIn'
import { NotFound } from '../NotFound'
import { Orders } from '../Orders'
import { SignIn } from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import './App.css'


const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/orders', element: <Orders/>},
        {path: '/inventory', element: <Inventory/>},
        {path: '/create-product', element: <CreateProduct/>},
        {path: '/log-in', element: <LogIn/>},
        {path: '/sign-in', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ])

    return routes;
}


function App() {
    return (
        <BrowserRouter>
            <AppRoutes/>
            <Navbar/>
        </BrowserRouter>
    )
}

export {App}
