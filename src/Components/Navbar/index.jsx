import { NavLink } from 'react-router-dom'
import { MarketContext } from '../../Context'
import { useContext } from 'react'


const Navbar = () => {
  const context = useContext(MarketContext);
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-medium'>
      <ul className='flex items-center gap-4'>
        <li className='font-extrabold text-2xl'>
          <NavLink
            to='/'
          >
            MarketPlace-ML
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Home
          </NavLink>
        </li>
        {!context.isAdministrator &&
        <li>
          <NavLink
            to='/orders'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Orders
          </NavLink>
        </li>}
        {!context.isAdministrator &&
        <li>
          <NavLink
            to='/inventory'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Inventory
          </NavLink>
        </li>}
      </ul>
      <ul className='flex items-center gap-4'>
        <li>
          <NavLink
            to='/log-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            👤
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/log-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            log In
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
