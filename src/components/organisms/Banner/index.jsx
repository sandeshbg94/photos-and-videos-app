import React, { useState, useEffect } from 'react';
import { BannerCover } from '../../molecules/BannerCover';
import { HeaderLogo } from '../../atoms/Logo';
import {BannerText} from '../../atoms/Banner Text';
import {Search} from '../../molecules/Search';
import './styles.css';

const Banner = (props) => {
    const search = (
        <div className="searchWrapper">
            <Search />
        </div>
    );

    return (
        <div>
            <BannerCover />
            <HeaderLogo />
            <BannerText />
            {search}
        </div>
    )
}

export {Banner};