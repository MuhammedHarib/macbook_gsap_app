import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => { // Component name remains Navbar, but file name changes
  return (
    <header>
        <nav>
         <img src="/logo.svg" alt="apple logo" />

         <ul>
            {navLinks.map(({label}) => (
              <li key={label}>
                <a href={`#${label.toLowerCase()}`}>{label}</a>
              </li> 
            ))}
         </ul>
         <div className="flex-center gap-3">
            <button className="icon-button">
               <img src="/search.svg" alt="search" />
            </button>
            <button className="icon-button">
               <img src="/cart.svg" alt="cart" />
            </button>
         </div>
        </nav>
    </header>
  )
}

export default Navbar