import React, { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import "./Home.css";
import Intro from "./components/Intro";
import PhotoCarousel from "./components/PhotoCarousel";
import PhotoModal from "./components/PhotoModal";
import { carouselPhotos } from "../../data/carousel-photos";
import Singles from "./components/Singles";
import Stages from "./components/Stages";
import StyleDescription from "./components/StyleDescription";

const Home = ({ isOpen, setIsOpen }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  return (
    <div onClick={() => setIsOpen(false)} className="container">
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
      <Intro></Intro>
      <div className="wrapper margin">
        {" "}
        <StyleDescription></StyleDescription>
        <PhotoCarousel
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          mainImageIndex={mainImageIndex}
          setMainImageIndex={setMainImageIndex}
          carouselPhotos={carouselPhotos}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></PhotoCarousel>
      </div>
      <Stages></Stages>
      <Singles></Singles>
      <Form></Form>
    </div>
  );
};

export default Home;
