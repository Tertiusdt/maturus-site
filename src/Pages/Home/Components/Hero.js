import "./Hero.css";
import VectorSVG from "../../../Assets/Vector.svg";
import LogoSceneStage from "./../../../LogoSceneStage/LogoSceneStage";

const Hero = () => {
  return (
    <>
      <div className="wrapper">
        <div className="scene-wrapper">
          <div className="logo-wrapper">

          <LogoSceneStage />
          </div>
        <div className="image-wrapper">
          <img src={require("../../../Assets/maturus-digita1l.png")} />
        </div>

        </div>
        <div className="footer">

      <div className="slogan">
        <h4>Helping your business reach success in the digital landscape</h4>
      </div>
          <div className="scroll-indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="41"
              viewBox="0 0 31 41"
              fill="none"
              >
              <path
                id="Arrow1"
                d="M30 24.6284L15.5 39L1 24.6284"
                stroke="black"
                strokeWidth="2"
                />
              <path
                id="Arrow2"
                d="M30 12.7687L15.5 27.1403L1 12.7687"
                stroke="black"
                strokeWidth="2"
                />
              <path
                id="Arrow3"
                d="M30 1L15.5 15.3716L1 1"
                stroke="black"
                strokeWidth="2"
                />
            </svg>
                </div>
          </div>
      </div>
    </>
  );
};

export default Hero;
