import Header from "./components/Header/Header";
import Footer from "./pages/Home/components/Footer";
import Home from "./pages/Home/Home";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <Home isOpen={isOpen} setIsOpen={setIsOpen}></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
