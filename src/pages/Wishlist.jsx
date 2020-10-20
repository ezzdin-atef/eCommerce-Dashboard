import React from 'react';  
import { connect } from "react-redux";
import { toast } from 'react-toastify';

const Wishlist = props => {

  const handleDelete = (id) => {
    props.dispatch({ type: "DELETE_WISHLIST", payload: { id: id } });
  }

  const handleAddToCart = (el) => {
    toast.success("The Item added successfully 🎉 ");
    props.dispatch({ type: "ADD_TO_SHOPPING_CART", payload: { ...el } });
  }

  return (
    <div className="wishlist">
      <header>
        <h2>Your Orders</h2>
      </header>
      <div className="wishlist-content">
        {props.wishlist.map(el => (
          <div key={el.id} className="card-block">
            <div className="card">
              <div className="card-img">
                <img src={el.img} alt=""/>
                <span onClick={() => handleDelete(el.id)}><i className="fas fa-heart"></i></span>
              </div>
              <div className="card-content">
                <h4>{el.title}</h4>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={() => handleAddToCart(el)}><i className="fas fa-cart-plus"></i> Add To Cart</button>    
                <span>${el.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist
  };
}
 
export default connect(mapStateToProps)(Wishlist);