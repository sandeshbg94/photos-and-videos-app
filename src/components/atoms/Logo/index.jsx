import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/Logo.png';
import darklogo from '../../../assets/DarkLogo.png';
import './styles.css';

const HeaderLogo = (props) => {
    let location = useLocation();

    return (
        <div className="logoContainer">
            <img src={location.pathname === "/" ? logo: darklogo} />
        </div>
    )
}

export {HeaderLogo};