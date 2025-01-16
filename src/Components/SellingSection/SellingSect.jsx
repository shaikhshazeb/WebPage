import React from "react";
import "./SellingSect.css";
import "./SellingSectMedia.css";
import spone from "../../assets/spone.svg";
import sptwo from "../../assets/sptwo.svg";
import spthree from "../../assets/spthree.svg";
import spfour from "../../assets/spfour.svg";
import bg from "../../assets/bgimg.svg";
import grp_img from "../../assets/Group.svg";
const SellingSect = () => {
  return (
    <div className="selling-section">
      <div id="main-hd">
        <big>
          <h1>
            Beauty Selling <span>with</span> Digital Patterns.
          </h1>
        </big>
        <p>
          Pasar yang besar ditunjang dengan wadah yang tepat, insyaAllah akan
          bebuah keberhasilan
        </p>
      </div>
      <div className="innner-sl">
        <div className="inside-sl">
          {/* <div id="c3"></div>
          <div id="c4"></div> */}
          <img src={bg} alt="" className="bgmi" />
          <div class="card12">
            <img src={spone} alt="" />
          </div>

          <div class="card21">
            <img src={sptwo} alt="" />
          </div>
          <div class="card31">
            <img src={spthree} alt="" />
          </div>
          <div class="card32">
            <img src={spfour} alt="" />
          </div>
        </div>

        <div className="inner-cont3">
          <div id="mini2"></div>
          <div id="heading3">
            Bukan saatnya menunda <span>digitalisasi.</span>
          </div>

          <div id="para3">
            <p>
              Ayo kita hadapi bersama era peralihan ini. Beautieslife.id akan
              bantu kamu belajar berbisnis dengan berbagai tools digital yang
              diharapkan akan mendorong kemudahan dan kelancaran bisnis beauty
              kamu.
            </p>
          </div>
          <div id="radio2">
            <a href="#">
              <ul>
                <li>
                  <img src={grp_img} alt="" /> &nbsp; Udah bukan jamannya gaptek
                </li>

                <li>
                  <img src={grp_img} alt="" /> &nbsp; Udah gak ada lagi bingung
                  pake tools apaan
                </li>

                <li>
                  <img src={grp_img} alt="" /> &nbsp; Gak ada lagi istilah siapa
                  yang bakan ngajarin aku
                </li>

                <li>
                  <img src={grp_img} alt="" /> &nbsp; Udah bukan musimnya jalan
                  sendirian!!
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default SellingSect;
