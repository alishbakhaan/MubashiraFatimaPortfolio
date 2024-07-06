import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, videoUrl, url}) => {
  const linkUrl = imgUrl || videoUrl;
  return (
    <Col size={12} sm={6} md={4} style={{ cursor: 'pointer' }}>
      <div className="proj-imgbx">
        {imgUrl ? (
          <img src={imgUrl} alt={title} />
        ) : videoUrl ? (
          <video width="100%" autoPlay loop muted>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="no-media"></div>
        )}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <div className="proj-txtx">

            <h4>{title}</h4>
            <a href={url} target="_blank" rel="noopener noreferrer"
             style={{color: 'white', textDecoration: 'none',}}>
              <span>{description}</span>
              </a>
          </div>
        </a>
      </div>
    </Col>
  );
};
