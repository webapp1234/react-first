import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Productdeti from "./components/pages/Productdeti";

let App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Productdeti />} />
      </Routes>
    </>
  );
};

export default App;
