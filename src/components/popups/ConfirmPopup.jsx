import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmPopup = props => {
  const [open, setOpen] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setOpen(!open);
    document.removeEventListener('click', handleClose);
  }

  const handleClose = (e) => {
    if (e.target.closest(".content") == null) {
      setOpen(!open);
      document.removeEventListener('click', handleClose);
    }
  }

  const handleConfirm = () => {
    props.dispatch({ type: "DELETE_PRODUCT", payload: { id: props.id } })
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClose);
    }
    // eslint-disable-next-line
  }, [open]);

  return (
    <>
      <button className="btn btn-danger-light" onClick={handleShow}><i className="fas fa-trash-alt"></i> Delete</button>
      <AnimatePresence>
        {open && (
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}  className="popup">
            <motion.div animate={{ top: "35%" }} initial={{ top: "-10%" }} exit={{ top: "-10%" }} className="content">
              <header>
                <h3>Are you sure</h3>
                <i className="fas fa-times-circle" onClick={handleShow}></i>
              </header>
              <div className="main">
                <p>Are you sure you waىt to delete "{props.title}"</p>
              </div>
              <footer>
                <button id="submit" className="btn btn-danger" onClick={handleConfirm}>Confirm</button>
                <button id="close" className="btn btn-light" onClick={handleShow}>Close</button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default connect()(ConfirmPopup);