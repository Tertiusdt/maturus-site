import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import MoreInfoModal from "./Modals/more-info-modal";
import { useState,useEffect, useRef } from "react";
import ServicesData from "./Data/Services-data";
import LogoSceneStage from "./LogoSceneStage/LogoSceneStage";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const page = useRef()

  useEffect(()=> {
    if (modalActive) {
      document.documentElement.classList.add('disable-scroll');
    } else {
      document.documentElement.classList.remove('disable-scroll');
    }
  },[modalActive])

  return (
    <div className="App">
     
      {modalActive && (
        <div className="modal-container">
          <MoreInfoModal data={ServicesData} activeService={activeService} setModalActive={setModalActive} />
        </div>
      )}
     <div ref={page}>

      <Home
        setModalActive={setModalActive}
        modalActive={modalActive}
        activeService={activeService}
        setActiveService={setActiveService}
        />
        </div>
    </div>
  );
}

export default App;
