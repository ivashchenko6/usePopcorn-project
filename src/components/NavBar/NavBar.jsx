import { useState } from "react";
import Search from "../Search/Search";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Logo />

            <Search />
            <NumResults />
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

const NumResults = () => {
    return (
        <p className="num-results">
            Found <strong>X</strong> results
        </p>
    );
};

export default NavBar;
