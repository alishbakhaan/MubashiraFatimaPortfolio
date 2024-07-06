import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "03141232363";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          <span className="m-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} />
            </a>
          </span>
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy; Your Name
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
