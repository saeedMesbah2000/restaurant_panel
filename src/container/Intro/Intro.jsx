import React from "react";
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {useState, useRef} from "react";
import "./Intro.css";
import {meal} from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidref = useRef();

  const videoHandler = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidref}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={videoHandler}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
