import React from "react";
import { useSelector } from "react-redux";
import DeleteProduct from "../components/modals/DeleteProduct";
import NewProduct from "../components/modals/NewProduct";
import EditProduct from "../components/modals/EditProduct";
import { motion } from "framer-motion";
import { Flipper, Flipped } from "react-flip-toolkit";

const Products = (props) => {
  const products = useSelector((state) => state.products.value);

  const AlterDiv = () => {
    return (
      <motion.div className="alter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3>
          You Don't Have Any Products{" "}
          <span role="img" aria-label="Sad Emoji">
            🙁
          </span>
        </h3>
        <button className="btn btn-primary">
          <i className="fas fa-plus"></i> Add New
        </button>
      </motion.div>
    );
  };

  return (
    <div className="products">
      <header>
        <h2>Your Products</h2>
        <NewProduct />
      </header>
      {products.length !== 0 ? (
        <Flipper flipKey={products}>
          <div className="products-content">
            {products.map((el) => (
              <Flipped key={el.id} flipId={el.id}>
                <div className="card-block">
                  <div className="card">
                    <div className="card-img">
                      <img src={el.img} alt="" />
                    </div>
                    <div className="card-content">
                      <h4>{el.name}</h4>
                    </div>
                    <div className="card-footer">
                      <EditProduct id={el.id} productName={el.name} />
                      <DeleteProduct id={el.id} title={el.name} />
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

export default Products;
