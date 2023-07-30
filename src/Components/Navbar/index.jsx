import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 font-medium'>
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
                        className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/orders'
                        className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/inventory'
                        className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Inventory
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li>
                    <NavLink
                        to='/log-in'
                        className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        👤
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/log-in'
                        className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        log In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}
