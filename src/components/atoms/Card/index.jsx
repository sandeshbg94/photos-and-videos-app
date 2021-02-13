import { useState } from "react";
import Profile_Icon from "../../../assets/profile-icon.png";
import Remove_Fav_Icon from "../../../assets/fav-empty.png";
import Add_Fav_Icon from "../../../assets/fav-fill.png";
import Play_Icon from "../../../assets/play.png";
import { useHistory } from "react-router-dom";
import styles from "./card.module.css";

export const Card = (props) => {
  const [state, setstate] = useState(false);
  let history = useHistory();
  const redirectTo = () => {
    if(!props.videoFiles){
      history.push({
        pathname: "/detail",
        state: { src: props.imageSrc, photoTitle: props.title, isFavorite: false, mediaType: "photo" },
      });
    }else{
      history.push({
        pathname: "/detail",
        state: {videoFiles: props.videoFiles, videoPictures: props.videoPictures, mediaType: "video"},
      });
    }
  }
  return (
    <div className={styles.container} onClick={redirectTo}>
      <img alt="PROFILE_ICON" className={styles.card} src={props.imageSrc} />

      <img
        alt="FAVOURITE_ICON"
        onClick={() => setstate(!state)}
        className={styles.favIcon}
        src={state ? Add_Fav_Icon : Remove_Fav_Icon}
      />
      {props.playIcon && (
        <img
          alt="PLAY_ICON"
          className={styles.playIcon}
          src={Play_Icon}
        />
      )}
      <div className={styles.profileContainer}>
        <img alt="PROFILE_ICON" src={Profile_Icon} />
        <p className={styles.profileTitle}>{props.title}</p>
      </div>
    </div>
  );
};
