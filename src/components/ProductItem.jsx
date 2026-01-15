import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Add to Redux cart
  };

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} loading="lazy" /> {/* Lazy load images */}
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;