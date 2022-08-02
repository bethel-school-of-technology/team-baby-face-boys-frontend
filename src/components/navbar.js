import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* Designer note: I will probably be pulling in a stylish Google font to make these items stand out more, but that may be a nice to have for now.*/}
            <Link className='h1' to='/profile'>Home</Link>
            <Link className='h1'  to='/allgames'>Arcade</Link>
            <Link className='h1'  to='/forum'>Gamer Forum</Link>
            <Link className='h1'  to='/leaderboard'>Leaderboard</Link>
        </nav>
    );
};

export default Navbar;