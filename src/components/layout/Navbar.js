import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = props => {
    return (
        <nav>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/create'>New Employee</NavLink>
            </div>
        </nav>
    )
}
export default Navbar