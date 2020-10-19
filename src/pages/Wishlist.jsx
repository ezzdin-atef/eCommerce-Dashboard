import React from 'react';
import WishlistCard from "../components/WishlistCard";
import applewatch from "../img/apple-watch.jpg";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <h2>Your Orders</h2>
      <div className="wishlist-content">
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
        <WishlistCard img={applewatch} title="Philips Headphone" price="335" />
      </div>
    </div>
  );
}
 
export default Wishlist;