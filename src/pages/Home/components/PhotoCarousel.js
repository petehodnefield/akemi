import React, { useState } from "react";
import { carouselPhotos } from "../../../data/carousel-photos";
const PhotoCarousel = ({ isOpen, setIsOpen }) => {
  const [mainImage, setMainImage] = useState("Picture5.jpg");
  return (
    <section className="photo-carousel-wrapper">
      <div className="photo-carousel ">
        <div className="photo-grid box-shadow">
          {" "}
          {carouselPhotos.map((phot) =>
            phot.img === mainImage ? (
              ""
            ) : (
              <img
                key={phot.img}
                onClick={() => setMainImage(phot.img)}
                className={`photo-grid-item ${isOpen ? "hide" : ""}`}
                src={require(`../../../assets/images/${phot.img}`)}
              ></img>
            )
          )}{" "}
          <div className="main-img-div">
            <img
              className="main-img"
              src={require(`../../../assets/images/${mainImage}`)}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
