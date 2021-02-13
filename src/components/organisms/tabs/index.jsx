import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";

import { Card } from "../../atoms/Card/index";
import "./style.css";

import { useMedia } from "../../../providers/MediaProvider";

const TabsView = (props) => {
  const [key, setKey] = useState("photo");

  const { photos: photoObject, videos: videoObject } = useMedia();

  return (
    <div className="main-content">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tabs"
        id="tabs"
      >
        <Tab eventKey="photo" className="tab" title="Photos">
          <div className="card-contaier">
            {photoObject.photos &&
              photoObject.photos.map((data,index) => {
                return (
                  <Card
                    imageSrc={data.src.landscape}
                    title={data.photographer}
                    id={data.id}
                  />
                );
              })}
          </div>
        </Tab>
        <Tab eventKey="videos" className="tab" title="Videos">
        <div className="card-contaier">
          {videoObject.videos &&
            videoObject.videos.map((data, index) => {
              return (
                <Card 
                    imageSrc={data.image} 
                    playIcon title={data.user?.name}
                    index={index}
                    videoFiles={data.video_files}
                    videoPictures={data.video_pictures}
                    id={data.id}
                />
              );
            })}
            </div>
        </Tab>
        <Tab eventKey="fav" className="tab" title="Favorites">
          Favorites
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsView;
