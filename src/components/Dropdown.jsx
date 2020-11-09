import React, { useEffect, useState } from 'react';
import { Flipped } from 'react-flip-toolkit';
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Dropdown = props => {
  const [open, setOpen] = useState(false);
  const icon = React.createRef();


  const dropdown = (e) => {
    if (e.target.tagName !== "A" ||  e.target.href.endsWith("/")) {
      icon.current.classList.toggle("open");
      setOpen(!open);
      props.dropdownSatusChange();
    }
  }

  useEffect(() => {
    if (props.location.pathname.includes(props.link)) {
      setOpen(true);
      props.dropdownSatusChange();
    } else {
      setOpen(false);
      props.dropdownSatusChange();
      icon.current.classList.remove("open");
    }
    // eslint-disable-next-line
  }, [props.location.pathname]);

  return (
    <Flipped flipId={props.link} translate>
      <li className={props.location.pathname.includes(props.link)? "dropdown open" : "dropdown" } onClick={dropdown} ref={icon}><Link to="/" className={props.location.pathname.includes(props.link)? "active" : ""} onClick={(e) => e.preventDefault()}>{props.icon} <span>{props.title}</span></Link>
        <Flipped flipId={Math.random()}>
          {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <ul>
              {Object.keys(props.subMenu).map((key) => (
                <li key={props.subMenu[key]}><NavLink to={props.link + props.subMenu[key]}>{key}</NavLink></li>
              ))}
            </ul>
          </motion.div>}
        </Flipped>
      </li>
    </Flipped>
  );
}

export default Dropdown;