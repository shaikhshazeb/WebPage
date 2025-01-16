import React from "react";
import "./ScndHero.css";
import "./ScndHeroMedia.css";
import bg from "../../assets/bgimg.svg";
const ScndHero = () => {
  return (
    <div className="Hero-Section2">
      <div className="inner-cont2">
        <div id="heading2">
          Beautypreneur<span>.</span>
        </div>

        <div id="para2">
          <p>
            Bukan sekedar bisnis yang hits dengan segudang untung. Tren
            beautypreneur di Indonesia sudah mulai terlihat sejak beberapa tahun
            terakhir, industri kecantikan dalam negeri maulai berkembang pesat.
          </p>
        </div>
        <div id="mini"></div>
      </div>
      <div className="outer-cont2">
        <img src={bg} alt="" className="bgmi" />
        {/* <div id="c1"></div>
        <div id="c2"></div> */}
        <div class="card1">
          <h1>50%</h1>
          <p>
            Bingun bagaimana caranya memulai bisnis healthy beauty. Sedangkan
            demand di sektor ini begitu melimpah.
          </p>
        </div>
        <div class="card2">
          <h1>23.7%</h1>
          <p>
            Bingun bagaimana caranya memulai bisnis healthy beauty. Sedangkan
            demand di sektor ini begitu melimpah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScndHero;
