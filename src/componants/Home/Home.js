import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className='py-2 fs-4'>
            <h3>This App is made for searching random meals from diffrent part of worlds!</h3>
            <p>Try to catch all those fancy meals</p>
            <Link to='/resturant' style={{color: 'purple', textDecoration: 'none'}}>
                Visit Resturant
            </Link>
        </div>
    );
};

export default Home;