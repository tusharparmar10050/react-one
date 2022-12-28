import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import "../styles/header.scss";


const Header = () => {
    return <nav>
        <h1> Tushar</h1>
        <main>
            <HashLink className='l' to={"/#home"}>Home</HashLink>
            <Link className='l' to={"/contact"}>Contact</Link>
            <HashLink className='l' to={"/#about"}>About</HashLink>
            <HashLink className='l' to={"/#brands"}>Brands</HashLink>
            <Link className='l' to={"/services"}>Services</Link>
        </main>
    </nav>

};

export default Header