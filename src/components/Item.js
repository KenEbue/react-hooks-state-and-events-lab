import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const toggleCartStatus = () => {
    setInCart(!inCart);
  };

  const cartButtonLabel = inCart ? "Remove From Cart" : "Add to Cart";
  const listItemClass = inCart ? "in-cart" : "";

  return (
    <li className={listItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {cartButtonLabel}
      </button>
    </li>
  );
}

export default Item;
