import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Flipper, Flipped } from "react-flip-toolkit";
import { motion } from "framer-motion";
import { remove } from "../redux/wishlist";
import { add } from "../redux/shoppingCart";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  const handleAddToCart = (el) => {
    toast.success("The Item added successfully 🎉 ");
    dispatch(add({ ...el }));
  };

  const AlterDiv = () => {
    return (
      <motion.div className="alter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3>
          You Don't Have Any Items in your wishlist{" "}
          <span role="img" aria-label="Sad Emoji">
            🙁
          </span>
        </h3>
        <Link to="/">Explore Now</Link>
      </motion.div>
    );
  };

  return (
    <div className="wishlist">
      <header>
        <h2>Your Wishlist</h2>
      </header>
      {wishlist.length !== 0 ? (
        <Flipper flipKey={wishlist}>
          <div className="wishlist-content">
            {wishlist.map((el) => (
              <Flipped key={el.id} flipId={el.id}>
                <div key={el.id} className="card-block">
                  <div className="card">
                    <div className="card-img">
                      <img src={el.img} alt="" />
                      <span onClick={() => dispatch(remove(el.id))}>
                        <i className="fas fa-heart"></i>
                      </span>
                    </div>
                    <div className="card-content">
                      <h4>{el.title}</h4>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-primary" onClick={() => handleAddToCart(el)}>
                        <i className="fas fa-cart-plus"></i> Add To Cart
                      </button>
                      <span className="price">${el.price}</span>
                    </div>
                  </div>
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
      ) : (
        <AlterDiv />
      )}
    </div>
  );
};

export default Wishlist;
