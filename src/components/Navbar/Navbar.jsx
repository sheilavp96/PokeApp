import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import poke1 from '../../assets/pokebolas-05.png';
import poke2 from '../../assets/pokebolas-01.png';
import poke3 from '../../assets/pokebolas-02.png';
import poke4 from '../../assets/pokebolas-03.png';
import poke5 from '../../assets/pokebolas-04.png';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <ul>
                <li className='poke1'>
                    <NavLink to='/pokemons' activeClassName='active' className='navlink'>
                        <img src={poke1} />
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
                        <img src={poke4} />
                        Machine
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/moves' activeClassName='active' className='navlink'>
                        <img src={poke5} />
                        Moves
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
