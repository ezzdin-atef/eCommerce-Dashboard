import React, { useState } from "react";
import Modal from "../Modal";
import { useSelector, useDispatch } from "react-redux";
import { rate as addRate } from "../../redux/orders";

const RatePopup = (props) => {
  const [rate, setRate] = useState(null);
  const orders = useSelector((state) => state.orders.value);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    // Save to database
    if (!rate) return null;

    dispatch(addRate({ id: props.id, rate: rate }));
    return true;
  };

  const handleClickStars = (e, rate) => {
    setRate(rate);
    e.target.className = "fas fa-star";
    let prev = e.target.previousSibling;
    while (prev) {
      prev.className = "fas fa-star";
      prev = prev.previousSibling;
    }
    let next = e.target.nextSibling;
    while (next) {
      next.className = "far fa-star";
      next = next.nextSibling;
    }
  };

  return (
    <Modal className="" text="Rate The Product" title={"Rate " + props.title} submit={handleSave}>
      <div className="stars">
        <i className="far fa-star" onClick={(e) => handleClickStars(e, "1")}></i>
        <i className="far fa-star" onClick={(e) => handleClickStars(e, "2")}></i>
        <i className="far fa-star" onClick={(e) => handleClickStars(e, "3")}></i>
        <i className="far fa-star" onClick={(e) => handleClickStars(e, "4")}></i>
        <i className="far fa-star" onClick={(e) => handleClickStars(e, "5")}></i>
      </div>
    </Modal>
  );
};

export default RatePopup;