import React from 'react';
import { connect } from "react-redux";
import ConfirmPopup from "../components/popups/ConfirmPopup";

const Products = props => {

  return (
    <div className="products">
      <header>
        <h2>Your Products</h2>
        <button className="btn btn-primary"><i className="fas fa-plus"></i> Add New</button>
      </header>
      <div className="products-content">
        {props.products.map(el => (
          <div key={el.id} className="card-block">
            <div className="card">
              <div className="card-img">
                <img src={el.img} alt=""/>
              </div>
              <div className="card-content">
                <h4>{el.title}</h4>
              </div>
              <div className="card-footer">
                <button className="btn btn-warning"><i className="fas fa-edit"></i> Edit</button>    
                <ConfirmPopup id={el.id} title={el.title} />
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
    products: state.products
  };
}
 
export default connect(mapStateToProps)(Products);