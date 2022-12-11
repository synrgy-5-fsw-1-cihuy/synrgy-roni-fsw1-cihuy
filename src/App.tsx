import "./assets/bootstrap.css";
import "./assets/style.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CarsPage from "./pages/Cars";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
