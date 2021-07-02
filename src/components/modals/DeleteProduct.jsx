import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/products";

const DeleteProduct = (props) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(remove(props.id));
  };

  return (
    <Modal
      text={[<i className="fas fa-trash-alt"></i>, " Delete"]}
      title="Are you sure?"
      submit={handleConfirm}
      btnClass="btn btn-danger-light"
    >
      <p>Are you sure you want to delete "{props.title}"</p>
    </Modal>
  );
};

export default DeleteProduct;