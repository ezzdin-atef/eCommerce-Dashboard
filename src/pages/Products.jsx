import React from 'react';
import { connect } from "react-redux";
import ConfirmPopup from "../components/popups/ConfirmPopup";
import { motion } from "framer-motion";
import { Flipper, Flipped } from 'react-flip-toolkit';

const Products = props => {

  const AlterDiv = () => {
    return (
      <motion.div className="alter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3>You Don't Have Any Products <span role="img" aria-label="Sad Emoji">🙁</span></h3>
        <button className="btn btn-primary"><i className="fas fa-plus"></i> Add New</button>
      </motion.div>
    );
  }

  return (
    <div className="products">
      <header>
        <h2>Your Products</h2>
        <button className="btn btn-primary"><i className="fas fa-plus"></i> Add New</button>
      </header>
      {props.products.length !== 0? <Flipper flipKey={props.products}>
        <div className="products-content">
          {props.products.map(el => (
            <Flipped key={el.id} flipId={el.id}>
              <div  className="card-block">
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
            </Flipped>
          ))}
        </div>
      </Flipper> : <AlterDiv />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}
 
export default connect(mapStateToProps)(Products);