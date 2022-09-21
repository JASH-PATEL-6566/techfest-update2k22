import React from 'react'
import './navbar.css'
import { Link, ScrollLink } from 'react-scroll';

function Navbar() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            })
        })
    })

    return (
        <nav>
            <h1>Update2<span>K</span>22</h1>
            <ul>
                <li><Link to='main-coordinator' spy={true} offset={-100} duration={1000}>Main-Coordinator</Link></li>
                <li><Link to='faculty-coordinator' spy={true} offset={-100} duration={1000}>Faculty-Coordinator</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;