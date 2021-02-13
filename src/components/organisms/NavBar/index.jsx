import React from 'react';
import {Search} from '../../molecules/Search';
import {HeaderLogo} from '../../atoms/Logo';
import './styles.css';

const NavBar = () => {
    const search = (
        <div className="searchHeader">
            <Search />
        </div>
    )
    return(
        <div className="navBar">
            <HeaderLogo />
            {search}
        </div>
    );
}

export {NavBar};