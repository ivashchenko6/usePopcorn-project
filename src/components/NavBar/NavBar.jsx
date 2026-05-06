import { useState } from "react";
import Search from "../Search/Search";

const NavBar = ({ children }) => {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    );
};

const Logo = () => {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    );
};
export default NavBar;
