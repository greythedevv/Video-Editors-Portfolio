import { useContext } from "react";
import { CartContext } from "../Context/cardcontext";

export const Checkout = () => {
  const { cart, removeFromCart, totalPrice, clearCart } = useContext(CartContext);

 
  const handleCheckout = () => {
    if (cart.length === 0) return; 

    alert(`Thank you for your purchase! Your total bill is $${totalPrice}.`);
    clearCart();
  };



  return (
    <div>
        <div className="checkout-container">
      <h1 className="checkout-headline">Checkout</h1>

      {cart.length === 0 ? (
        <p className="chectout-paragraph">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3 className="checkout-item-name">{item.name}</h3>
              <p className="checkout-item-price">${item.price}</p>

              <button onClick={() => removeFromCart(index)} className="remove-button">
                Remove
              </button>
            </div>
          ))}

          <h2 className="total-price">Total: ${totalPrice}</h2>
          <button onClick={handleCheckout} className="checkout">checkout</button>
        </>
      )}
      
      </div>
     
    </div>
  );
};