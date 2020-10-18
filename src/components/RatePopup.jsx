import React, { useState } from 'react';
import { motion } from "framer-motion";

const RatePopup = (props) => {
  const [open, setOpen] = useState(false);
  
  const handleShow = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  const handleSave = () => {
    console.log("save"); // Save to database
    setOpen(false);
  }

  return (
    <>
      <a href="#" onClick={handleShow}>Rate The Product</a>
      {open && (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="popup">
          <motion.div animate={{ top: "35%" }} initial={{ top: "-10%" }} className="content">
            <header>
              <h3>Rate {props.title}</h3>
              <i className="fas fa-times-circle" onClick={handleShow}></i>
            </header>
            <div className="main">
              <div className="stars">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <footer>
              <button id="submit" onClick={handleSave}>Submit</button>
              <button id="close" onClick={handleShow}>Close</button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default RatePopup;