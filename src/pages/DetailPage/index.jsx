import React from 'react';
import {NavBar} from '../../components/organisms/NavBar';
import { VideoPlayer } from '../../components/organisms/Video';
import {PhotoViewer} from '../../components/organisms/PhotoViewer';
import {useLocation} from 'react-router-dom';

const DetailPage = (props) => {
    let {state} = useLocation();
    return (
        <div>
            <NavBar />
            {
                state.mediaType === "video" ?
                <VideoPlayer {...state} />:
                <PhotoViewer {...state} />
            }
        </div>
    );
  };

  export default DetailPage;