import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { carouselPhotos } from "../../../data/carousel-photos";
import { Icon } from "@iconify/react";
import PhotoModal from "../components/PhotoModal";
const PhotoCarousel = ({ isOpen, setIsOpen }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="photo-carousel-wrapper">
      {modalOpen ? (
        <PhotoModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          mainImageIndex={mainImageIndex}
          setMainImageIndex={setMainImageIndex}
          carouselPhotos={carouselPhotos}
        ></PhotoModal>
      ) : (
        ""
      )}
      <div className="photo-carousel ">
        <div className="photo-grid box-shadow">
          {carouselPhotos.map((photo) =>
            photo.photoIndex === mainImageIndex ? (
              ""
            ) : (
              <img
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
              className="main-img-icon"
              icon="material-symbols:open-in-full-rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
