import React from "react";
import "./Cards.css";
import bh from "../../assets/bg22.svg";
import b from "../../assets/bh2.svg";
import h from "../../assets/bg11.svg";
import iw from "../../assets/i.svg";
import lg from "../../assets/lg1.svg";
import lgb1 from "../../assets/lgb.svg";
import pi1 from "../../assets/pi.svg";
import pb1 from "../../assets/pb.svg";
import ci from "../../assets/c1.svg";
import cb1 from "../../assets/cb.svg";
import tit from "../../assets/ti.svg";
import tib from "../../assets/tb.svg";
import fit from "../../assets/fi.svg";
import fib from "../../assets/fb.svg";
import rit from "../../assets/ri.svg";
import rib from "../../assets/rb.svg";
import bgs1 from "../../assets/bgs.svg";
import "./CardsMedia.css";
const Cards = () => {
  return (
    <div className="main-cards">
      <div id="mini2"></div> <br />
      <div className="card-heading">
        <h1>
          Pokonya udah pasti kita bimbing, dengan
          <span> berbagai fasilitas. </span>
        </h1>
      </div>
      <img src={bgs1} alt="" className="bgg" />
      <div className="Carrds">
        <div class="card0">
          <span>
            <img src={bh} alt="" className="ig1" />
          </span>
          <span>
            {" "}
            <img src={iw} alt="" className="ig2" />
          </span>
          <p>Intens Mentoring</p>
        </div>
        <div class="card0">
          <span>
            <img src={b} alt="" className="ig3" />
          </span>
          <span>
            {" "}
            <img src={h} alt="" className="ig4" />
          </span>
          <p>Kajian Rutin</p>
        </div>
        <div class="card0">
          <span>
            <img src={lgb1} alt="" className="ig3" />
          </span>
          <span>
            {" "}
            <img src={lg} alt="" className="ig4" />
          </span>
          <p>Rewards..</p>
        </div>
        <div class="card0">
          <span>
            <img src={pb1} alt="" className="ig1" />
          </span>
          <span>
            {" "}
            <img src={pi1} alt="" className="ig2" />
          </span>
          <p>Free Web Profile</p>
        </div>
        <div class="card0">
          <span>
            <img src={cb1} alt="" className="ig1" />
          </span>
          <span>
            {" "}
            <img src={ci} alt="" className="ig2" />
          </span>
          <p>Kelas Bisnis</p>
        </div>
        <div class="card0">
          <span>
            <img src={tib} alt="" className="ig1" />
          </span>
          <span>
            {" "}
            <img src={tit} alt="" className="ig2" />
          </span>
          <p>Kelas Digital</p>
        </div>
        <div class="card0">
          <span>
            <img src={fib} alt="" className="ig1" />
          </span>
          <span>
            {" "}
            <img src={fit} alt="" className="ig2" />
          </span>
          <p>Kelas Skin Care</p>
        </div>
        <div class="card0">
          <span>
            <img src={rib} alt="" className="ig1" />
          </span>
          <span>
            {" "}
            <img src={rit} alt="" className="ig2" />
          </span>
          <p>Product Knowledge</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
