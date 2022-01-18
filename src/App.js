import { Fragment } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Discounts from "./components/Discounts";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />

                <Hero />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Navbar />
                <Menu />
                <Footer />
              </>
            }
          />
          <Route
            path="/discounts"
            element={
              <>
                <Navbar />
                <Discounts />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
