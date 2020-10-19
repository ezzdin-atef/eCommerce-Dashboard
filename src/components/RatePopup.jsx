import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const RatePopup = (props) => {
  const [open, setOpen] = useState(false);
  
  const handleShow = (e) => {
    e.preventDefault();
    setOpen(!open);
    document.removeEventListener('click', handleClose);
  }

  const handleSave = (e) => {
    e.preventDefault();
    console.log("save"); // Save to database
    setOpen(!open);
    document.removeEventListener('click', handleClose);
  }

  const handleClose = (e) => {
    if (e.target.closest(".content") == null) {
      setOpen(!open);
      document.removeEventListener('click', handleClose);
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClose);
    }
    // eslint-disable-next-line
  }, [open]);

  const handleClickStars = (e) => {
    console.log("lm");
    e.target.className = "fas fa-star";
    let prev = e.target.previousSibling;
    while (prev) {
      prev.className = "fas fa-star";
      prev = prev.previousSibling;
    }
    let next = e.target.nextSibling;
    while (next) {
      next.className = "far fa-star";
      next = next.nextSibling;
    }
  }

  return (
    <>
      <a href="javascript.popup" onClick={handleShow}>Rate The Product</a>
      {open && (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="popup">
          <motion.div animate={{ top: "35%" }} initial={{ top: "-10%" }} className="content">
            <header>
              <h3>Rate {props.title}</h3>
              <i className="fas fa-times-circle" onClick={handleShow}></i>
            </header>
            <div className="main">
              <div className="stars">
                <i className="far fa-star" onClick={handleClickStars}></i>
                <i className="far fa-star" onClick={handleClickStars}></i>
                <i className="far fa-star" onClick={handleClickStars}></i>
                <i className="far fa-star" onClick={handleClickStars}></i>
                <i className="far fa-star" onClick={handleClickStars}></i>
              </div>
            </div>
            <footer>
              <button id="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
              <button id="close" className="btn" onClick={handleShow}>Close</button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default RatePopup;