import React from 'react';
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <HeaderSearch/>
                <HeaderCart/>
            </div>
        </header>
    );
};

export default Header;