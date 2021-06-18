import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Flipper, Flipped } from "react-flip-toolkit";
import { motion } from "framer-motion";

const Wishlist = (props) => {
  const handleDelete = (id) => {
    props.dispatch({ type: "DELETE_WISHLIST", payload: { id: id } });
  };

  const handleAddToCart = (el) => {
    toast.success("The Item added successfully 🎉 ");
    props.dispatch({ type: "ADD_TO_SHOPPING_CART", payload: { ...el } });
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
      {props.wishlist.length !== 0 ? (
        <Flipper flipKey={props.wishlist}>
          <div className="wishlist-content">
            {props.wishlist.map((el) => (
              <Flipped key={el.id} flipId={el.id}>
                <div key={el.id} className="card-block">
                  <div className="card">
                    <div className="card-img">
                      <img src={el.img} alt="" />
                      <span onClick={() => handleDelete(el.id)}>
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

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  };
};

export default connect(mapStateToProps)(Wishlist);
