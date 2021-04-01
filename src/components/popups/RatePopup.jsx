import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const RatePopup = (props) => {
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState(null);
  
  const handleShow = (e) => {
    e.preventDefault();
    setOpen(!open);
    document.removeEventListener('click', handleClose);
  }

  const handleSave = (e) => {
    e.preventDefault();
    // Save to database
    props.dispatch({ type: "ADD_RATE", payload: { id: props.id, rate: rate  } });
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

  const handleClickStars = (e, rate) => {
    setRate(rate);
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
      <AnimatePresence>
        {open && (
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="popup">
            <motion.div animate={{ top: "35%" }} initial={{ top: "-10%" }} exit={{ top: "-10%" }} className="content">
              <header>
                <h3>Rate {props.title}</h3>
                <i className="fas fa-times-circle" onClick={handleShow}></i>
              </header>
              <div className="main">
                <div className="stars">
                  <i className="far fa-star" onClick={(e) => handleClickStars(e, "1")}></i>
                  <i className="far fa-star" onClick={(e) => handleClickStars(e, "2")}></i>
                  <i className="far fa-star" onClick={(e) => handleClickStars(e, "3")}></i>
                  <i className="far fa-star" onClick={(e) => handleClickStars(e, "4")}></i>
                  <i className="far fa-star" onClick={(e) => handleClickStars(e, "5")}></i>
                </div>
              </div>
              <footer>
                <button id="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
                <button id="close" className="btn btn-danger-light" onClick={handleShow}>Close</button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default connect()(RatePopup);