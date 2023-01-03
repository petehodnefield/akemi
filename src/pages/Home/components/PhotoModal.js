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
          <div className="new-wrapper">
            {" "}
            <Icon
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
              className="main-img-icon close-icon"
              icon="ri:close-circle-line"
            />
            <Icon
              onClick={() => prevSlide()}
              className="arrow-icon backward "
              icon="material-symbols:arrow-circle-left-outline-rounded"
            />
            <Icon
              onClick={() => nextSlide()}
              className="arrow-icon forward "
              icon="material-symbols:arrow-circle-right-outline-rounded"
            />
            <img
              className="modal__img"
              src={require(`../../../assets/images/Picture${mainImageIndex}.jpg`)}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
