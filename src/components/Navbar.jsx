import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className='header'>
                <div className="container d_flex">
                    <div className='navlink'>
                        <ul>
                            <li><a href="#home">ALL</a></li>
                            <li><a href="#men">MEN</a></li>
                            <li><a href="#woman">WOMAN</a></li>
                            <li><a href="#kins">KIDS</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar