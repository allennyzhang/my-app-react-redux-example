import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>My React Redux App</h1>
                <div className="navContent">
                    <div className="navLinks"></div>
                    <Link to='/'>Posts</Link>
                </div>
            </section>
        </nav>
    )
}