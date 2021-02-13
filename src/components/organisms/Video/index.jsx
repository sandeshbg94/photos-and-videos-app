import React,{useState} from 'react';
import Large_Fav_Empty  from "../../../assets/large-fav-empty.png";
import Large_Fav_Fill  from "../../../assets/large-fav-fill.png";
import Profile_Icon from "../../../assets/profile-icon-1.png";
import './styles.css';

const VideoPlayer = (props) => {
    const videoFile = props.videoFiles.find(file => {
        if((file.quality == "hd" || file.quality == "hd") && file.file_type === "video/mp4"){
            return file;
        }
    });
    const [isFavorite, setisFavorite] = useState(false);

    return(
       <div className="mainContainer">
           <video controls autoplay className="videoContainer" poster={props.videoPictures[0].picture}>
                <source src={videoFile.link}/>
                <p>This video is not supported</p>
            </video>
       </div>
    );
}

export {VideoPlayer};

