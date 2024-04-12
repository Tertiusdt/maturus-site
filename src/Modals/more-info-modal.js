import { useEffect, useState } from "react";
import ServicesData from "./../Data/Services-data";

import "./more-info-modal.css";

const MoreInfoModal = ({ data, activeService, setModalActive }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    setService(data.filter((item) => item.id === activeService)[0]);
  }, [activeService]);

  return (
    <div className="modal">
      <div className="close" onClick={() => setModalActive(false)}>
        X
      </div>
        <div className="modal-header">
          <h2>{service?.name}</h2>
        </div>
      <div className="modal-text-wrapper">
        <div className="service-text">{service?.descriptionLong}</div>
      </div>
    </div>
  );
};

export default MoreInfoModal;
