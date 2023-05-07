import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <NavLink to='/' className='navbar-brand text-white'>Home page</NavLink>
                    </div>
                    <div>
                        <NavLink className='navbar-brand text-white' to= {{pathname: '/motorcycles'}}> Motorcycles</NavLink>
                    </div>
                    <div>
                        <NavLink className='navbar-brand text-white' to={{pathname: '/purposes'}}> Purposes</NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;