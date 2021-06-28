import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/shoppingCart";

const ShoppingCart = (props) => {
  const [open, setOpen] = useState(false);
  const dropdownMenu = useRef(null);
  const cart = useSelector((state) => state.shoppingCart.value);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const calculateTheSum = () => {
    let price = 0;
    cart.map((el) => (price += parseInt(el.price, 10) * el.count));
    return price;
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
        <i className="fas fa-shopping-cart"></i>
        <span>{cart.length}</span>
      </li>
      {open && (
        <motion.div
          ref={dropdownMenu}
          className="shopping-cart"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {cart.length === 0 ? (
            <p className="alter">There is no items</p>
          ) : (
            <>
              <ul>
                {cart.map((el) => (
                  <React.Fragment key={el.id}>
                    <li>
                      <span className="fas fa-times close" onClick={() => dispatch(remove(el.id))}></span>
                      <div className="item">
                        <div className="item-img">
                          <img src={el.img} alt={el.title} />
                        </div>
                        <div className="item-details">
                          <h4>{el.title}</h4>
                          <p>${el.price}</p>
                        </div>
                        <input
                          type="number"
                          className="counter"
                          value={el.count}
                          max={el.stock}
                          min="1"
                          onChange={(e) => dispatch(add({ id: el.id, value: e.target.value }))}
                          onKeyDown={(e) => e.preventDefault()}
                        />
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
              <footer>
                <p>${calculateTheSum()}</p>
                <button className="btn btn-primary">
                  <i className="fas fa-check"></i> Check Out
                </button>
              </footer>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ShoppingCart;
