import React, { useState, useEffect, useCallback } from 'react';
import {Image} from '../../atoms/Image';
import './styles.css';

const INTERVAL_TIME_IN_MS = 360000;
const BANNER_URL = "https://api.pexels.com/v1/curated?per_page=1";

const BannerCover = (props) => {
    const [bannerObject, setBannerObject] = useState({});
    let intervalId;

    const fetchBanner = useCallback(
        () => {
            fetch(bannerObject.next_page, {
                headers: {
                    "Authorization": "<api key>"
                }
            }).then(res => res.json())
            .then(result => setBannerObject(result));
        },
        [bannerObject],
    )
    useEffect(() => {
        fetch(BANNER_URL, {
            headers: {
                "Authorization": "<api key>"
            }
        }).then(res => res.json())
        .then(result => setBannerObject(result));
    },[]);

    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }

        intervalId = setInterval(fetchBanner, INTERVAL_TIME_IN_MS);

        return () => clearInterval(intervalId);
    }, [bannerObject])

    return (
        <div className="bannerContainer">
            {
                bannerObject.hasOwnProperty('photos') && bannerObject.photos.length !== 0 &&
                <Image src={bannerObject.photos[0].src} />
            }
        </div>
    );
}

export { BannerCover };