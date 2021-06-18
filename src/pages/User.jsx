import React, { useState } from "react";
import { connect } from "react-redux";

const User = (props) => {
  const [user, setUser] = useState(props.user);

  const handleChange = (e) => {
    const name = e.target.name;
    setUser({ ...user, [name]: e.target.value });
  };

  const onSave = (e) => {
    e.preventDefault();
    props.dispatch({ type: "UPDATE_USER", payload: { ...user } });
  };

  return (
    <div className="user-settings">
      <header>
        <h2>User Settings</h2>
      </header>
      <div className="content">
        <form>
          <div className="changable-img">
            <img src={user.image} alt={user.username} />
            <div className="img-change">
              <i className="fas fa-camera"></i>
              <span>Change Your Picture</span>
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" value={user.username} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="name" value={user.name} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={user.email} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="your_website">Your Website:</label>
            <input type="url" name="your_website" id="your_website" value={user.your_website} onChange={handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="twitter">Twitter:</label>
            <input type="url" name="twitter" id="twitter" value={user.twitter} onChange={handleChange} />
          </div>
          <button className="btn btn-primary" onClick={onSave}>
            <i className="fas fa-save"></i> Save
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(User);
