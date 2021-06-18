import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal(props) {
  const [open, setOpen] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setOpen(!open);
    document.removeEventListener("click", handleClose);
  };

  const handleClose = (e) => {
    if (e.target.closest(".content") == null) {
      setOpen(!open);
      document.removeEventListener("click", handleClose);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!props.submit()) return;

    setOpen(!open);
    document.removeEventListener("click", handleClose);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClose);
    }
    // eslint-disable-next-line
  }, [open]);

  return (
    <>
      <button className="modal-btn" onClick={handleShow}>
        {props.text}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={"modal " + props.className}
          >
            <motion.div animate={{ top: "35%" }} initial={{ top: "-10%" }} exit={{ top: "-30%" }} className="content">
              <header>
                <h3>{props.title}</h3>
                <i className="fas fa-times-circle" onClick={handleShow}></i>
              </header>
              <div className="main">{props.children}</div>
              <footer>
                <button id="submit" className="btn btn-primary" onClick={handleSubmit}>
                  {props.submitBtnText ? props.submitBtnText : "Submit"}
                </button>
                <button id="close" className="btn btn-danger-light" onClick={handleShow}>
                  {props.closexBtnText ? props.submitBtnText : "Close"}
                </button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
