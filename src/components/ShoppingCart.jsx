import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { connect } from 'react-redux';

const ShoppingCart = props => {
  const [open, setOpen] = useState(false);
  const  dropdownMenu = useRef(null);
  // clickOutside(dropdownMenu);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDelete = (id) => {
    props.dispatch({ type: "DELETE_ITEM_SHOPPING_CART", payload: { id: id } });
  }

  const handleCountChange = (e, id) => {
    props.dispatch({ type: "UPADTE_ITEM_COUNT_SHOPPING_CART", payload: { id: id, count: e.target.value } })
  }

  const calculateTheSum = () => {
    let price = 0;
    props.shoppingCart.map(el => price += parseInt(el.price, 10) * el.count);
    return price;
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
      <li onClick={handleOpen}><i className="fas fa-shopping-cart"></i><span>{props.shoppingCart.length}</span></li>
      {open && <motion.div ref={dropdownMenu} className="shopping-cart" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {props.shoppingCart.length === 0? <p className="alter">There is no items</p> : (
          <>
            <ul>
            {props.shoppingCart.map(el => (
              <React.Fragment key={el.id}>
                <li>
                  <span className="fas fa-times close" onClick={() => handleDelete(el.id)}></span>
                  <div className="item">
                    <div className="item-img">
                      <img src={el.img} alt={el.title} />
                    </div>
                    <div className="item-details">
                      <h4>{el.title}</h4>
                      <p>${el.price}</p>
                    </div>
                    <input type="number" className="counter" value={el.count} max={el.stock} onChange={(e) => handleCountChange(e, el.id)} onKeyDown={(e) => e.preventDefault()} />
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <footer>
            <p>${calculateTheSum()}</p>
            <button className="btn btn-primary"><i className="fas fa-check"></i> Check Out</button>
          </footer>
        </>
        )}
      </motion.div>}
    </div>
  );
}
 
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart
  };
}
export default connect(mapStateToProps)(ShoppingCart);