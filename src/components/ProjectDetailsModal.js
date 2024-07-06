import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = (props) => {
  const { data, navigate } = props; // Destructure navigate from props

  if (data) {
    const images = data.images;

    if (data.images) {
      var img = images.map((elem, i) => {
        return <div key={i} data-src={elem} />;
      });
    }
  }

  const handleNavigate = () => {
    // Ensure navigateTo is defined before using it
    if (data && data.navigateTo) {
      navigate(data.navigateTo);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
          
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <div className="col-md-12 text-center">
            <button
              
              style={{ fontSize: "2rem", backgroundColor: "#D7CAAA", padding: "1rem", margin: "2rem", border: "none", objectFit: 'contain' }}
              onClick={handleNavigate}
            >
              Explore Here
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
