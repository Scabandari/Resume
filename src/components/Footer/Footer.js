import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer" style={{ backgroundColor: "#000000" }}>
      <Link to="/contact">
        <h5 className="container" style={{ color: "white" }}>
          Contact
        </h5>
      </Link>

      <div className="footer-copyright">
        <div className="container">© 2019 Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
