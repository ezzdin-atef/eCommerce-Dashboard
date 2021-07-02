import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * Modal Component to add modal
 * @props
 * btnClass: string (class name to the trigger btn)
 * text: string (trigger btn text)
 * modelClass: string (class name to the modal)
 * title: string (modal title)
 * successBtnClass: string (success btn class)
 * submitBtnText: string (success btn text)
 * cancelBtnClass: string (cancel btn class)
 * submitBtnText: string (cancel btn text)
 */

export default function Modal(props) {
  const [open, setOpen] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleClose = (e) => {
    if (e.target.closest(".content") == null) {
      setOpen(!open);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!props.submit()) return;

    setOpen(!open);
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, [open]);

  return (
    <>
      <button className={props.btnClass} onClick={handleShow}>
        {props.text}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={"modal " + props.modelClass}
            onClick={handleClose}
          >
            <motion.div animate={{ top: "35%" }} initial={{ top: "-10%" }} exit={{ top: "-30%" }} className="content">
              <header>
                <h3>{props.title}</h3>
                <i className="fas fa-times-circle" onClick={handleShow}></i>
              </header>
              <div className="main">{props.children}</div>
              <footer>
                <button id="submit" className={props.successBtnClass || "btn btn-primary"} onClick={handleSubmit}>
                  {props.submitBtnText ? props.submitBtnText : "Submit"}
                </button>
                <button id="close" className={props.cancelBtnClass || "btn btn-danger-light"} onClick={handleShow}>
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
