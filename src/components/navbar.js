import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/profile'>Home</Link>
            <Link to='/allgames'>Arcade</Link>
            <Link to='/forum'>Gamer Forum</Link>
            <Link to='/leaderboard'>Leaderboard</Link>
        </nav>
    );
};

export default Navbar;