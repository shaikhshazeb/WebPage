import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Components/Header/Navbar";
import HeroSection from "./Components/HeroSect/HeroSection";
import ScndHero from "./Components/SecondHeroSec/ScndHero";
import SellingSect from "./Components/SellingSection/SellingSect";
import Cards from "./Components/Cards/Cards";
import Customers from "./Components/Customer/Customers";
import Test from "./Components/Testinomials/Test";
import Footers from "./Components/Footer/Footers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <ScndHero />
    <SellingSect />
    <Cards />
    <Customers />
    <Test />
    <Footers />
  </StrictMode>
);
