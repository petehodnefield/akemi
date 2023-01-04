import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { carouselPhotos } from "../../../data/carousel-photos";
import { Icon } from "@iconify/react";
import PhotoModal from "../components/PhotoModal";
const PhotoCarousel = ({
  isOpen,
  setIsOpen,
  setMainImageIndex,
  mainImageIndex,
  setModalOpen,
  modalOpen,
}) => {
  return (
    <section className="photo-carousel-wrapper">
      <div className="photo-carousel ">
        <div className="photo-grid box-shadow">
          {carouselPhotos.map((photo) =>
            photo.photoIndex === mainImageIndex ? (
              ""
            ) : (
              <img
                alt={photo.alt}
                key={photo.img}
                onClick={() => setMainImageIndex(photo.photoIndex)}
                className={`photo-grid-item ${isOpen ? "" : ""}`}
                src={require(`../../../assets/images/${photo.img}.jpg`)}
              />
            )
          )}
          <div className="main-img-div">
            <img
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
              className="main-img"
              src={require(`../../../assets/images/Picture${mainImageIndex}.jpg`)}
            ></img>{" "}
            <Icon
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
              className="main-img-icon open-icon"
              icon="ic:baseline-open-in-new"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
