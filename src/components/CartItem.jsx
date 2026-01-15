import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <h4>{item.title}</h4>
      <p>${item.price} x {item.quantity}</p>
      <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;