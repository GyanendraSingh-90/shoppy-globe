import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p>Total: ${total.toFixed(2)}</p>
          <Link to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;