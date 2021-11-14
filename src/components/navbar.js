import React from 'react'
import { useSelector } from 'react-redux'
import { todoSelector } from '../store'
const Navbar = () => {
    const todo = useSelector(todoSelector)
    return (
        <div className = 'navbar'>
            <h1>My React App ReDuxx</h1>
            <ul>
                <li>Home <i className = 'ti-angle-down'></i></li>
                <li>About</li>
                <li>Total Todos:{todo.length}</li>
            </ul>
        </div>
    )
}

export default Navbar
