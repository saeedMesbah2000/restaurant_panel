import React from "react";
import {useRef} from "react";
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {SubHeading} from "../../components";
import {images} from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const clickHandler = () => {
    console.log("working button");
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opentsans" style={{color: "#AAA", marginTop: "2rem"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}></div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={clickHandler}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
