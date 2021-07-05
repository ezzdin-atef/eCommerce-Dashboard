import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { rate as addRate } from "../../redux/orders";

const RatePopup = (props) => {
  const [rate, setRate] = useState(null);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    // Save to database
    if (!rate) return null;

    dispatch(addRate({ id: props.id, rate: rate }));
    return true;
  };

  const displayStars = () => {
    let stars = [];
    for (let i = 1; i <= rate; i++) {
      stars.push(<i key={i} className="fas fa-star" onClick={() => setRate(i)}></i>);
    }
    for (let i = rate + 1; i <= 5; i++) {
      stars.push(<i key={i} className="far fa-star" onClick={() => setRate(i)}></i>);
    }
    return stars;
  };

  return (
    <Modal
      className=""
      text="Rate The Product"
      title={"Rate " + props.title}
      submit={handleSave}
      btnClass="btn btn-xm btn-link"
    >
      <div className="stars">{displayStars()}</div>
    </Modal>
  );
};

export default RatePopup;
