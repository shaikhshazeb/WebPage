import React from "react";
import "./HeroSection.css";
import "./HeroMedia.css";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import grp_img from "../../assets/Group.svg";
import hr_img from "../../assets/Himg.svg";

const HeroSection = () => {
  return (
    <div className="Hero-Section">
      <div className="inner-cont">
        <div id="heading">
          Pasti berat kalo lari sendirian<span>.</span>
        </div>

        <div id="para">
          <p>
            Setiap hal pasti butuh hal lain untuk membersamai. Begitupun dengan
            bisnis, Beautieslfie.id hadir untuk membersamai kalian untuk menjadi
            Beautypreneur. Siapapun kamu!!
          </p>
        </div>
        <div id="radio">
          <a href="#">
            <ul>
              <img src={grp_img} alt="" />
              <li>Mahasiswi</li>
              <img src={grp_img} alt="" />
              <li>Ibu&nbsp;Rumah&nbsp;Tangga</li>
              <img src={grp_img} alt="" />
              <li>Career&nbsp;Hunter</li>
            </ul>
          </a>
        </div>

        <button id="bottone1">
          <strong>1st Indonesian Beautypreneur Community</strong>
          <p id="btn1">
            Dengan berbagai fasilitas “advance disigital platform”.
          </p>
        </button>
      </div>
      <div className="outer-cont">
        <img src={hr_img} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
