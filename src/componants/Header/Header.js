import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const generalDesign = {
        textDecoration: 'none',
        padding : '10px',
        color: '#fff'
    }
    return (
        <div className='bg-dark'>
            <div>
                <h2 className='text-warning py-2'> MealDB Resturant</h2>
            </div>
            <div className='p-2 fs-4 nav'>
                <NavLink to="/home" style={generalDesign}
                    activeClassName="border-bottom text-warning">
                    Home
                </NavLink>
                <NavLink to="/resturant" style={generalDesign}
                    activeClassName="border-bottom text-warning">
                    Resturant
                </NavLink>
                <NavLink to="/about" style={generalDesign}
                    activeClassName="border-bottom text-warning">
                    About
                </NavLink>
            </div>
        </div>
    );
};

export default Header;