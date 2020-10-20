import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { connect } from 'react-redux';


const Notifications = props => {
  const [open, setOpen] = useState(false);
  const  dropdownMenu = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDelete = (e) => {
    props.dispatch({ type: 'DELETE_NOTIFICATION', payload: { element: e.target.closest("li").innerText } });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownMenu.current && !dropdownMenu.current.contains(event.target)) {
        setOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownMenu]);

  return (
    <div className="dropdown">
      <li onClick={handleOpen}><i className="fas fa-bell"></i><span>{props.notifications.length}</span></li>
      {open && <motion.div ref={dropdownMenu} className="notification" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {props.notifications.length === 0? <p className="alter">There is no notification</p> : 
        <ul>
          {props.notifications.map((el, index) => (
            <React.Fragment key={index}>
              <li>{el} <span className="fas fa-times close" onClick={handleDelete}></span></li> 
            </React.Fragment>
          ))}
        </ul>
        }
      </motion.div>}
    </div>
  );
}
 
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  };
}
export default connect(mapStateToProps)(Notifications);