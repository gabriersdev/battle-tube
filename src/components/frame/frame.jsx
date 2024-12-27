import React from "react";
// import arrowOutward from "./arrow-outward.png";
import "./frame.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <p className="t-tulo-do-clipe-pode">
                TITULO DO CLIPE
                <br />
                PODE TER 2 LINHAS
              </p>

              <div className="username">USERNAME</div>
            </div>

            <div className="div-5">
              <div className="rectangle" />

              <div className="div-wrapper">
                <div className="text-wrapper">ESCOLHER ESTE</div>
              </div>
            </div>
          </div>

          <div className="div-3">
            <div className="div-4">
              <p className="t-tulo-do-clipe-pode">
                TITULO DO CLIPE
                <br />
                PODE TER 2 LINHAS
              </p>

              <div className="username">USERNAME</div>
            </div>

            <div className="div-5">
              <div className="rectangle" />

              <div className="div-wrapper">
                <div className="text-wrapper">ESCOLHER ESTE</div>
              </div>
            </div>
          </div>
        </div>

        <p className="p">
          <span className="span">
            Rodada 01/06
            <br />
          </span>

          <span className="text-wrapper-2">seleção 01/63</span>
        </p>

        <div className="username-2">SALVO!</div>

        <div className="div-6">
          <div className="username-3">EXPORTAR</div>

          <img
            className="arrow-outward"
            alt="Arrow outward"
            // src={arrowOutward}
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
