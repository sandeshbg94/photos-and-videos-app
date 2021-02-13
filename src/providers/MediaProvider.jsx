import React, {useContext, useState, useEffect} from 'react';

const MediaContext = React.createContext({});
MediaContext.displayName = "MediaContext";

const PHOTOS_URL = "https://api.pexels.com/v1/search?per_page=12&query=";
const VIDEOS_URL = "https://api.pexels.com/videos/search?per_page=12&query=";

export const MediaProvider = ({
    children
}) => {
    const [photos, setPhotos] = useState({});
    const [videos, setVideos] = useState({});
    const [term, setSearchTerm] = useState("animal")

    useEffect(() => {
        if(term.length > 4){
            fetch(PHOTOS_URL+term,{
                headers: {
                    "Authorization": "<api key>"
                }
            }).then(res => res.json())
            .then(result => setPhotos(result));
    
            fetch(VIDEOS_URL+term, {
                headers: {
                    "Authorization": "<api key>"
                }
            }).then(res => res.json())
            .then(result => setVideos(result));    
        }
    }, [term])

    const value = {photos, videos, setSearchTerm};
    return (
        <MediaContext.Provider value={value}>
            {children}
        </MediaContext.Provider>
    )
}

export const useMedia = () => useContext(MediaContext)
