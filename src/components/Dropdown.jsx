import React, { useEffect, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';


const Dropdown = props => {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(props.items);
  const  dropdownMenu = React.createRef();

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDelete = (e) => {
    setNotification(notification.filter(el => el !== e.target.closest("li").innerText));
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
    <Flipper flipKey={open} spring="stiff">
      <div className="dropdown">
        <Flipped flipId="dropdown-link">
          <li onClick={handleOpen} ref={dropdownMenu}>{props.title}<span>{notification.length}</span></li>
        </Flipped>
        <Flipped flipId="dropdown-content">
          <ul className={open? "notification d-block": "notification d-none"}>
            {notification.map((el, index) => (
              <React.Fragment key={index}>
                <li>{el} <span className="fas fa-times close" onClick={handleDelete}></span></li> 
              </React.Fragment>
            ))}
          </ul>
        </Flipped>
      </div>
    </Flipper>
  );
}
 
export default Dropdown;