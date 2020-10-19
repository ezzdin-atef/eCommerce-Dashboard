import React from 'react';

const WishlistCard = props => {
  return (
    <div className="card-block">
      <div className="card">
        <div className="card-img">
          <img src={props.img} alt=""/>
        </div>
        <div className="card-content">
          <h4>{props.title}</h4>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary"><i className="fas fa-cart-plus"></i> Add To Cart</button>    
          <span>${props.price}</span>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard;