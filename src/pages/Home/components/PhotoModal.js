import React from "react";
import { Icon } from "@iconify/react";

const PhotoModal = ({
  modalOpen,
  setModalOpen,
  mainImageIndex,
  carouselPhotos,
  setMainImageIndex,
}) => {
  const nextSlide = () => {
    const isLastSlide = mainImageIndex === carouselPhotos.length - 1;
    isLastSlide ? setMainImageIndex(0) : setMainImageIndex(mainImageIndex + 1);
  };
  const prevSlide = () => {
    const isFirstSlide = mainImageIndex === 0;
    isFirstSlide
      ? setMainImageIndex(carouselPhotos.length - 1)
      : setMainImageIndex(mainImageIndex - 1);
  };
  return (
    <div className="photo-modal">
      <div className="modal__contents">
        <div className="modal-image-wrapper">
          <Icon
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="main-img-icon"
            icon="material-symbols:open-in-full-rounded"
          />
          <Icon
            onClick={() => prevSlide()}
            className="arrow-icon backward "
            icon="material-symbols:arrow-back-ios-rounded"
          />
          <Icon
            onClick={() => nextSlide()}
            className="arrow-icon forward "
            icon="material-symbols:arrow-forward-ios-rounded"
          />

          <img
            className="modal__img"
            src={require(`../../../assets/images/Picture${mainImageIndex}.jpg`)}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
