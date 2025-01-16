import React from "react";
import "./Test.css";
import "./TestMedia.css";
import girl from "../../assets/girls.svg";
import { GoArrowRight } from "react-icons/go";
const Test = () => {
  return (
    <div className="test">
      <div id="headss">
        <p>Testimonial</p>
        <big>
          Apa kata <span>mereka</span> ?
        </big>
      </div>

      <div className="inner-got">
        <div id="girl">
          <img src={girl} alt="" className="kit" />
        </div>
        <div id="headd">
          Annabel Rohan <br />
          <span>Leader Nasional JAFRA Executive</span>
          <p>
            Arcu sed etiam proin natoque at lectus aliquam. Faucibus ipsum porta
            eleifend facilisis cras in. Sed etiam proin natoque at lectus
            aliquam. Faucibus ipsum porta eleifend facilisis cras in.
          </p>
          <span id="Button">
            <input type="button" value="next" />
            <GoArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Test;
