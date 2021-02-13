import React, { useState } from "react";
import {useMedia} from '../../../providers/MediaProvider';

import Large_Fav_Empty  from "../../../assets/large-fav-empty.png";
import Large_Fav_Fill  from "../../../assets/large-fav-fill.png";
import Profile_Icon from "../../../assets/profile-icon-1.png";

import "./styles.css";

const PhotoViewer = (props) => {
    const [isFavorite, setisFavorite] = useState(false);

    return (
        <div className="container">
            <img
            alt="DETAIL_IMAGE"
            src={props.src}
            className="detailCard"
            />
            <div className="headerContainer">
                <h3 className="headerTitle">Title</h3>
                <img
                    alt="LARGE_FAV_ICON"
                    className="favIcon"
                    onClick={() => setisFavorite(!isFavorite)}
                    src={isFavorite ? Large_Fav_Fill : Large_Fav_Empty}
                />
            </div>
            <div className="profileContainer">
                <img alt="PROFILE_ICON" src={Profile_Icon} />
                <p className="profileTitle">{props.photoTitle}</p>
            </div>
        </div>
    );
};

export {PhotoViewer};
