import React, { useGlobal } from "reactn";
import Item from "../components/Item";

const Checkout = () => {
  const [items, setItems] = useGlobal('cart');

  const total = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      {items.map((item, i) => (
        <Item checkout={true} key={i} item={item} />
      ))}
      <div>
        <h4>Your total is: ${total / 100}</h4>
      </div>
    </div>
  )
}

export default Checkout;