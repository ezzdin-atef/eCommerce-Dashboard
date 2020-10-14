import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { connect } from 'react-redux';


const Dropdown = props => {
  const [open, setOpen] = useState(false);
  const  dropdownMenu = React.createRef();

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDelete = (e) => {
    // setNotification(notification.filter(el => el !== e.target.closest("li").innerText));
    props.dispatch({ type: 'DELETE_NOTIFICATION', element: e.target.closest("li").innerText });
  }

  useEffect(() => {
    const handleClose = (e) => {
      if (e.target.closest(".notification") == null) {
        setOpen(!open);
        document.removeEventListener('click', handleClose);
      }
    }
    if (open) {
      document.addEventListener('click', handleClose);
    }
  }, [open]);

  return (
    <div className="dropdown">
      <li onClick={handleOpen} ref={dropdownMenu}>{props.title}<span>{props.notifications.length}</span></li>
      {open && <motion.ul className="notification" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {props.notifications.length == 0? <span className="alter">There is no notification</span> : props.notifications.map((el, index) => (
          <React.Fragment key={index}>
            <li>{el} <span className="fas fa-times close" onClick={handleDelete}></span></li> 
          </React.Fragment>
        ))}
      </motion.ul>}
    </div>
  );
}
 
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  };
}
export default connect(mapStateToProps)(Dropdown);