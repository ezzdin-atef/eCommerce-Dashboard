import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/notifications";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const dropdownMenu = useRef(null);
  const notifications = useSelector((state) => state.notifications.value);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownMenu.current && !dropdownMenu.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenu]);

  return (
    <div className="dropdown">
      <li onClick={handleOpen}>
        <i className="fas fa-bell"></i>
        <span>{notifications.length}</span>
      </li>
      {open && (
        <motion.div
          ref={dropdownMenu}
          className="notification"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {notifications.length === 0 ? (
            <p className="alter">There is no notification</p>
          ) : (
            <ul>
              {notifications.map((el, index) => (
                <React.Fragment key={index}>
                  <li>
                    {el} <span className="fas fa-times close" onClick={() => dispatch(remove(el))}></span>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Notifications;
