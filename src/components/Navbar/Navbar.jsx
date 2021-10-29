import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import poke1 from '../../assets/poke1.png';
import poke2 from '../../assets/poke2.png';
import poke3 from '../../assets/poke3.png';
import poke4 from '../../assets/poke4.png';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <ul>
                <li>
                    <NavLink to='/pokemons' activeClassName='active' className='navlink'>
                        <img src={poke4} />
                        Pokemons
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/berries' activeClassName='active' className='navlink'>
                        <img src={poke2} className='active' />
                        Berries
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/items' activeClassName='active' className='navlink'>
                        <img src={poke3} />
                        Items
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/machine' activeClassName='active' className='navlink'>
                        <img src={poke1} />
                        Machine
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
