import React, { useState } from "react";
import Modal from "../Modal";
import img from "../../img/user.jpeg";

export default function NewProduct() {
  const [user, setUser] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    img: "https://via.placeholder.com/400",
    errors: {
      name: "",
      price: "",
      stock: "",
      category: "",
    },
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setUser({ ...user, [name]: e.target.value });
  };

  const ImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setUser({ ...user, img: URL.createObjectURL(img) });
    }
  };

  const handleSubmit = (e) => {
    const { errors } = user;
    if (user.name === "") errors.name = "This field should not be empty!";
    else errors.name = "";

    if (user.price === "") errors.price = "This field should not be empty!";
    else errors.price = "";

    if (user.stock === "") errors.stock = "This field should not be empty!";
    else errors.stock = "";

    if (user.category === "") errors.category = "This field should not be empty!";
    else errors.category = "";

    setUser({ ...user, errors: errors });
  };

  return (
    <Modal
      className="new-product"
      text={[<i className="fas fa-plus"></i>, " Add New"]}
      title="Add New Product"
      submit={handleSubmit}
      submitBtnText="Add Product"
    >
      <form>
        <div className="changable-img">
          <img src={user.img} alt="" />
          <div className="img-change">
            <input type="file" name="image" id="image" onChange={ImageChange} />
            <i className="fas fa-camera"></i>
            <label htmlFor="image">Change Your Picture</label>
          </div>
        </div>
        <div>
          <div className="form-input">
            <input type="text" placeholder="Name" name="name" id="name" value={user.name} onChange={handleChange} />
            <small>{user.errors.name}</small>
          </div>
          <div className="form-input">
            <input type="text" placeholder="Price" name="price" id="price" value={user.price} onChange={handleChange} />
            <small>{user.errors.price}</small>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Quantity in Stock"
              name="stock"
              id="stock"
              value={user.stock}
              onChange={handleChange}
            />
            <small>{user.errors.stock}</small>
          </div>
          <div className="form-input">
            <select name="category" onChange={handleChange} value={user.category}>
              <option value="">Choose One</option>
              <option>Clothes</option>
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Others</option>
            </select>
            <small>{user.errors.category}</small>
          </div>
        </div>
      </form>
    </Modal>
  );
}
