import React from "react";
import {useRef} from "react";
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {SubHeading} from "../../components";
import {images} from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const slidekHandler = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
      console.log("working left");
    } else {
      scrollRef.current.scrollLeft += 300;
      console.log("right");
    }
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
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="images__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => slidekHandler("left")}
          />

          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => slidekHandler("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
