import classes from "./Cart.module.css";

export default function Cart(props) {
  const dummysushi = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }];
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {dummysushi.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
