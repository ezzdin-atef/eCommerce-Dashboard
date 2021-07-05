import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { add } from "../../redux/products";

export default function NewProduct() {
  const [product, setProduct] = useState({
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
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { errors } = product;
    const name = e.target.name;
    if (e.target.value === "") errors[name] = "This field should not be empty!";
    else errors[name] = "";

    setProduct({ ...product, [name]: e.target.value, errors });
  };

  const ImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setProduct({ ...product, img: URL.createObjectURL(img) });
    }
  };

  const handleSubmit = (e) => {
    const { name, price, stock, category, img, errors } = product;
    if (name === "") errors.name = "This field should not be empty!";
    else errors.name = "";

    if (price === "") errors.price = "This field should not be empty!";
    else errors.price = "";

    if (stock === "") errors.stock = "This field should not be empty!";
    else errors.stock = "";

    if (category === "") errors.category = "This field should not be empty!";
    else errors.category = "";

    if (errors.name === "" && errors.price === "" && errors.stock === "" && errors.category === "") {
      dispatch(add({ name, price, stock, category, img }));
      setProduct({
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
      return true;
    }
    setProduct({ ...product, errors: errors });
    return false;
  };

  return (
    <Modal
      modelClass="new-product"
      text={[<i className="fas fa-plus"></i>, <span>Add New</span>]}
      title="Add New Product"
      submit={handleSubmit}
      submitBtnText="Add Product"
      btnClass="btn btn-primary"
    >
      <form>
        <div className="changable-img">
          <img src={product.img} alt="" />
          <div className="img-change">
            <input type="file" name="image" id="image" onChange={ImageChange} />
            <i className="fas fa-camera"></i>
            <label htmlFor="image">Change Your Picture</label>
          </div>
        </div>
        <div>
          <div className="form-input">
            <input type="text" placeholder="Name" name="name" id="name" value={product.name} onChange={handleChange} />
            <small>{product.errors.name}</small>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Price"
              name="price"
              id="price"
              value={product.price}
              onChange={handleChange}
            />
            <small>{product.errors.price}</small>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Quantity in Stock"
              name="stock"
              id="stock"
              value={product.stock}
              onChange={handleChange}
            />
            <small>{product.errors.stock}</small>
          </div>
          <div className="form-input">
            <select name="category" onChange={handleChange} value={product.category}>
              <option value="">Choose One</option>
              <option>Clothes</option>
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Others</option>
            </select>
            <small>{product.errors.category}</small>
          </div>
        </div>
      </form>
    </Modal>
  );
}
