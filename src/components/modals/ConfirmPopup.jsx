import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { connect } from "react-redux";

const ConfirmPopup = (props) => {
  const handleConfirm = () => {
    props.dispatch({ type: "DELETE_PRODUCT", payload: { id: props.id } });
  };

  return (
    <Modal text={[<i className="fas fa-trash-alt"></i>, " Delete"]} title="Are you sure?" submit={handleConfirm}>
      <p>Are you sure you want to delete "{props.title}"</p>
    </Modal>
  );
};

export default connect()(ConfirmPopup);
