// import React, { useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ProjectDetailsModal from './ProjectDetailsModal';
// import image1 from '../images/web.png';
// import image2 from '../images/App.jpg';
// import image3 from '../images/Graphic.webp';
// import image4 from '../images/videoeditor.jpg';
// import image5 from '../images/2D Designs.png';
// import image6 from '../images/3D.webp';
// import image7 from '../images/arch.png';
// import { useNavigate } from 'react-router-dom';

// const carouselItems = [
//   {
//     images: [image1],
//     navigateTo: '/website',
//   },
//   {
//     images: [image2],
//     navigateTo: '/app',
//   },
//   {
//     images: [image3],
//     navigateTo: '/graphic',
//   },
//   {
//     images: [image4],
//     navigateTo: '/video',
//   },
//   {
//     images: [image5],
//     navigateTo: '/2D',
//   },
//   {
//     images: [image6],
//     navigateTo: '/3D',
//   },
//   {
//     images: [image7],
//     navigateTo: '/architecture',
//   }
// ];

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);
//   const [modalShow, setModalShow] = useState(false);
//   const [modalData, setModalData] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const handleSlideClick = (slideData) => {
//     setModalData(slideData);
//     setModalShow(true);
//   };

//   return (
//     <div>
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         {carouselItems.map((item, idx) => (
//           <Carousel.Item key={idx} onClick={() => handleSlideClick(item)}>
//             <img
//               src={item.images[0]}
//               alt={`Slide ${idx}`}
//               style={{
//                 width: '100%',
//                 height: isMobile ? '0%' : '800px', // Adjust height based on screen size
//                 objectFit: 'contain',
//                 backgroundColor: '#D7CAAA'
//               }}
//             />
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       {modalData && (
//         <ProjectDetailsModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           data={modalData}
//           navigate={navigate} // Pass the navigate function as a prop
//         />
//       )}
//     </div>
//   );
// }

// export default ControlledCarousel;


import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectDetailsModal from './ProjectDetailsModal';
import image1 from '../images/2.png';
import image2 from '../images/3.png';
import image3 from '../images/4.png';
import image4 from '../images/5.png';
import image5 from '../images/6.png';
import image6 from '../images/7.png';
import image7 from '../images/8.png';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss'

const carouselItems = [
  {
    images: [image1],
    navigateTo: '/Website Designing',
  },
  {
    images: [image2],
    navigateTo: '/App Development',
  },
  {
    images: [image3],
    navigateTo: '/Graphic Designing',
  },
  {
    images: [image4],
    navigateTo: '/Video Editing',
  },
  {
    images: [image5],
    navigateTo: '/2D Designer',
  },
  {
    images: [image6],
    navigateTo: '/3D Designer',
  },
  {
    images: [image7],
    navigateTo: '/Architecture Designing',
  }
];

  // Helper function to group items into sets of specified size
const groupItems = (items, groupSize) => {
  const groups = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groups.push(items.slice(i, i + groupSize));
  }
  return groups;
};

// Function to get the group size based on screen width
const getGroupSize = () => {
  if (window.innerWidth <= 768) {
    return 1;
  } if (window.innerWidth <= 1440) {
    return 2;
  }else{
    return 3;
  }
};

function Projects() {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [groupSize, setGroupSize] = useState(getGroupSize());
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setGroupSize(getGroupSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleSlideClick = (slideData) => {
    setModalData(slideData);
    setModalShow(true);
  };

  const groupedItems = groupItems(carouselItems, groupSize);
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Carousel style={{margin: '80px 10px'}} activeIndex={index} onSelect={handleSelect} indicators={false} interval={null}>
        {groupedItems.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-center">
              {group.map((item, itemIdx) => (
                <Card className="card-custom" onClick={() => handleSlideClick(item)} key={itemIdx}>
                  <Card.Img className="card-img-custom" variant="top" src={item.images[0]} />
                  <Card.Body style={{padding: '50px 50px'}}>
                    <Card.Title className="card-title-custom">{item.navigateTo.replace('/', '')}</Card.Title>
                    <Card.Text className="card-text-custom">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button className="btn-custom" onClick={() => navigate(item.navigateTo)}>Click Me</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {modalData && (
        <ProjectDetailsModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={modalData}
          navigate={navigate} 
        />
      )}
    </div>
  );
}

export default Projects;





  